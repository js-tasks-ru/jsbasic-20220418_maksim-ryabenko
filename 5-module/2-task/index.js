function toggleText() {
  document.addEventListener('click', (event) => {
    let btn = event.target.classList.contains('toggle-text-button');

    if(!btn) return;
    
    let element = document.querySelector('#text');
    element.hidden = !element.hidden;
  })
}
