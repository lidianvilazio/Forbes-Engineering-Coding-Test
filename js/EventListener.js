

class EventListener {

  static next() {
    let next = document.getElementById('next');    //EventListener button next
    next.addEventListener('click', e => {
      if(page < 5) {
        page++
        Adapter.getJson(page);
      }
    })
  }


  static back() {                 //EventListener button back

    let next = document.getElementById('back')
    next.addEventListener('click', e => {
      if(page > 0) {
        page--;
        Adapter.getJson(page);
      }
    })
  }

  static addEventListenerImages() {                //EventListener images
    let images = document.querySelectorAll('.thumbnails');
    images.forEach(e => {
      e.addEventListener('click', e => {
        if(document.documentElement.scrollTop > 20) {
          document.documentElement.scrollTop = 300;
        }
        Modal.renderModal(e.target.src);
      })
    })
  }


  static modalListener(a, image) {         //EventListener modal
    a.addEventListener('click', e => {
      modal.removeChild(image);
      modal.removeChild(a);
      const section = document.getElementById('bg-modal')
      section.style.display = 'none';
    })
  }



}
