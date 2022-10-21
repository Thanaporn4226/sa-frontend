import { EmployeeInterface } from "./IEmployee";

export interface MedicineInterface {
    ID : number,
    Name: string,
    MFD: Date,
    EXP: Date,
    Amount: number,

    EmployeeID : number,
    Employee : EmployeeInterface,

    TypeID: number,
    Type: MedicineTypeInterface,

    StorageID: number,
    Storage: StorageInterface,

}

export interface StorageInterface {
    ID: number, 
    Name: string
}



export interface MedicineTypeInterface {
    ID: number, 
    Tmedicine : string,
    Utilzation: string,
}