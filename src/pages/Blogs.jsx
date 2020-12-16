import React from 'react'
import './blogs.css'
import { Grid  } from '@material-ui/core'
import green from '../img/green.jpg'
import red from '../img/red.jpg'
import white from '../img/white.jpg'
import blue from '../img/blue.jfif'



function Blogs() {
    return (
        <div className="blogs">
                <h1>Lastest Blogs</h1>
                <Grid container className="blogs__container">
                    <Grid className="blog_1">
                        <a href="/"><img className="logo__part" src={green}alt=""/></a>
                    </Grid>
                    <Grid className="blog">
                        <a href="/"><img className="logo__part" src={red} alt=""/></a>
                    </Grid>
                    <Grid className="blog">
                        <a href="/"><img className="logo__part" src={white} alt=""/></a>
                    </Grid>
                    <Grid className="blog">
                        <a href="/"><img className="logo__part" src={blue} alt=""/></a>
                    </Grid>
                </Grid>
        </div>
    )
}

export default Blogs;
