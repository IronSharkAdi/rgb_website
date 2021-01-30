import React, { useEffect, useState } from 'react'
import './home.css'
import { Grid ,Container , List, ListItem, SwipeableDrawer  } from '@material-ui/core'
import logo from '../img/logo.png'
import MenuIcon from '@material-ui/icons/Menu';

function Home() {
    const [toggle, setToggle] = useState(false);
    const [drawerActivate, setDrawerActivate] = useState(false)
    const handleToggle = () =>{
      setToggle(!toggle)
    }
    useEffect(() => {
      function componentWillMount(){
        if(window.innerWidth <= 938){
          setDrawerActivate(true);
        }
    
        window.addEventListener('resize',()=>{
          if(window.innerWidth <= 938){
            setDrawerActivate(true);
          }
          else{
            setDrawerActivate(false)
          }
        });
      }
      componentWillMount();
    }, [])
    const pc = () =>{
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

    const mobile = () => {
        return(
        <>
            <Grid className="home">
              <Container className="container">
              <Grid className="container__items">
                  <MenuIcon className="icon" onClick={handleToggle} />
              </Grid>
              <Grid className="container__items">
                <div className="container__item"> <img className="logo" src={logo} alt="rgb logo  " /> </div>
              </Grid>
              <Grid className="container__items">
                    <MenuIcon className="icon" onClick={handleToggle} />
              </Grid>
            </Container>

        </Grid>
        <SwipeableDrawer 
        open={toggle}
        onClose={handleToggle}
        
        onOpen={handleToggle}>

          <div
            tabIndex={0}
            role="button"
            onClick={handleToggle}
            onKeyDown={handleToggle}>

           <List className="links">
           <ListItem className="link_option" key = {1} button divider> <img className="logo"  src={logo} alt="rgb logo" /> </ListItem>
              <ListItem className="link_option" key = {1} button divider> <a href="/">Games</a> </ListItem>
              <ListItem className="link_option" key = {2} button divider> <a href="/">BLogs</a>  </ListItem>
              <ListItem className="link_option" key = {3} button divider> <a href="/"> Our Story </a></ListItem>
              <ListItem className="link_option" key = {4} button divider> <a href="/">Contact</a>  </ListItem>
            </List>
        </div>
      </SwipeableDrawer>
      </>
        )
    }
    return (
       <div>{ drawerActivate ? mobile() : pc() }</div> 
    )
}

export default Home
