function toggleText() {
  let btn = document.querySelector('.toggle-text-button');

  btn.addEventListener('click', () => {

    let element = document.querySelector('#text');

    if(!btn) {
      return
    }  else {
      element.hidden = !element.hidden;
    }
    
  })
}
