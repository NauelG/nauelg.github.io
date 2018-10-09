import { Menu } from './menu.js'
import { Form } from './form.js'
import { Course } from './course.js'

export class Index {

    constructor() {
        this.menu = new Menu()
        this.form = new Form()
        this.course = new Course()
    }
}