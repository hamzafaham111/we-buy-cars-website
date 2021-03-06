import { makeStyles } from "@material-ui/core";
import bgImage from './Assets/CarEvaluationBgImage.jpg';
const useStyle = makeStyles(theme=>({
    root:{
        display:"flex",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    fontSize:{
        fontSize:"30px",
        [theme.breakpoints.down("md")]:{
            fontSize:"20px",
        },      
    },
    root2:{
        height:"100%",
        [theme.breakpoints.up("md")]:{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
        },
        [theme.breakpoints.down("md")]:{
            display:"flex",
            flexDirection:"column",
        },
        [theme.breakpoints.down("sm")]:{
            display:"flex",
            flexDirection:"column",
            width:"90%",
        },
        color:"white",
        width:"90%",
        margin:"auto",
        },
        textHeading:{
            fontSize:"30px",
            lineHeight:"35px",
            fontWeight:"bold",
            [theme.breakpoints.down("sm")]:{
                fontSize:"25px", 
            },
        },
    line:{
        width:"30%",
        backgroundColor:"#F76135",
        height:"5px",
        marginBottom:"20px",
        marginTop:"15px",
    },
    Icons:{
        color:"#F76135",
    },
    CarEvaluationBg:{
        backgroundImage:`url(${bgImage}),linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.1))`,
        backgroundBlendMode: "overlay",
        backgroundPosition:"center",
        backgroundSize:"cover",
        padding:"20px",
    },
    form:{
        backgroundColor:"rgba(255, 255, 255, 0.9)",
        width:"70%",
        [theme.breakpoints.down("sm")]:{
            width:"90%",
            marginTop:"20px",
        },
        [theme.breakpoints.up("md")]:{
            width:"70%",
        },
        margin:"auto",
        padding:"20px",
        borderRadius:"4px",
    },
    field:{
        width:"100%",
        marginTop:"20px",
        padding:"15px",
        borderRadius:"5px",
        fontSize:"17px",
        outline:"none",
        border:"none",
        },
    fileField:{
        border:"solid white 2px",
        width:"100%",
        margin:"auto",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        borderRadius:"5px",
    },
    uploadIcon:{
        width:"100%",
        textAlign:"center",
        display:"flex",
        justifyContent:"center",
        padding:"30px",
        cursor:"pointer",
    },
}))
export default useStyle;