export class Course {

    constructor() {
        this.courses = document.querySelectorAll('.course-elem');

        this.addListeners();
    }

    addListeners() {
        this.courses.forEach(elem => {
            elem.addEventListener('click', () => {

                let modal = elem.nextSibling.nextSibling;
                modal.classList.remove('dNone');
                modal.addEventListener('click', () => {
                    modal.classList.add('dNone');
                });
                document.addEventListener('keyup', (e) => {
                    if(e.keyCode === 27) {
                        modal.classList.add('dNone');
                    }
                })

                let closeModal = () => {
                    modal.classList.add('dNone');
                    modal.removeEventListener('click');
                    window.removeEventListener('keyup');
                }
            })
        })
    }
}