import { Grid } from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";
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
        Nav
      </Grid>
      <Grid item xs={10}>
        <Grid container direction="column">
            <Header/>
        </Grid>
      </Grid>
    </Grid>

  );
}