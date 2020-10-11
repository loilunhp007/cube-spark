import React from "react";
import {Link} from "react-router-dom";
import FuseNavbar from "../components/fuse-navbar";

export default function Home() {
  return (
    <div className="flex h-screen">
        <h3>Welcome Home</h3>
        <Link to='/authorization'>Authorization</Link>
        <FuseNavbar/>
    </div>
  );
}