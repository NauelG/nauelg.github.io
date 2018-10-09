import { Index } from './index.js'

/*
Esta clase se define e instancia en previsión de lo que pueda crecer la página.
En el estado actual, se podría instanciar directamente la clase Index desde App, pero así preveemos el posible crecimiento de la página y su modulación.
*/

export class Main {

    constructor() {

        new Index()
    }
}