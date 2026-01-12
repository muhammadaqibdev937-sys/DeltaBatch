import "./App.css";
import  Tile  from "./tile.jsx";
import { Devs } from "./dev.jsx";
import React from "react";
function FirstCompo(){
  return <h3>I am first compo</h3>;
}

function Desc()
{
  return <p>i am dez</p>
}

function Footer()
{
  return <p>i am footer</p>
}
function App(){

  // return (
  // <React.Fragment>
  // <FirstCompo/>
  // <Desc/>
  // <Footer/>
  // <Tile/>
  // <Devs/>
  // </React.Fragment>
  // );
  return (
    <>
    <FirstCompo/>
    <Desc/>
    <Footer/>
    <Tile/>
    <Devs/>
    </>
    );
}

export default App