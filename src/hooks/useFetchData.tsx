import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useFetchData(productLink: string) {
  const { data, error, isLoading } = useSWR(`${productLink}`, fetcher);
  if (error) return "error!!!";
  if (isLoading) return "Loading...";
  if (!data) return "No data";
  return { data, error, isLoading };
}
