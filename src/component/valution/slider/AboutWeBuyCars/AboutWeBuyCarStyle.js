import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme=>({
    completeContent:{
        marginTop:"20px",
    },
    mainContent:{
       
    },
    GridContainer:{
       
    },
    firstHeading:{
        fontWeight:"bold",
        marginBottom:"20px",
    },
    aboutWeBuyCars:{
        width:"70%",
        marginTop:"90px",
        [theme.breakpoints.down("md")]:{
            width:"100%",
        }

    },
    secondHeading:{
        fontWeight:"bold",
        marginTop:"20px",
        marginBottom:"10px",
    },
    thirdHeading:{
        fontWeight:"bold",
        marginTop:"20px",
        marginBottom:"10px",
        fontSize:"30px"
    },
    secondSubHeading:{
        fontWeight:"bold",
        marginBottom:"10px",
    },
    textBold:{
        fontWeight:"bold",
    },
    typeOfCars:{
        fontWeight:"bold",
        listStyle:"none",
        display:"flex",
        justifyContent:"center",
        fontSize:"20px",
        [theme.breakpoints.down("sm")]:{
            fontSize:"10px",
        }
    },
    listStyle:{
        listStyle:"none", 
    }

}))
export default useStyle;