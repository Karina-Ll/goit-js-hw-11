import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "54634222-77c9b0f4b64a04c45eba29331";

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  })
  .then(response => response.data);
}
