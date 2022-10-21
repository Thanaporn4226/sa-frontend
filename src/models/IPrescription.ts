import { EmployeeInterface } from "./IEmployee"
import { MedicineInterface } from "./IMedicine"

export interface PrescriptionInterface {
    ID: number,
    PrescriptionID: string,
    Case_Time : Date,
    Symptom : string,
    MedicineID:number
    Medicine : MedicineInterface,
    PatientID: number
    Patient : PatientInterface,
    EmployeeID : number
    Employee : EmployeeInterface

}

export interface PatientInterface {
    ID : number,
    PID: string,
    Name: string,
    Surname : string,
    Age: number,
    Gender: string,
    Allergy: string 
}