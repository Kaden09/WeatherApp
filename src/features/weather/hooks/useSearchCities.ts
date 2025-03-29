import { useQuery } from "@tanstack/react-query";
import { searchCities } from "../../../entities/weather/index.ts";

function useSearchCities(city: string) {
  return useQuery({
    queryKey: ["search-cities", city],
    queryFn: () => searchCities(city),
    enabled: city.length > 2,
    staleTime: 1000 * 60 * 5,
  });
}

export default useSearchCities;
