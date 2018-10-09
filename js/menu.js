export class Menu {

    constructor() {

        this.mainMenu = document.querySelector('#mainNav')
        this.btnMenu = document.querySelector('#btnNav')
        this.aMenu = document.querySelectorAll('#mainNav a')
        this.aSections = document.querySelectorAll('section')
        this.oOffsets = []

        this.oToTop = document.querySelector('#toTop')

        this.aMenu.forEach(
            (item) => {
                item.addEventListener('click', this.activarItem.bind(this))
            })
        this.btnMenu.addEventListener('click', this.showMenu.bind(this))
        this.aMenu.forEach(
            (element) => {
                element.addEventListener('click', this.navigate.bind(this))
            }
        )

        this.oToTop.addEventListener('click', this.toTop)

        window.addEventListener('scroll', this.changeMenu.bind(this))

        this.prepararNavegacion();
    }

    showMenu(element) {
        if (element) {
            element.preventDefault()
        }
        this.mainMenu.classList.toggle('noNav');

        // Alteramos el botón que maneja el nav
        if (this.btnMenu.classList.contains('fa-bars')) {
            this.btnMenu.classList.replace('fa-bars', 'fa-times')
        } else {
            this.btnMenu.classList.replace('fa-times', 'fa-bars')
        }
    }

    navigate(element) {
        element.preventDefault()
        let target = element.target.hash
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        })

        this.showMenu();
    }

    toTop() {
        document.querySelector('#home').scrollIntoView({
            behavior: 'smooth'
        })
    }

    activarItem(element) {
        this.aMenu.forEach(
            (element) => {
                element.classList.remove('active')
            })
        element.target.classList.add('active')
    }

    changeMenu() {
        let pageOffset = window.pageYOffset

        this.showToTop(pageOffset)

        let menuItem = 0
        if (pageOffset < this.oOffsets['#about']) {
            menuItem = undefined;
        } else if (pageOffset >= this.oOffsets['#about'] && pageOffset < this.oOffsets['#skills']) {
            menuItem = 0
        } else if (pageOffset >= this.oOffsets['#skills'] && pageOffset < this.oOffsets['#career']) {
            menuItem = 1
        } else if (pageOffset >= this.oOffsets['#career'] && pageOffset < this.oOffsets['#contact']) {
            menuItem = 2
        } else {
            menuItem = 3
        }

        this.aMenu.forEach(
            (element) => element.classList.remove('active')
        )

        if (menuItem >= 0) {
            this.aMenu[menuItem].classList.add('active')
        }
    }

    showToTop(offset) {
        if (offset > 250 && this.oToTop.classList.contains('dNone')) {
            this.oToTop.classList.toggle('dNone')
            this.mainMenu.firstElementChild.classList.toggle('onTop')
        } else if (offset < 250 && !this.oToTop.classList.contains('dNone')) {
            this.oToTop.classList.toggle('dNone')
            this.mainMenu.firstElementChild.classList.toggle('onTop')
        }
    }

    prepararNavegacion() {
        this.aSections.forEach(
            (element) => {
                let cumulative = this.cumulativeOffset(element);
                this.oOffsets['#' + element.id] = cumulative;
            })
    }

    cumulativeOffset(element) {
        var top = 0;
        do {
            top += element.offsetTop || 0;
            element = element.offsetParent;
        } while (element);
        return top
    }
}