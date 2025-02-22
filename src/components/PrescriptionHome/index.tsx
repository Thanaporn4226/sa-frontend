import React from "react";
import { Link as RouterLink } from "react-router-dom";
import prescription from "../../image/prescription.jpg"; //
import { Button, Container, Grid } from "@mui/material";
import { Typography } from "@mui/material";
// import { createStyles, makeStyles, Theme } from "@mui/material/styles";
import './style.css'
import { useNavigate } from "react-router-dom";

function PrescriptionHome() {

  const navigator = useNavigate()
  const navigatePrescription = () => {
    navigator("/prescription")
  }
  const navigatePatient = () => {
    navigator("/patient")
  }
  const navigatePrescriptionHistory = () => {
    navigator("/PrescriptionHistory")
  }

  return (
    <div>
      <Container className="container" maxWidth="md">
        <Typography align="center">
          <img
            style={{ width: "500px" }}
            className="img"
            src={prescription} />
        </Typography>


        <h4>Requirements</h4>
        <p>
          ระบบสั่งยา เป็นระบบที่ให้เภสัชกรภายในโรงพยาบาลแห่งหนึ่งสามารถ Login
          เข้าสู่ระบบมาเพื่อทำหน้าที่สั่งยาให้กับผู้ป่วยแต่ละคน
          โดยการสั่งยาของผู้ป่วยแต่ละคนนั้น
          เจ้าหน้าที่จะต้องกรอกข้อมูลของผู้ป่วย เลือกชื่อยาที่ต้องจ่าย
          เก็บไว้รายการยา จากนั้นเมื่อทำการกดบันทึกรายการเรียบร้อยแล้ว
          ระบบจะบันทึกข้อมูลที่ทำรายการพร้อมกับช่วงวันเวลาที่ทำรายการไปที่ใบสั่งยา
          <br />
          ระบบสั่งยา
          เป็นระบบที่ให้เจ้าหน้าที่แต่ละคนสามารถเรียกดูประวัติการทำรายการย้อนหลังได้ว่า
          รายการไหนเป็นของผู้ป่วยชื่อว่าอะไร มีประวัติการใช้ยาตัวไหนบ้าง
          และทำรายการในช่วงวันเวลาไหน
        </p>
        <Button component={RouterLink} to="/Patient" variant="contained">ข้อมูลผู้ป่วย</Button> &nbsp;
        <Button component={RouterLink} to="/Prescription" variant="contained">สั่งยา</Button>&nbsp;
        <Button component={RouterLink} to="/PrescriptionHistory" variant="contained">ประวัติการสั่งยา</Button>

      </Container>
    </div>
  );
}
export default PrescriptionHome;