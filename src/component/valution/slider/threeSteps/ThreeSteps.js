import React from 'react'
import useStyle from './ThreeStepsStyle'
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaCoins } from 'react-icons/fa';
import { BsCardChecklist } from 'react-icons/bs';
import { createMuiTheme, } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    palette:{
      primary:{
        main:"#F76B40",
      }
    }
  })

export const ThreeSteps = () => {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <ThemeProvider theme={theme}>
            <Container style={{marginTop:"80px"}}>
                <Typography align="center" variant="h5" className={classes.firstHeading}>
                3 Easy Steps to Sell Your Car
                </Typography>
                <Grid container className={classes.containerGrid}>
                    <Grid item xs={12} md={4} className={classes.blockGrid}>< BsCardChecklist color="#F76B40"/>
                    <Typography className={classes.paragraph}>
                    get the best price guaranteed today. We accept the 
                    following cars for scrap
                    </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.blockGrid}><FaCalendarAlt  color="#F76B40"/>
                    <Typography className={classes.paragraph}>
                    get the best price guaranteed today. We accept the 
                    following cars for scrap
                    </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.blockGrid}><FaCoins  color="#F76B40"/>
                    <Typography className={classes.paragraph}>
                    get the best price guaranteed today. We accept the 
                    following cars for scrap
                    </Typography>
                    </Grid>
                </Grid>
            </Container>
            </ThemeProvider>
        </div>
    )
}
