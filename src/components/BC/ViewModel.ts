import { makeAutoObservable } from 'mobx'

class ControlledLabel {
    label: any = "Hello World"

    constructor() {
        makeAutoObservable(this)
    }

    changeLabel = (data: string) => {
        this.label = data
    }

    reset = () => {
        this.label = "Hello World"
    }

    delete = () => {
        this.label = ""
    }

    makeAlert = () => {
        alert(this.label)
    }

    alertNumber = () => {
        if (!isNaN(this.label)) {
            alert(this.label)
        }
    }
}

export default ControlledLabel;