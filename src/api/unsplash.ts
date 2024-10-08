import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/"
const KEY_API = "c5Fj6Lu1o7-m2UrVqvMUlR8r7rvHkIUekKVz-9edbYQ";

interface data {
    searchQuery: string;
    page: number;
}



export const getImagesApi = async <T extends data > (searchQuery:string, page:number ):Promise<T> => {
    const {data}:T = await axios.get(`/search/photos/?client_id=${KEY_API}`, {params:{
        query:searchQuery,
        per_page:12,
        page
    }});
    console.log(data)
    return data.results; 
};