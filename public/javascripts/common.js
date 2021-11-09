const btnCopy = document.querySelector('#btn-copy')
const urlInput = document.querySelector('#url-input')

btnCopy.addEventListener('click', function onCopyButtonClicked() {
  navigator.clipboard
    .writeText(urlInput.value)
    .then(() => {
      console.log('Text copied to clipboard')
    })
    .catch((err) => {
      console.log('Something went wrong', err)
    })
})

console.log('hi')
