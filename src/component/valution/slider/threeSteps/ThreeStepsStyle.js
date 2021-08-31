import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme=>({
    containerGrid:{

    },
    container:{
        marginBottom:"50px",
    },
    blockGrid:{
        fontSize:"60px",
        alignItems:"center",
        textAlign:"center",
    },
    paragraph:{
        [theme.breakpoints.down("md")]:{
            width:"70%",
            margin:"auto",
        }
    },
    firstHeading:{
        fontWeight:"bold",
        marginTop:"40px",
    },

}))
export default useStyle;