import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Cient-ID aLH6dtF6y9EUm7UhAHVionvyTGX2nmAS9seDr4rL0ug',
      },   
      params: {
        query: 'cars',
      }  
    
    
    });

    //Caveman debugging    
    console.log(response);

    return response;
};

export default searchImages;