import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43211197-e02e136a3ee46bcda7d5bf66f';

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
