

class Image {

  constructor(id, server, farm, secret) {    //class contructor
    this.id = id
    this.server = server
    this.farm = farm
    this.secret = secret
    Image.all.push(this)
  }

  static renderGrid() {                           // pass how many rows will be builded
    const total = Math.ceil(this.all.length/5);  //total of rows
    Grid.buildRow(total)                        //  call GRID.buildRow function
  }

  static renderImages(image, c) {          //image is the image's url, c is the col id that image will be
    if(image) {
      let a = document.createElement('a');        //create a element
      a.className = 'thumbnails';                 //givin a class to a element
      a.href= '#fade';
      let col = document.getElementById(c);       //getting col
      col.appendChild(a);                         //adding a to col
      let img = document.createElement('img');    //creating a img
      img.id = image.id;
      a.appendChild(img);                         //adding the img to a
      let h = document.getElementById(image.id);  //getting the image and passing the src
      h.src = "https://farm" + image.farm + ".staticflickr.com/" + image.server + "/" + image.id + "_" + image.secret +".jpg";
    }
  }
}



Image.all = []
