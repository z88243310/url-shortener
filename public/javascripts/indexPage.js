const crossIcon = document.querySelector('#cross-icon')
const urlInput = document.querySelector('#url-input')
const shortenBtn = document.querySelector('#shorten-btn')

crossIcon.addEventListener('click', function onIconClicked() {
  urlInput.value = ''
})

shortenBtn.addEventListener('click', function onShortenButtonClicked(event) {
  urlInput.value = urlInput.value.trim()
})
