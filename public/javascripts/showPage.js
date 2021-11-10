const btnCopy = document.querySelector('#btn-copy')
const urlLink = document.querySelector('#url-link')
const alertInfo = document.querySelector('.alert-info')

btnCopy.addEventListener('click', function onCopyButtonClicked() {
  navigator.clipboard
    .writeText(urlLink.innerText)
    .then(() => {
      console.log('Text copied to clipboard')
      alertInfo.innerText = 'Text copied to clipboard'
      alertInfo.classList.remove('d-none')
      setTimeout(() => {
        alertInfo.classList.add('d-none')
      }, 1000)
    })
    .catch((err) => {
      console.log('Something went wrong', err)
    })
})
