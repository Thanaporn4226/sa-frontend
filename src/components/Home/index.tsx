import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

export default function Home() {
  return (
    <Container>
        <Grid container spacing={3}>
            <Grid item>
                <h2>
                    ยินดีต้อนรับเข้าสู่ระบบในฐานะ Role
                </h2>
            </Grid>
        </Grid>
    </Container>
  )
}
