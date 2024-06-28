import MainLayout from "../../../components/layouts/MainLayout";
import DataTable from "../../../components/base/Table/DataTable";
import FormModal from "../../../components/base/forms/FormModal";
import {useState} from "react";
import useDataFetch from "../../../hooks/useDataFetch.ts";
import {Constants} from "../../../config/env.ts";
import {toast} from "react-toastify";
import usePostData from "../../../hooks/usePostData.ts";
import * as yup from "yup";


const ProductionPage = () => {
    const [showCreate, setShowCreate] = useState<boolean>(false);

    const fetchUrl: string = "/collections"
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
        actionTitle: "Log Collection",
        onSuccessText: "collection Logged Successfully",
        onErrorText: "Error Logging collection",
        api: Constants.API_URLS.USER_SERVICE,
    })

    const handleLogCollection = async (data: any) => {
        const payload = {
            ...data,
            batch: data.batchId.value
        }

        await postData(fetchUrl, payload).then((res) => {
            if (res.data) {
                void fetchData(fetchUrl);
            }
        }).finally(() => {
            setShowCreate(false)
        });
    }

    return (
        <MainLayout title="Daily Production">
            <div>
                <DataTable flat
                           showCreateButton
                           onCreateButtonClick={() => {
                               setShowCreate(true);
                           }}
                           createButtonLabel="Log Collection"
                           columns={[
                               {
                                   name: "Batch ID",
                                   field: "batch"
                               },
                               {
                                   name: "Trays",
                                   field: "trays"
                               },
                               {
                                   name: "Eggs",
                                   field: "eggs"
                               },
                               {
                                   name: "breakage",
                                   field: "breakage"
                               },
                               {
                                   name: "Total",
                                   field: "total"
                               },
                               {
                                   name: "Date",
                                   field: "createdAt"
                               },
                               {
                                   name: "Percentage",
                                   field: "percentage"
                               },
                               {
                                   name: "Mortality",
                                   field: "mortality"
                               },
                               {
                                   name: "stock",
                                   field: "stock"
                               }
                           ]}
                           rows={data && data.length > 0 ? data : []} loading={loading}/>
            </div>

            <FormModal
                open={showCreate}
                title="Log Daily Status"
                inputs={[
                    {
                        name: "batchId",
                        label: "Batch",
                        type: "select",
                        options: [{
                            label: "Batch 1",
                            value: "batch1"
                        }, {
                            label: "Batch 2",
                            value: "batch2"
                        }, {
                            label: "Batch 3",
                            value: "batch3"
                        }],
                        placeholder: "Select Batch",
                        value: ""
                    },
                    {
                        name: "total",
                        label: "Total collection",
                        type: "amount",
                        placeholder: "How many eggs did you collect?",
                        value: ""
                    },
                    {
                        name: "breakage",
                        label: "Breakage",
                        type: "number",
                        placeholder: "How many eggs broke?",
                        value: ""
                    },
                    {
                        name: "mortality",
                        label: "mortality",
                        type: "number",
                        placeholder: "How many chickens died?",
                        value: ""
                    },
                    {
                        name: "remarks",
                        label: "Comments",
                        type: "textarea",
                        placeholder: "Any comments or remarks?",
                        value: ""
                    }
                ]}
                schema={yup.object({
                    batchId: yup.mixed().required().label("Batch Type"),
                    total: yup.number().required().label("Total"),
                    breakage: yup.number().required().label("Breakage"),
                    mortality: yup.number().required().label("mortality"),
                    remarks: yup.string().required().label("remarks"),
                })}
                onClose={() => {
                    setShowCreate(false)
                }}
                onSubmit={(data: any) => {
                    void handleLogCollection(data)
                }}/>

        </MainLayout>
    );
}

export default ProductionPage