// import {useState} from 'react';

// function DashBoard(){

// const [students,setStudens]= useState([
//     {
//         name:"naveed",
//         id: 3421
//     },
//     {
//         name:"Sikandar",
//         id: 389
//     },
//      {
//         name:"Bilal",
//         id:431
//     },
//     {
//         name:"Khan",
//         id: 37668
//     }
// ])

//     return(
//         <>

//        {
//            students.map((student,index)=>{
//                return <p style={{color:"black" ,width:"70%" ,padding:"20px" ,marginLeft:"20" , backgroundColor:"red"}}>No.#   {index} Name- {student.name}</p>
//            })
//        }

//         <h1>Sikandar bakhat</h1>
//         </>
//     )
// }

// export default DashBoard;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useFetchProducts } from "./useFetchProducts";
import StarIcon from '@material-ui/icons/Star';

// import { useFetchDashBoard } from "./useFetchDashboard";
// import {useState} from 'react'
import './dashBoardStyle.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: 8,
  },
  media: {
    height: 300,
  },
  
});

export default function MediaCard() {
  const classes = useStyles();
  
// const [students, setStudens]=useFetchDashBoard()
const [products,loading] = useFetchProducts()

if(loading){
    return <div> <p>loading ...</p></div>
}
    return (<div className="MainCard">
  { products.map((product, index) => {
        
      return (
        <div  className="MainCard2">
        <Card className={classes.root} >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={product.image}
              title={product.price}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h6">
                {product.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {/* {product.description} */}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Price: {product.price}
            </Button>
            <Button size="small" color="primary">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </Button>
          </CardActions>
        </Card>
        </div>
     );
    
    }
    )
}

</div>);}