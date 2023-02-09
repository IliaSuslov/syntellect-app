import { makeAutoObservable } from 'mobx'

class ControlledLabel {
    label: string = "Hello World"

    constructor() {
        makeAutoObservable(this)
    }

    changeLabel = (data: string) => {
        this.label = data
    }

    reset() {
        this.label = "Hello World"
    }

    delete() {
        this.label = ""
    }
}

export default new ControlledLabel();

