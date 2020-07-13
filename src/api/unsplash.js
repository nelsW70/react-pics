import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 1W0u_D9tcQ0my3BZWgjeCuBL26aTWK73E2BoqKFh8iI',
  },
});
