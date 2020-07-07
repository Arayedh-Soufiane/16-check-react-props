import React from "react";
import "./App.css";
import ProfileComponents from "./profile/profileComponents";
import ImgProf from "./profile/Prof.jpg";

const handelName = (name) => {
  alert(name);
};

function App() {
  return (
    <div className="App">
      <h1>React Props checkpoint</h1>
      <ProfileComponents
        fullName="Soufiane Arayedh"
        bio="Mechanical engineering is an engineering branch that combines engineering physics and mathematics principles with materials science to design, analyze, manufacture, and maintain mechanical systems"
        profession="Mechanical engineering"
        handelName={handelName}
      />
      <img className="cl" src={ImgProf}></img>
    </div>
  );
}

export default App;
