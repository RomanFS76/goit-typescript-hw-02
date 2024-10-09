import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const KEY_API = "c5Fj6Lu1o7-m2UrVqvMUlR8r7rvHkIUekKVz-9edbYQ";

interface ImageResult {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
}

interface ApiResponse {
  results: ImageResult[];
}

export const getImagesApi = async (searchQuery: string,page: number): Promise<ImageResult[]> => {
  const { data } = await axios.get<ApiResponse>(`/search/photos/?client_id=${KEY_API}`,
    {
      params: {
        query: searchQuery,
        per_page: 12,
        page,
      },
    }
  );
  return data.results;
};
