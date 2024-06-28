import {useState} from "react";
import {toast} from "react-toastify";
import {Constants} from "../config/env.ts";
import {HttpClient} from "../utils/httpClient.ts";

interface IPostData {
    actionTitle: string;
    onSuccessText: string;
    onErrorText: string;
    api?: string;
}

const usePostData = (props: IPostData) => {
    const [isLoading, setIsLoading] = useState(false);


    const postData = async (url: string, data: any) => {
        setIsLoading(true);
        try {


            const apiUrl = props.api ?? Constants.API_URLS.DEFAULT;

            const response = await HttpClient(apiUrl)
                .post(url, data)
                .then((res) => {
                    toast.success(props.onSuccessText, {
                        toastId: "OPERATION_SUCCESSFUL"
                    })
                    return res;
                })
                .catch((error: any) => {
                    console.log("here");
                    toast.error(error.response.data.message, {
                        toastId: "ERROR_POSTING_DATA"
                    })
                    throw new Error(error.response.data.message);
                });

            checkData(response.data);


            return await response.data;
        } catch (error: any) {

            toast.error("am here");

            toast.error(error.message, {
                toastId: "ERROR_POSTING_DATA"
            })

        } finally {
            setIsLoading(false);
        }
    };
    return {postData, isLoading};
};


function checkData(response: any) {


    if (!response.status) {
        throw Error(response?.statusText ?? "Internal Server Error")
    }

    if (response.status === 201) {
        return;
    }
    console.log(response)
    if (!response.data) throw Error(response?.statusText);
}

export default usePostData;
