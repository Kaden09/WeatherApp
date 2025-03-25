import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../../../entities/weather/index.ts";

function useWeather(city: string) {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    enabled: !!city,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

export default useWeather;
