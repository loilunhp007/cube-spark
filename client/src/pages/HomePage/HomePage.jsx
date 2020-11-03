import { Button, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewHobby } from "../../actions/hobby";

/* 
    <div className="flex h-screen">
        <h3>Welcome Home</h3>
        <Link to='/authorization'>Authorization</Link>
*/
const randomNumber = ()=> {
  return 1000+Math.random();
}
export default function HomePage() {
  const hobbyState = useSelector(state => ({ 
    list: state.hobby.list,
    activeId: state.hobby.activeId,
  }))

  const dispatch = useDispatch();
  console.log(hobbyState.list);
  const handleAddHobbyClick = ()=>{
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `title ${newId}`,
    }
    const action = addNewHobby(newHobby);
    dispatch(action);
  }
  
  return (
    <Grid container direction="row">
      <Grid item xs={4}>
        <Button variant="contained" onClick={handleAddHobbyClick}>Random</Button>
      </Grid>
      <Grid item xs={8}>
        <Grid container direction="column">
        {hobbyState.list.map((hobby)=>{
          return (<Typography key={hobby.id} >{hobby.title}</Typography>)
        })}
        </Grid>
      </Grid>
    </Grid>

  );
}