import { makeAutoObservable } from 'mobx'

class TypedLabel {
    label: any = "typed label"

    constructor() {
        makeAutoObservable(this)
    }

    changeLabel = (data: string) => {
        this.label = data
    }

    makeAlert() {
        alert(this.label)
    }

    alertNumber() {        
        if (!isNaN(this.label)) {
            alert(this.label)
        } 
    }
}

export default new TypedLabel();