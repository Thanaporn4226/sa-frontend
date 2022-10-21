import { Alert, Box, Button, Container, FormControl, Grid, Paper, Select, Snackbar, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
// import { EmployeeInterface } from '../../models/IEmployee';
import { MedicineLabelInterface } from '../../models/IMedicineLabel';
import { PayMedicineInterface } from '../../models/IPayMedicine';
import { PrescriptionInterface } from '../../models/IPrescription';
import { Link as RouterLink, useNavigate } from "react-router-dom";


import './styles.css'

export default function PayMedicine() {
    //main
    const [payMedicine, setPayMedicine] = React.useState<Partial<PayMedicineInterface>>({});
    //relation
    // const [employee, setEmployee] = React.useState<EmployeeInterface[]>([]);
    const [medicineLabel, setMedicineLabel] = React.useState<MedicineLabelInterface[]>([]);
    const [prescription, setPrescription] = React.useState<PrescriptionInterface[]>([]);
    const [oldPayMedicine, setOldPayMedicint] = React.useState<PayMedicineInterface[]>([]);
    const [selectPrescription, setSelectPrescription] = React.useState<PrescriptionInterface>();
    const [selectmedicineLabel, setSelectmedicineLabel] = React.useState<MedicineLabelInterface>();



    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleClose: any = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        setSuccess(false);
        setError(false);
    };

    const handleChange: any = (event: React.ChangeEvent<{ name?: string; value: any }>) => {
        const name = event.target.name as keyof typeof payMedicine;

        if (name === "PrescriptionID") {
            setSelectPrescription(prescription.at(event.target.value - 1))
            if (event.target.value === "") {
                setSelectPrescription(prescription.at(prescription.length + 1))
            }
        } else if (name === "MedicineLabelID") {
            setSelectmedicineLabel(medicineLabel.at(event.target.value - 1))
            if (event.target.value === "") {
                setSelectmedicineLabel(medicineLabel.at(medicineLabel.length + 1))
            }
        }
        setPayMedicine({
            ...payMedicine,
            [name]: event.target.value,
        });


    };


    const apiUrl = "http://localhost:8080";


    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        };
        const getMedicineLable = async () => {
            fetch(`${apiUrl}/pharmacist/medicinelabels`, requestOptions)
                .then((res) => res.json())
                .then((res) => {
                    if (res.data) {
                        setMedicineLabel(res.data)
                    } else {
                        console.log("else2")
                    }
                })
        }



        const getOldPayMedicine = async () => {
            fetch(`${apiUrl}/pharmacist/paymedicines`, requestOptions)
                .then((res) => res.json())
                .then((res) => {
                    if (res.data) {
                        setOldPayMedicint(res.data)
                    } else {
                        console.log("Don't have Pay medicine")
                    }
                })
        }

        const getPrescription = async () => {
            await fetch(`${apiUrl}/pharmacist/prescriptions`, requestOptions)
                .then((res) => res.json())
                .then((res) => {
                    if (res.data) {
                        setPrescription(res.data)
                    } else {
                        console.log("else3")
                    }
                })
        }




        
        getOldPayMedicine();
        getMedicineLable();
        getPrescription();

        


    }, [])

    const fillterPrescriptionDuplicateData = () => {
        let x = prescription.filter((pre) => {
            let check = false;
            for (let i = 0; i < oldPayMedicine.length; i++) {
                if (pre.ID === oldPayMedicine.at(i)?.PrescriptionID) {
                    check = true;
                }
            }
            if (!check) {
                return (prescription.filter((pres) => (pre.ID == pres.ID)))
            }
        })
        return x
    }

    const convertType = (data: string | number | undefined) => {
        let val = typeof data === "string" ? parseInt(data) : data;
        return val
    }

    const navigator = useNavigate();
    async function submit() {
        let data = {
            Amount: convertType(payMedicine.Amount),
            Price: convertType(payMedicine.Price),
            EmployeeID: convertType(localStorage.getItem("uid") as string),
            PrescriptionID: convertType(payMedicine.PrescriptionID),
            MedicineLabelID: convertType(payMedicine.MedicineLabelID),
            PayDate: new Date(),
        }

        console.log(data)

        const requestOptionsPost = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        fetch(`${apiUrl}/pharmacist/paymedicines`, requestOptionsPost)
            .then((response) => response.json())
            .then((res) => {
                if (res.data) {
                    console.log("บันทึกได้")
                    setSuccess(true)
                    setErrorMessage("")
                } else {
                    console.log("บันทึกไม่ได้")
                    setError(true)
                    setErrorMessage(res.error)
                }
            });

        setTimeout(()=>{
            navigator("/medicinepay")
        }, 1500)
        
    }

    return (
        <Container maxWidth="lg">
            <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    บันทึกข้อมูลสำเร็จ
                </Alert>
            </Snackbar>
            <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    บันทึกข้อมูลไม่สำเร็จ: {errorMessage}
                </Alert>
            </Snackbar>

            <Paper className='paper' sx={{ p: 4}}>
                <Box display="flex">
                    <Box flexGrow={1}>
                        <Typography
                            component="h2"
                            variant="h6"
                            gutterBottom
                            color="primary"
                        >
                            เริ่มทำการจ่ายยา
                        </Typography>
                    </Box>
                </Box>
                <hr />
                <Grid container spacing={3} className="root">
                    <Grid item xs={12} >
                        <FormControl fullWidth variant="outlined">
                            <p>เลือกใบสั่งยา</p>
                            <Select
                                native
                                value={payMedicine.PrescriptionID}
                                onChange={handleChange}
                                inputProps={{
                                    name: "PrescriptionID",
                                }}
                            >
                                <option aria-label="None" value="">
                                    กรุณาเลือกใบสั่งยา
                                </option>
                                {fillterPrescriptionDuplicateData().map((item: PrescriptionInterface) => (
                                    <option value={item.ID} key={item.ID}>
                                        {item.Patient.PID}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <p>ชื่อผู้ป่วย</p>
                        <TextField label={selectPrescription?.Patient.Name} disabled />
                    </Grid>
                    <Grid item xs={4}>
                        <p>ยาที่ต้องจัด</p>
                        <TextField label={selectPrescription?.Medicine.Name} disabled />
                    </Grid>
                    <Grid item xs={4}>
                        <p>อาการ</p>
                        <TextField label={selectPrescription?.Symptom} disabled />
                    </Grid>
                    <Grid item xs={12} >
                        <FormControl fullWidth variant="outlined">
                            <p>เลือกฉลากยา</p>
                            <Select
                                native
                                value={payMedicine.MedicineLabelID}
                                onChange={handleChange}
                                inputProps={{
                                    name: "MedicineLabelID",
                                }}
                            >
                                <option aria-label="None" value="">
                                    กรุณาเลือกฉลากยา
                                </option>
                                {medicineLabel.map((item: MedicineLabelInterface) => (
                                    <option value={item.ID} key={item.ID}>
                                        {item.MedicineUse.How_To_Use}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <p>วิธีการใช้ยา</p>
                        <TextField label={selectmedicineLabel?.MedicineUse.How_To_Use} disabled />
                    </Grid>
                    <Grid item xs={6}>
                        <p>คำเตือน</p>
                        <TextField label={selectmedicineLabel?.Warning.Medicine_Warning} disabled />
                    </Grid>
                    <Grid item xs={6}>
                        <p>จำนวนยา</p>
                        <TextField name='Amount' type="number" value={payMedicine.Amount || ""} placeholder="1" InputProps={{ inputProps: { min: 1 } }} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <p>ราคายา</p>
                        <TextField name='Price' type="number" value={payMedicine.Price || ""} placeholder="1" InputProps={{ inputProps: { min: 1 } }} onChange={handleChange} />
                    </Grid>

                    <Grid item xs={12} >
                        <Button component={RouterLink} to="/medicinepay" variant='outlined'>
                            ย้อนกลับ
                        </Button>
                        <Button
                            style={{ float: "right" }}
                            variant="contained"
                            onClick={submit}
                        >
                            จัดยา
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

        </Container>
    )
}
