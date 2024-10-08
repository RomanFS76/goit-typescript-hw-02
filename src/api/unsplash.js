import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/"
const KEY_API = "SPWQOYHFvR2Pvl2gJRcvBXyy6Wm-CFl80HRpfsb0okw";

export const getImagesApi = async (searchQuery,page) => {
    const {data} = await axios.get(`/search/photos/?client_id=${KEY_API}`, {params:{
        query:searchQuery,
        per_page:12,
        page
    }});
    return data.results; 
};