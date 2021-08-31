import React from 'react'
import { Grid, Typography,Button  } from '@material-ui/core'
import useStyle from './CarEvaluationStyle'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette:{
        primary:{
            main:"#F76B40",
        }
    }
})
export const CareEvaluation = () => {
    const classes = useStyle();
    return (
        <ThemeProvider theme={theme}>
            
        <div className={classes.CarEvaluationBg}>
            <Grid container style={{marginTop:"100px"}}>
                <Grid item xs={12} md={6}>
                    <div className={classes.root2}>
                        <Typography align="left" className={classes.fontSize}>
                        <p className={classes.textHeading}>
                            Sell Your Car in 30 Minutes
                        </p>
                        <div className={classes.line}></div>
                        <p >
                          <span className={classes.Icons}><DoneOutlineIcon/></span> Guaranteed Purchase
                        </p>
                        <p >
                          <span className={classes.Icons}><DoneOutlineIcon/></span> Quick and Easy
                        </p>
                        <p >
                          <span className={classes.Icons}><DoneOutlineIcon/></span> No Cost, No Obligation
                        </p >
                        <p >
                          <span className={classes.Icons}><DoneOutlineIcon/></span> Fast and secure
                        </p>
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={classes.root}>
                        <form className={classes.form}>
                            <div className={classes.fileField}> 
                            <label for="img" className={classes.uploadIcon}>
                                <Typography>
                                Image/Video
                                </Typography>
                                </label>
                            <input id="img" style={{display:"none", visibility:"none"}} className={classes.field} type="file"/>
                            </div>
                            <div>
                            <select className={classes.field}>
                                <option >Select Make</option>
                                <option>Two</option>
                                <option>Three</option>
                                <option>Four</option>
                                <option>Five</option>
                            </select>
                            </div>
                            <div>
                            <select className={classes.field}>
                                <option>Select Model</option>
                                <option>Two</option>
                                <option>Three</option>
                                <option>Four</option>
                                <option>Five</option>
                            </select>
                            </div>
                            <div>
                            <select className={classes.field}>
                                <option>Select Year</option>
                                <option>Two</option>
                                <option>Three</option>
                                <option>Four</option>
                                <option>Five</option>
                            </select>
                            </div>
                            <div >
                                <Button type="submit" className={classes.field} variant="contained" color="primary">Submit</Button>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>

        </ThemeProvider>
    )
}
