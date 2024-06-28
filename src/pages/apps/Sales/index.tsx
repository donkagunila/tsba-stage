import MainLayout from "../../../components/layouts/MainLayout";
import DataTable from "../../../components/base/Table/DataTable";
import FormModal from "../../../components/base/forms/FormModal";
import {useState} from "react";
import usePostData from "../../../hooks/usePostData.ts";
import {Constants} from "../../../config/env.ts";
import useDataFetch from "../../../hooks/useDataFetch.ts";
import {toast} from "react-toastify";
import * as yup from "yup";
import {formatMoney} from "../../../utils/general.helpers.ts";


const SalesPage = () => {
    const [showCreate, setShowCreate] = useState<boolean>(false);

    const fetchUrl: string = "/sales"

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
        actionTitle: "Log Expense",
        onSuccessText: "Expense Logged Successfully",
        onErrorText: "Error Logging Expense",
        api: Constants.API_URLS.USER_SERVICE,
    })

    const handleLogSale = async (data: any) => {

        await postData(fetchUrl, data).then((res) => {
            if (res.data) {
                void fetchData(fetchUrl);
            }
        }).finally(() => {
            setShowCreate(false)
        });
    }


    return (
        <MainLayout title="Daily Sales">
            <div>
                <DataTable flat
                           showCreateButton
                           onCreateButtonClick={() => {
                               setShowCreate(true);
                           }}
                           createButtonLabel="Log Sale"
                           columns={[
                               {
                                   name: "Name",
                                   field: "name"
                               },
                               {
                                   name: "Quantity",
                                   field: "quantity"
                               },
                               {
                                   name: "Price",
                                   field: "amount",
                                   render: (row: any) => {
                                       return (
                                           <div>
                                               {formatMoney(Number(row.amount))}
                                           </div>
                                       )
                                   }
                               },
                               {
                                   name: "Total",
                                   field: "total",
                                   render: (row: any) => {
                                       return (
                                           <div>
                                               {formatMoney(Number(row.total))}
                                           </div>
                                       )
                                   }
                               },
                               {
                                   name: "Date",
                                   field: "createdAt"
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
                title="Log Sale"
                inputs={[
                    {
                        name: "name",
                        label: "Customer Name",
                        type: "text",
                        placeholder: "Enter Customer Name",
                        value: ""
                    },
                    {
                        name: "quantity",
                        label: "Quantity",
                        type: "number",
                        placeholder: "Enter Sales Quantity",
                        value: ""
                    },
                    {
                        name: "amount",
                        label: "Amount (Tzs)",
                        type: "number",
                        placeholder: "Enter Sales Price per Item",
                        value: ""
                    },
                    {
                        name: "remarks",
                        label: "Remarks",
                        type: "textarea",
                        placeholder: "Sales Comments Or Remark",
                        value: ""
                    }
                ]}
                schema={yup.object({
                    name: yup.string().required().label("Expense Type"),
                    amount: yup.number().required().label("Amount"),
                    quantity: yup.number().required().label("Quantity"),
                    remarks: yup.string().required().label("remarks"),
                })}
                onClose={() => {
                    setShowCreate(false)
                }} onSubmit={(data: any) => {
                void handleLogSale(data)
            }}/>

        </MainLayout>
    );
}

export default SalesPage