import React from 'react'
import useStyle from './AboutWeBuyCarStyle'
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { createMuiTheme, } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import Image from './Assets/AboutWeBuyCar.jpg'

const theme = createMuiTheme({
    palette:{
      primary:{
        main:"#F76B40",
      }
    }
  })

export const AboutWeBuyCar = () => {
    const classes = useStyle();
    return (
        <ThemeProvider theme={theme}>
        <div className={classes.completeContent}>
            <Container>
                <div>  
            <div class="scrapcar-main-section scrapcar-about-gallery-wrap">
            <div class="row">
            <div class="col-md-7">
            <div>
            <Typography variant="h4" align="center" className={classes.firstHeading}>About We Buy Car</Typography>
            Here at We Buy Cars, we like to keep things simple. If you are looking to sell your car quickly, without any hassle, then we can help. Simply enter your car details on our Sell My Car link and follow the steps to see what your car or van is worth in as little as 30 seconds!
            We will buy any car, in any condition and the best part is that we inspect and collect your car from your home or work  Here at We Buy Cars, we like to keep things simple. If you are looking to sell your car quickly, without any hassle, then we can help. Simply enter your car details on our Sell My Car link and follow the steps to see what your car or van is worth in as little as 30 seconds!
            We will buy any car, in any condition and the best part is that we inspect and collect your car from your home or work – with FREE instant cash payment or transfer into your bank account.
            </div>
            </div>
            <div class="col-md-5 p-4">
            <img src="https://www.webuycars.ae/images/sell.png" style={{height:"100%", width:"100%",}}/>
            </div>
            </div>
            </div>
            </div>
            <Grid container>
               <Grid item xs={12}>
               <Typography variant="h5" align="center" className={classes.secondHeading}>
                    Looking for instent car evaluation?
                </Typography>
                <Typography align="center" className={classes.secondSubHeading}>
                    Content According to key words
                </Typography>
                <Typography>
                We Buy Cars began our journey in 2011, becoming one of the UAE’s first online car buying 
                companies to offer free car inspection at your door step, free collection and instant payment 
                for your used car. Since then, we have helped over 120,000 customers who were looking to sell 
                their car. We pride ourselves on offering you a safe, hassle-free way to sell your car with no 
                hidden charges. Call us today to speak with a friendly advisor on 050 44 74 100We Buy Cars began our journey in 2011, becoming one of the UAE’s first online car buying 
                companies to offer free car inspection at your door step, free collection and instant payment 
                for your used car. Since then, we have helped over 120,000 customers who were looking to sell 
                their car. We pride ourselves on offering you a safe, hassle-free way to sell your car with no 
                hidden charges. Call us today to speak with a friendly advisor on 050 44 74 100
                </Typography>
               </Grid>
            </Grid>
            <Grid container xs={12} style={{margin:"auto"}} className={classes.aboutWeBuyCars}>
            <Grid item xs={12} style={{marginBottom:"20px"}}>
                <Typography align="center" className={classes.thirdHeading}>
                Types Of Vehicles we buy
                </Typography>
                <Typography align="center">
                   <b style={{color:"#F76B40"}}>Scrap Your Car</b> with us and get the best price guaranteed today. We accept the 
                    following cars for scrap:
            </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                   <Typography className={classes.typeOfCars}>
                   <ul>
                       <li style={{listStyle:"none"}}><FiberManualRecordIcon color="primary"/> Working Cars</li>
                       <li style={{listStyle:"none"}}><FiberManualRecordIcon color="primary"/> Not Working Cars</li>
                       <li style={{listStyle:"none"}}><FiberManualRecordIcon color="primary"/> Demages Cars</li>
                       <li style={{listStyle:"none"}}><FiberManualRecordIcon color="primary"/> Scrap Cars</li>
                       <li style={{listStyle:"none"}}><FiberManualRecordIcon color="primary"/> Junk Cars</li>
                       <li style={{listStyle:"none"}}><FiberManualRecordIcon color="primary"/> Cars With Expire Registration</li>
                   </ul>
                   </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography className={classes.typeOfCars}>
                   <ul>
                       <li style={{listStyle:"none"}}><FiberManualRecordIcon color="primary"/> RTA / Tasjeel / Adnoc Failed Cars</li>
                       <li style={{listStyle:"none"}}><FiberManualRecordIcon color="primary"/> Cars with Damages Transmission</li>
                       <li style={{listStyle:"none"}}><FiberManualRecordIcon color="primary"/>  Over Heating Problem</li>
                       <li style={{listStyle:"none"}}><FiberManualRecordIcon color="primary"/> Accident Damages Cars </li>
                       <li style={{listStyle:"none"}}><FiberManualRecordIcon color="primary"/> Cars with Bank Mortgage / Loan</li>
                       <li style={{listStyle:"none"}}><FiberManualRecordIcon color="primary"/> Cars With Expire Registration</li>
                   </ul>
                   </Typography>
            </Grid>
            </Grid>
            </Container>
        </div>
        </ThemeProvider>
    )
}
