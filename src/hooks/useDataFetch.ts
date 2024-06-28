import {useEffect, useState} from "react";
import {HttpClient} from "../utils/httpClient.ts";
import {Constants} from "../config/env.ts";


interface FetchResult<T> {
    fetchData: (url: string) => Promise<void>;
    data: T | null;
    loading: boolean;
    error: string | null;
}

interface FetchProps {
    url: string;
    type?: "main" | "detail";
    id?: string;
    api?: string;
}

const useDataFetch = <T, >(props: FetchProps): FetchResult<T> => {
    const {url, type, id, api} = props;
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);


    const fetchData = async (url: string): Promise<void> => {
        setLoading(true);
        setError(null);

        console.log("am here")


        try {

            const apiUrl = api ?? Constants.API_URLS.DEFAULT;
            const response: any = await HttpClient(apiUrl).get(url);

            let responseData = response.data.data;
            if (response.data.data === undefined) {
                responseData = response.data;
            }
            setData(responseData);
        } catch (err: any) {
            const errorMessage =
                err.response?.data?.message ?? "An error occurred while fetching data.";

            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let fetchType = type;

        if (fetchType === undefined) {
            fetchType = "main";
        }

        if (fetchType === "main") {
            void fetchData(url);
        }
        if (fetchType === "detail") {
            if (id === undefined) {
                return;
            } else {
                void fetchData(url);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, type, url]);

    return {
        fetchData,
        data,
        loading,
        error
    };
};

export default useDataFetch;
