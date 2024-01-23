import { Grid } from '@mui/material'
import React from 'react'

export default function About() {
    return (
        <div className='about'>

            <Grid container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >

                <Grid item>
                    <div>
                        <img className='about-img' src="https://plus.unsplash.com/premium_photo-1692574096082-d2b425cf1a5b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </Grid>

                <Grid>
                    <h1>Hello, this is where the contenet goes.

                    </h1>
                </Grid>

            </Grid>




        </div>
    )
}
