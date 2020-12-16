import React from 'react'
import './home.css'
import { Grid ,Container  } from '@material-ui/core'
import logo from '../img/logo.png'

function Home() {
    return (
        <Grid className="home">
            <Container className="container">
            <Grid className="container__items">
                <h2 className="container__item">Games</h2>
                <h2 className="container__item">Blog</h2>
            </Grid>
            <Grid className="container__items">
                <div className="container__item"> <img className="logo" src={logo} alt="rgb logo  " /> </div>
            </Grid>
            <Grid className="container__items">
                <h2 className="container__item">Our Story</h2>
                <h2 className="container__item"> Contact </h2>

            </Grid>
            </Container>

        </Grid>
    )
}

export default Home
