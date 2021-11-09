const btnCopy = document.querySelector('#btn-copy')
const urlLink = document.querySelector('#url-link')

btnCopy.addEventListener('click', function onCopyButtonClicked() {
  navigator.clipboard
    .writeText(urlLink.innerText)
    .then(() => {
      console.log('Text copied to clipboard')
    })
    .catch((err) => {
      console.log('Something went wrong', err)
    })
})
