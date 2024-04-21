import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43500562-b59296b97b4360198cb07a703';

export async function searchObject(searchName, page) {
  const { data } = await axios(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: searchName,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });
  return data;
}
