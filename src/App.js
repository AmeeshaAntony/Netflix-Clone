import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import p1 from './Database/originals/orginals.json';
import p2 from './Database/action/action.json';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App(){
  return(
    <div className="App">
      <NavBar/>
      <Banner />
      <RowPost title="Netflix Originals" data={p1.results} isSmall={false} />
      <RowPost title="Action Movies" data={p2.results} isSmall={true} />
    </div>
  );
}

export default App;