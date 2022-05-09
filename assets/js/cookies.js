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

let lsContent = localStorage.getItem('CookiesOk')
if (!lsContent) {
  document.body.innerHTML += cookiesHtml

  let cookiesArea = document.querySelector('.cookies-container')
  let cookieButton = document.querySelector('button')
  let urlAPI = 'https://api.ipify.org?format=json'

  cookieButton.addEventListener('click', () => {
    cookiesArea.remove()
    localStorage.setItem('CookiesOk', 'Ok')
    fetch(urlAPI)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        let ipAddress = data.ip
        var data = new Date()
        dataISO = data.toISOString()
        console.log(ipAddress)
        console.log(dataISO)
      })
  })
}
