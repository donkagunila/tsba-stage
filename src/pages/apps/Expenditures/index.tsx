import MainLayout from "../../../components/layouts/MainLayout";
import DataTable from "../../../components/base/Table/DataTable";
import {useState} from "react";
import FormModal from "../../../components/base/forms/FormModal";
import useDataFetch from "../../../hooks/useDataFetch.ts";
import {Constants} from "../../../config/env.ts";
import usePostData from "../../../hooks/usePostData.ts";
import {toast} from "react-toastify";
import * as yup from "yup";
import {formatMoney} from "../../../utils/general.helpers.ts";


const ExpendituresPage = () => {

    const [showCreate, setShowCreate] = useState<boolean>(false);

    const fetchUrl: string = "/expenditures"


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

    const handleLogExpense = async (data: any) => {
        const payload = {
            ...data,
            type: data.expenseType.value
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
        <MainLayout title="Daily Expanditures">
            <div>
                <DataTable flat
                           showCreateButton
                           onCreateButtonClick={() => {
                               setShowCreate(true);
                           }}
                           loading={loading}
                           createButtonLabel="Log Expense"
                           columns={[

                               {
                                   name: "Expense Type",
                                   field: "type"
                               },
                               {
                                   name: "Expense Amount",
                                   field: "amount",
                                   render: (row: any) => {
                                       return (
                                           <div className="text-right w-[200px]">
                                               {formatMoney(Number(row.amount))}
                                           </div>
                                       )
                                   }
                               },
                               {
                                   name: "Remarks",
                                   field: "remarks"
                               },
                               {
                                   name: "Logged By",
                                   field: "createdBy"
                               },
                               {
                                   name: "Logged At",
                                   field: "createdAt",
                                   render: (row: any) => {
                                       return (
                                           <div>
                                               {row.createdAt}
                                           </div>
                                       )
                                   }
                               },

                           ]} rows={data && data.length > 0 ? data : []}/>
            </div>

            <FormModal
                open={showCreate}
                title="Log Expense"
                inputs={[
                    {
                        name: "expenseType",
                        label: "Expense Type",
                        type: "select",
                        options: [
                            {label: "Feeds", value: "feeds"},
                            {label: "Drugs", value: "drugs"},
                            {label: "Electricity", value: "electricity"},
                            {label: "Maintenance", value: "maintenance"},
                            {label: "Fuel", value: "fuel"},
                            {label: "Vaccine", value: "vaccine"},
                            {label: "Food", value: "food"},
                            {label: "Treatment", value: "treatment"},
                            {label: "Empty Tray", value: "empty tray"},
                            {label: "Fumigation", value: "fumigation"},
                            {label: "Salaries", value: "salaries"},
                            {label: "Others", value: "others"},

                        ],
                        placeholder: "Enter Expense Type",
                        value: ""
                    },
                    {
                        name: "amount",
                        label: "Amount (Tzs)",
                        type: "number",
                        placeholder: "Enter Expenditure Amount",
                        value: ""
                    },
                    {
                        name: "remarks",
                        label: "Remarks",
                        type: "textarea",
                        placeholder: "Expense Comments",
                        value: ""
                    }
                ]}
                schema={yup.object({
                    expenseType: yup.mixed().required().label("Expense Type"),
                    amount: yup.number().required().label("Amount"),
                    remarks: yup.string().required().label("remarks"),
                })}
                onClose={() => {
                    setShowCreate(false)
                }}
                onSubmit={(data: any) => {
                    void handleLogExpense(data)
                }}/>
        </MainLayout>
    );
}

export default ExpendituresPage