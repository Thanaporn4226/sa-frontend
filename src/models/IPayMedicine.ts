import { EmployeeInterface } from "./IEmployee";
import { MedicineLabelInterface } from "./IMedicineLabel";
import { PrescriptionInterface } from "./IPrescription";

export interface PayMedicineInterface {

    ID : number,
    Amount : number,
    Price : number,
    PayDate : Date, 
    EmployeeID : number,
    Employee: EmployeeInterface,
    PrescriptionID : number,
    Prescription : PrescriptionInterface,
    MedicineLabelID : number,
    MedicineLabel : MedicineLabelInterface
    

}