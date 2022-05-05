let cookiesHtml = `
<div class="cookies-container">
<div class="cookies-left">
  <p>
    Nós utilizamos cookie para melhorar a experiência do usuário.<br />Para
    conferir detalhadamente todos os cookies utilizados, leia nossa
    <a href="" class="privacy-link">política de privacidade.</a>
  </p>
</div>
<div class="cookies-right">
  <button>Aceito</button>
</div>
</div>
`

let lsContent = localStorage.getItem('lgpdCookie')
if (!lsContent) {
  document.body.innerHTML += cookiesHtml

  let cookiesArea = document.querySelector('.cookies-container')
  let cookieButton = document.querySelector('button')

  cookieButton.addEventListener('click', () => {
    cookiesArea.remove()
    localStorage.setItem('lgpdCookie', 'Aceito')
  })
}
