import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../../../entities/weather/index.ts";
import { useAtomValue } from "jotai";
import { cityAtom } from "../../../shared/store/weatherAtoms.ts";

function useWeather() {
  const city = useAtomValue(cityAtom);
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    enabled: !!city,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

export default useWeather;
