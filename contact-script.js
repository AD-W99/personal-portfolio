const form = document.getElementById('contact-form')
// https://lo-victoria.com/how-to-build-a-contact-form-with-javascript-and-nodemailer
const sendMail = mail => {
    fetch('/send', {
        method: 'post',
        body: mail
    }).then(response => {
        return response.json()
    })
}

const formEvent = form.addEventListener('submit', e => {
    e.preventDefault()

    let mail = new FormData(form)

    sendMail(mail)
})