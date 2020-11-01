import Grid from "@material-ui/core/Grid";
import React from "react";
import FuseNavbar from "../components/fuse-navbar";
import Header from "../components/header";
/* 
    <div className="flex h-screen">
        <h3>Welcome Home</h3>
        <Link to='/authorization'>Authorization</Link>
*/
export default function Home() {
  return (
    <Grid container direction="row">
      <Grid item xs={2}>
        <FuseNavbar>menu item</FuseNavbar>
      </Grid>
      <Grid item xs={10}>
        <Grid container direction="column">
            <Header/>
        </Grid>
      </Grid>
    </Grid>

  );
}