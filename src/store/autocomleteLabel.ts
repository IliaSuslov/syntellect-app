import { makeAutoObservable } from 'mobx'
import { getCountryByName } from '../api/apiService'
import { Hint } from '../types'

class AutoCompleteLabel {
    label: string = ""
    hints: Hint[] = []

    constructor() {
        makeAutoObservable(this)
    }

    changeLabel = async (data: string) => {
        console.log(data)
        this.label = data
    }

    changeLabelwithAC = async (data: string) => {
        this.label = data
        this.hints = await getCountryByName(data)
    }


}

export default new AutoCompleteLabel();