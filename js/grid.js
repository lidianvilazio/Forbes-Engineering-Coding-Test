

class Grid {

  static buildRow(total) {                               // total is the total of rows
    let i = 0;
    let section = document.getElementById('grid');      // get element grid
    section.innerHTML = '';                             //clean grid element
    while(i < total) {
      let row = document.createElement('div');         // create row
      row.className = 'row'
      row.id = row.className+i
      section.appendChild(row);                       // add row to grid
      i++;
      this.buildCol(row.id);                         // call buildCol function
    }
  }

  static buildCol(r) {                              //r is the row id that the col will be
    const totalImages = Image.all;                 // get Images
    let i = 0;
    while(i < 5) {
      let col = document.createElement('div');    // create col
      col.className = 'col-1-of-5';
      col.id = col.className+r+i                 // given a uniq id to col
      let row = document.getElementById(r);
      row.appendChild(col);                     // add col to row
      Image.renderImages(totalImages[totalImages.length-1], col.id);    //call renderImages
      totalImages.pop();                                                //takes the image out
      i++;
    }
  }

  static button(direction) {
    let row = document.createElement('div');
    row.className = "row u-center-text u-margin-bottom-big"   //button builder
    let section = document.getElementById(direction);
    section.appendChild(row);
    let i = 0;
    while(i < 2) {
      let col = document.createElement('div');
      col.className = 'col-1-of-2'
      row.appendChild(col);
      let a = document.createElement('a');
      a.className = "btn btn--black";
      if(i === 0) {
        a.innerHTML = '&larr; Back';
        a.id = 'back';
      } else {
        a.innerHTML = 'Next &rarr;';
        a.id = 'next'
      }
      col.appendChild(a)
      i++;
    }
  }

}
