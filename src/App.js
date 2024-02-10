import React, { useState } from "react";
import data from './data';
import Cards from "./components/Cards";

const App = () => {

  const [tours,setTours]=useState(data);

  function removeTourHandler(id){
    const newToursData=tours.filter((eachTour)=>eachTour.id!==id);
    setTours(newToursData);
  }

  if(tours.length===0){
    return(
      <div className="no-tour-left-container">
        <h2>No Tours Left</h2>
        <button onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="wrapper">
      <h1>Plan The Trip</h1>
      <Cards tours={tours} removeTourHandler={removeTourHandler}></Cards>
    </div>
  );
};

export default App;
