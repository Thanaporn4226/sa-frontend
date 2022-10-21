import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import main from "./../../image/main.jpg"

export default function PayMedicineHome() {

  const navigate = useNavigate()
  function navigatePayMedicine(){
    navigate("/medicinepay")
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>

        <Grid item xs={12} style={{
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
        }}>
          <img src={main} style={{
            height: "42vh",
          }}/>
        </Grid>

        <Grid item xs={2}>
          
        </Grid>
        <Grid item xs={8}>
          <h3 >
            Requirement : 
          </h3>
          <Typography >
          เภสัชของห้องจ่ายยาแห่งนี้ เป็นห้องที่จำเป็นจะต้องจ่ายยาให้กับผู้ป่วย หรือพยาบาลที่เคาเตอร์รับยา โดยเภสัชที่ต้องจัดจ่ายยา จะต้อง Login เข้าสู่ระบบเพื่อเข้าใช้งานระบบจัดจ่ายยา โดยเมื่อ Login เข้าไปแล้ว จะเข้าสู้หน้า รายการยาที่ต้องจัดจ่าย จากข้อมูลยาที่ต้องจ่าย และเมื่อมีงานเข้ามา จะแสดงที่หน้ารายการยาที่ต้องจัดจ่าย โดยจะขึ้นเป็นชื่อคนผู้ป่วย อาการ และยาที่ต้องจัด โดยเมื่อเภสัชกดเข้าไปแล้วจะมีรายชื่อยาที่ต้องจัดขึ้นมา แล้วให้เภสัช จัดยาชนิดนั้นๆโดยทำการเลือกฉลาก(รูปแบบการกินยา) แล้วกดยืนยันเพื่อทำการจ่ายยา แล้วเมื่อกดยืนยันแล้ว ระบบจะนำเข้าข้อมูลเข้าไปในข้อมูลผู้ป่วยที่จัดจ่ายยาแล้ว แล้วนำยาไปให้กับเคาเตอร์เพื่อให้ผู้ป่วย หรือพยาบาลมารับยา
          </Typography>
        </Grid>
        <Grid item xs={2}>
          
        </Grid>


        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4} style={{
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
        }}>
          <Button onClick={navigatePayMedicine} variant='contained'>
            จ่ายยา
          </Button>
        </Grid>
        <Grid item xs={4}>
        </Grid>

      </Grid>
    </Container>
  )
}
