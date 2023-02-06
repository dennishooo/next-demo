import useSWR from "swr";
import { apiServices } from "../lib/apiServices";
import { env } from "../lib/env";

export default function useItem(id: string) {
  console.log(env.API_SERVER_URL);

  const { data, error, isLoading } = useSWR(
    env.API_SERVER_URL + `/items/${id}`,
    apiServices.get
  );
  return {
    item: data,
    isLoading,
    isError: error,
  };
}
