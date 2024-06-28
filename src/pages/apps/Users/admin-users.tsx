import DataTable from "../../../components/base/Table/DataTable";
import {useState} from "react";
import useDataFetch from "../../../hooks/useDataFetch.ts";
import {toast} from "react-toastify";
import {Constants} from "../../../config/env.ts";
import clsx from "clsx";
import CreateUser from "../../../components/domains/apps/users/CreateUser";

const AdminUsers = () => {

    const fetchUrl = "/users?type=ADMINISTRATION"
    const [showCreate, setShowCreate] = useState<boolean>(false);


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
    return (
        <div>
            <DataTable
                flat
                showCreateButton
                loading={loading}
                createButtonLabel="Create Admin"
                onCreateButtonClick={() => {
                    setShowCreate(true);
                }}
                columns={[
                    {
                        name: "User",
                        field: "username"
                    },
                    {
                        name: "Full Name",
                        field: "fullName"
                    },
                    {
                        name: "email",
                        field: "emailAddress"
                    },
                    {
                        name: "Phone",
                        field: "phoneNumber"
                    },
                    {
                        name: "Profile",
                        field: "role"
                    },
                    {
                        name: "Status",
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
                        name: "registered",
                        field: "createdAt"
                    },
                    {
                        name: "action",
                        field: "action"
                    }
                ]} rows={data && data.length > 0 ? data : []}/>


            <CreateUser open={showCreate} onClose={() => {
                void fetchData(fetchUrl);
                void setShowCreate(false);
            }}/>

        </div>
    );
};

export default AdminUsers;