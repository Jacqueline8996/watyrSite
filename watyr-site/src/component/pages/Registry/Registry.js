import React from "react";
// import { Link } from "react-router-dom";
import "./Registry.css";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Wrapper from "../../Wrapper/Wrapper";
import RegistryInfo from "../../RegistryInfo/RegistryInfo";

function Registry() {
  return (
    <div>
      <NavBar/>
      <Wrapper >
        <RegistryInfo/>
      </Wrapper>
    {/* <NavBar className = "waytrTop"/>
    <Wrapper >
      <RegistryInfo className = "waytrTop"/>
    </Wrapper> */}
      {/* <NavBar />
      <Wrapper>
        <RegistryInfo/>
      </Wrapper> */}
    <Footer className="footers"/>
    {/* <div className="waytrTop">
    <NavBar />
    <Wrapper>
      <RegistryInfo/>
    </Wrapper>
    </div>
    <Footer className="footers"/> */}
    </div>
  );
}

export default Registry;