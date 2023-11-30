import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useFetchData(productLink: string) {
  const { data, error, isLoading } = useSWR(`${productLink}`, fetcher);
  if (error) return { isLoading: false, error, data: null };
  if (isLoading) return { isLoading: true, error: null, data: null };
  return { data, error: null, isLoading: false };
}
