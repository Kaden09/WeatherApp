import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../../../entities/weather/index.ts";
import { useAtomValue } from "jotai";
import { cityAtom } from "../../../shared/store/weatherAtoms.ts";

function useWeather() {
  const city = useAtomValue(cityAtom);

  return useQuery({
    queryKey: ["weather", city],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return fetchWeather(city);
    },
    enabled: !!city,
    staleTime: 1000 * 60 * 5,
  });
}

export default useWeather;
