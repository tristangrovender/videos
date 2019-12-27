import axios from "axios";

const KEY = "AIzaSyBEtelOKFqMhtzAmMhSXUJ0ia2wr1P5Q3k";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: `${KEY}`
    }
});
