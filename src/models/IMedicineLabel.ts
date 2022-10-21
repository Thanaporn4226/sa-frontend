import { time } from "console"
import { EmployeeInterface } from "./IEmployee"

export interface MedicineLabelInterface {
    ID:number,
    RecordingDate : Date,
    MedicineUseID: number
    MedicineUse : MedicineUseInterface,
    WarningID: number,
    Warning : WarningInterface,
    EmployeeID: number,
    Employee: EmployeeInterface

}


export interface MedicineUseInterface {
    ID: number,
    How_To_Use: string,

}

export interface WarningInterface {
    ID: number, 
    Medicine_Warning: string,
}