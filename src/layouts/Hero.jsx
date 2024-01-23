import { Grid } from '@mui/material'
import React from 'react'

export default function Hero() {
    return (
        <div className='hero'>

            <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >

                <Grid item>

                    <div>
                        <h1>Hello</h1>
                    </div>

                </Grid>

                <Grid item>

                    <div>
                        <h1>Hello, how are you?</h1>
                    </div>

                </Grid>

            </Grid>




        </div>
    )
}
