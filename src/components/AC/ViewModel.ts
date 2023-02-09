import { makeAutoObservable } from "mobx";
import { Hint } from "../../types";
import { getCountryByName } from "../../api/apiService";

class ViewModel {
    label: string = ""
    hints: Hint[] = []

    constructor() {
        makeAutoObservable(this)
    }

    changeLabel = async (data: string) => {
        this.label = data
    }

    changeLabelwithAC = async (data: string) => {
        this.label = data
        this.hints = await getCountryByName(data)
    }


}

export default ViewModel;


