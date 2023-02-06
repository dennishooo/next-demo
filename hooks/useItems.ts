import useSWR from "swr";
import { apiServices } from "../lib/apiServices";
import { env } from "../lib/env";

export default function useItems() {
  const { data, error, isLoading } = useSWR(
    env.API_SERVER_URL + "/items",
    apiServices.get
  );
  return {
    items: data,
    isLoading,
    isError: error,
  };
}
