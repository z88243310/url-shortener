const crossIcon = document.querySelector('#cross-icon')
const urlInput = document.querySelector('#url-input')

crossIcon.addEventListener('click', function onIconClicked() {
  urlInput.value = ''
})
