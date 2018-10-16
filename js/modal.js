

class Modal {


  static renderModal(src) {      //building modal

    const modal = document.getElementById('modal');        //getting modal element
    modal.innerHTML = '';
    const image = document.createElement('img');          //creating the modal's image
    image.src = src;
    image.id = 'img';
    image.className = 'u-margin-bottom-small'
    const a = document.createElement('a');               //creating modal's close modal with a element
    a.id = 'close';
    a.className = 'close btn btn--black';
    a.innerHTML = 'Close';
    a.href = '#'
    modal.appendChild(image);                           //adding image to modal
    modal.appendChild(a);                               //adding a to modal
    const section = document.getElementById('bg-modal')
    section.style.display = 'flex';
    EventListener.modalListener(a, image);               //calling EventListener to modal
  }
}
