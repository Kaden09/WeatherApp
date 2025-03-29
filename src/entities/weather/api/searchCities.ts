import { weatherApi } from "../../../shared/config/index.ts";
import { ISearchCities } from "../index.ts";

async function searchCities(city: string): Promise<ISearchCities[]> {
  alert(city);
  try {
    let { data } = await weatherApi.get<ISearchCities[]>("/search.json", {
      params: {
        q: city,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export default searchCities;
