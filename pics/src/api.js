import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID aLH6dtF6y9EUm7UhAHVionvyTGX2nmAS9seDr4rL0ug',
      },   
      params: {
        query: term,
      },  
    });

    return response.data.results;
};

export default searchImages;