//consulta a base de datos

class Api {
	
   getTopTracks = async () => {
    try {
        
      //define el api key y la url
      const ApiKey ='829751643419a7128b7ada50de590067';
      var country = 'colombia';
      var limit = 20;
      const API_REQUEST =`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=${ApiKey}&limit=${limit}&format=json`;
        
      //realiza la solicitud y retorna los datos
      const query = await fetch(API_REQUEST);
      const data = await query.json();
      return data.tracks;

    } catch (error) {
      console.error(error);
    }
  };
}

export default new Api();