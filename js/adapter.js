

class Adapter {

  // const API_KEY: 'your_api_key';
  // const API_SECRET: 'd002bb74b9f9d0b1';

  static getJson(page) {

    Image.all = [] // clean Image.all

    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=#{API_KEY}&safe_search=1&format=json&nojsoncallback=?&text=places&per_page=10&page=` + page)
    .then(r=> r.json())
    .then(json=> {
      const answer = json.photos.photo;
      let i = 0;
      answer.forEach( e => {
        var api = answer[i];
        new Image(api.id, api.server, api.farm, api.secret);
        i++;
      })   // call fetch api and pass the elements to Image class
      this.getImages()  //call getImages
    })
  }

  static getImages() {  //call Image.renderGrid function
    Image.renderGrid();
    EventListener.addEventListenerImages();  // add EventListener on each Image
  }


}
