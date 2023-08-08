import React, { useState } from "react";
import "../../Styles/Registration/SignUp/SignUp.scss";
import SectionLeft from "../../Components/Registration/SignUp/SectionLeft/SectionLeft";
import Home from "../../Components/Registration/SignUp/SectionRight/Home";
import PersonalInfo from "../../Components/Registration/SignUp/SectionRight/PersonalInfo";
import ResidencyInfo from "../../Components/Registration/SignUp/SectionRight/ResidencyInfo";

const SignUp = () => {
  const [home, setHome] = useState(true);
  const [personalInfo, setPersonalInfo] = useState(false);
  const [residencyInfo, setResidencyInfo] = useState(false);
  const [caseSignup, setCaseSignup] = useState();

  return (
    <div className="signUp">
      <SectionLeft />
      {home ? (
        <Home
          setHome={setHome}
          setPersonalInfo={setPersonalInfo}
          screen={"Home"}
          setCaseSignup = {setCaseSignup}
        />
      ) : personalInfo ? (
        <PersonalInfo
          setHome={setHome}
          setPersonalInfo={setPersonalInfo}
          setResidencyInfo={setResidencyInfo}
          screen={"PersonalInfo"}
          caseSignup = {caseSignup}
        />
      ) : residencyInfo ? (
        <ResidencyInfo
          setHome={setHome}
          setPersonalInfo={setPersonalInfo}
          setResidencyInfo={setResidencyInfo}
          screen={"ResidencyInfo"}
          caseSignup = {caseSignup}
        />
      ) : null}
    </div>
  );
};

export default SignUp;
