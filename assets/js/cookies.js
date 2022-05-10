//configuração do firebase e inicialização do app
const firebaseConfig = {
  apiKey: 'AIzaSyC-g9vPIXmrj9fjuxS7YPzzBK7sUQvzYfg',
  authDomain: 'sitetakefoods.firebaseapp.com',
  projectId: 'sitetakefoods',
  storageBucket: 'sitetakefoods.appspot.com',
  messagingSenderId: '686558896612',
  appId: '1:686558896612:web:583e10a2866729021c67f1',
  measurementId: 'G-313JZXQM17'
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

db.collection('CookiesInfo')
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data())
    })
  })

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
        db.collection('CookiesInfo')
          .add({
            UserIP: ipAddress,
            UserData: dataISO
          })
          .then(() => {
            console.log('Documento inserido com sucesso')
          })
          .catch((err) => {
            console.log(err)
          })
      })
  })
}
