import MainLayout from "../../../components/layouts/MainLayout";
import DataTable from "../../../components/base/Table/DataTable";
import {useState} from "react";
import useDataFetch from "../../../hooks/useDataFetch.ts";
import {Constants} from "../../../config/env.ts";
import {toast} from "react-toastify";
import usePostData from "../../../hooks/usePostData.ts";
import FormModal from "../../../components/base/forms/FormModal";
import * as yup from "yup";
import clsx from "clsx";


const StocksPage = () => {

    const [showCreate, setShowCreate] = useState<boolean>(false);

    const fetchUrl: string = "/stocks"
    const {
        data, error, loading, fetchData
    } = useDataFetch<any[]>({
        type: "main",
        url: fetchUrl,
        api: Constants.API_URLS.USER_SERVICE
    })

    if (!loading && error) {
        const errorMessage = "Error " + error;
        toast.info(errorMessage, {
            toastId: "ERROR_FETCHING_DATA"
        })
    }

    const {postData} = usePostData({
        actionTitle: "Log Stock",
        onSuccessText: "Stock Logged Successfully",
        onErrorText: "Error Logging Stock",
        api: Constants.API_URLS.USER_SERVICE,
    })

    const handleLogStock = async (data: any) => {
        await postData(fetchUrl, data).then((res) => {
            if (res.data) {
                void fetchData(fetchUrl);
            }
        }).finally(() => {
            setShowCreate(false)
        });
    }


    return (
        <MainLayout title="Stocks">
            <div>
                <DataTable
                    flat
                    showCreateButton
                    onCreateButtonClick={() => {
                        setShowCreate(true);
                    }}
                    createButtonLabel="Add Stock"
                    columns={[
                        {
                            name: "Batch Name",
                            field: "batchName"
                        },
                        {
                            name: "Start Stock",
                            field: "startStock"
                        },
                        {
                            name: "Current Stock",
                            field: "currentStock"
                        },
                        {
                            name: "Created",
                            field: "createdAt"
                        },
                        {
                            name: "status",
                            field: "isActive",
                            render: (row: any) => {
                                return (
                                    <div
                                        className={clsx([
                                            "flex items-center",
                                            {"text-green-600": row.isActive},
                                            {"text-red-600": !row.isActive}
                                        ])}
                                    >
                                        {row.isActive ? "Active" : "Inactive"}
                                    </div>
                                );
                            }
                        },
                        {
                            name: "Action",
                            field: "action"
                        }
                    ]}
                    rows={data && data.length > 0 ? data : []} loading={loading}/>
            </div>

            <FormModal
                open={showCreate}
                title="Log Daily Status"
                inputs={[
                    {
                        name: "batchName",
                        label: "Batch Name",
                        type: "text",
                        placeholder: "Enter Batch Name",
                        value: ""
                    },
                    {
                        name: "startStock",
                        label: "Start Stock",
                        type: "number",
                        placeholder: "How many eggs broke?",
                        value: ""
                    },

                ]}
                schema={yup.object({
                    batchName: yup.string().required().label("Batch Name"),
                    startStock: yup.number().required().label("Total Stock"),
                })}
                onClose={() => {
                    setShowCreate(false)
                }}
                onSubmit={(data: any) => {
                    void handleLogStock(data)
                }}/>
        </MainLayout>
    );
}

export default StocksPage