
let page = 1

document.addEventListener('DOMContentLoaded', () => {
  Adapter.getJson(page);   // call api
  Grid.button('top');      //build buttons
  EventListener.next(page);  //addEventListener to button Next
  EventListener.back(page);   //addEventListener to button Back
})
