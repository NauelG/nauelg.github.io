export class Form {

    constructor() {
        this.oForm = document.querySelector('#contactForm')
        this.oName = document.querySelector('#iName')
        this.oMail = document.querySelector('#iMail')
        this.oKnow = document.querySelector('#iKnown')
        this.oOtherKnow = document.querySelector('#otherKnow')
        this.oTel = document.querySelector('#iTel')
        this.oMessage = document.querySelector('#iComent')

        this.groupOtherKnow = document.querySelector('#groupOtherKnow')



        this.oButton = document.querySelector('#send')

        this.data = {
            name: '',
            email: '',
            phone: '',
            know: '',
            message: ''
        }

        this.oKnow.addEventListener('change', this.selectKnow.bind(this))


        this.oName.addEventListener('input', this.validityName.bind(this))

        this.oMail.addEventListener('input', this.validityMail.bind(this))

        this.oTel.addEventListener('input', this.validityTel.bind(this))

        this.oMessage.addEventListener('input', this.validityMessage.bind(this))

        this.oForm.addEventListener('submit', this.saveData.bind(this))
    }


    hola(event) {
        console.log(event)
    }

    selectKnow(event) {
        this.groupOtherKnow.classList.add('dNone')
        if (event.target.value == 'other') {
            this.groupOtherKnow.classList.remove('dNone')
        }
    }

    validityName() {
        if (!this.oName.checkValidity()) {
            this.oName.setCustomValidity('Es necesario introducir el nombre.')
        }
    }

    validityMail() {
        this.oMail.setCustomValidity('')
        if (!this.oMail.checkValidity()) {
            this.oMail.setCustomValidity('La dirección de correo introducida no es válida.')
        }
    }

    validityTel() {
        this.oTel.setCustomValidity('')
        if (!this.oTel.checkValidity()) {
            this.oTel.setCustomValidity('El teléfono introducido no es correcto.')
        }
    }

    validityMessage(event) {
        let count = event.target.value.split(' ');
        console.log(count);
        this.oMessage.setCustomValidity('');
        console.log(count.length)
        if (count.length > 150) {
            this.oMessage.setCustomValidity('El mensaje puede contener un máximo 150 palabras.')
        }
    }

    saveData(event) {
        event.preventDefault()

        this.data = {
            name: this.oName.value,
            email: this.oMail.value,
            phone: this.oTel.value,
            know: this.oKnow.value,
            message: this.oMessage.value
        }

        if (this.oKnow.value == 'other') {
            this.data.know = this.oOtherKnow.value
        }

        console.table(this.data)
    }
}