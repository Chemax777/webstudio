const modalAcceptBtn = document.querySelector('#modal-accept-btn');
const modalName = document.querySelector('#modal-name');
const modalPhone = document.querySelector('#modal-phone');

const validation = {
    name: false,
    phone: false
}

const errorElemName = document.createElement('div');
errorElemName.innerText = "Поле не повинно бути пустим!"
errorElemName.style = "color:red"

const errorElemPhone = document.createElement('div');
errorElemPhone.innerText = "Поле не повинно бути пустим!"
errorElemPhone.style = "color:red"

modalName.addEventListener('blur', (e) => {
    if (e.target.value !== '') {
        errorElemName.remove()
        validation.name = true
    } else {
        modalName.after(errorElemName)
        validation.name = false
    }
})

modalPhone.addEventListener('blur', (e) => {
    if (e.target.value !== '') {
        errorElemPhone.remove()
        validation.phone = true
    } else {
        modalPhone.after(errorElemPhone)
        validation.phone = false
    }
})

modalAcceptBtn.addEventListener('click', () => {
    if (validation.name && validation.phone) {
        document.location.replace(
            "../thanks-page/thanks-page.html",
        );
    } else {
        console.log('Проверьте форму')
    }
})


