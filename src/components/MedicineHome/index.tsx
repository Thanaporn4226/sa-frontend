import { Button, Container, Grid, Typography } from '@mui/material'
import pic from "../../image/medicine.jpg";
import { Link as RouterLink } from "react-router-dom";


export const MedicineHome = () => {
  return (
    <div>
        <Container maxWidth="md">

          <Typography align= "center">
            <img style={{width: "500px"}}
            className="img"
            src={pic}></img>
          </Typography>

          <h4>Requirements</h4>
          <p>
          ระบบบันทึกข้อมูลยา เป็นระบบหนึ่งที่จะใช้ในห้องยา เพื่อช่วยอำนวยความสะดวกของเจ้าหน้าที่ดูแลคลังยา 
          โดยเจ้าหน้าที่ดูแลคลังยาจะทำการ Login เพื่อเข้าสู่ระบบบันทึกข้อมูลยา ในการจัดเก็บหรือเข้าดูข้อมูลของยาทั้งหมดในคลังยา 
          หากมีการอัพเดตข้อมูลยาตัวนั้นๆ เจ้าหน้าที่ดูแลคลังยาจะทำการกรอกข้อมูล 
          ชื่อยา  ประเภทยา  วันผลิต วันหมดอายุ จำนวนยา สถานที่จัดเก็บ เพิ่มเข้าไปในระบบบันทึกข้อมูลยา
          </p>

          <Grid container>
            <Grid item xs={2}>
              <Button
                  component={RouterLink}
                  to="/medicine/create"
                  variant="contained"
                >
                เพิ่มข้อมูลยา
              </Button>
            </Grid>

            <Grid item xs={2}>
              <Button
                component={RouterLink}
                to="/medicines"
                variant="contained"
              >
                ข้อมูลยา
              </Button>
            </Grid>

          </Grid> 
        
      </Container>
    </div>
  )
}