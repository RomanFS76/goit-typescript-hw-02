import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/"
const KEY_API = "c5Fj6Lu1o7-m2UrVqvMUlR8r7rvHkIUekKVz-9edbYQ";

export const getImagesApi = async (searchQuery,page) => {
    const {data} = await axios.get(`/search/photos/?client_id=${KEY_API}`, {params:{
        query:searchQuery,
        per_page:12,
        page
    }});
    return data.results; 
};