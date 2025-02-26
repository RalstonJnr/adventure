function moveButton() {
  const button = document.querySelector('#no');
  button.style.position = 'absolute';
  button.style.left = Math.random() * (window.innerWidth - button.offsetWidth) + 'px';
  button.style.top = Math.random() * (window.innerHeight - button.offsetHeight) + 'px';
}
