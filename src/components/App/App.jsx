import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

import StepSection from "../StepSection/StepSection";
import StepsNavigation from "../StepsNavigation/StepsNavigation";
import MainContainer from "../MainContainer/MainContainer";

const mainContainerText = {
  personalInfo: {
    headerText: "Personal Info",
    instructiveText: "Please provide your name, email, address, and phone number.",
  },
  selectPlan: {
    headerText: "Select your plan",
    instructiveText: "You have the option of monthly or yearly billing.",
  },
  pickAddOns: {
    headerText: "Pick add-ons",
    instructiveText: "Add-ons help enhance your gaming experience.",
  },
  finishingUp: {
    headerText: "Finishing up",
    instructiveText: "Double-check everything looks OK before confirming.",
  },
};

export default function App() {
  const { width } = useWindowSize();
  const [currentStep, setCurrentStep] = useState(1);

  //* Personal Info *//
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isValid, setIsValid] = useState(true); //* Default true because by default warning info is hidden

  let headerText, instructiveText;
  if (currentStep === 1) {
    headerText = mainContainerText.personalInfo.headerText;
    instructiveText = mainContainerText.personalInfo.instructiveText;
  } else if (currentStep === 2) {
    headerText = mainContainerText.selectPlan.headerText;
    instructiveText = mainContainerText.selectPlan.instructiveText;
  } else if (currentStep === 3) {
    headerText = mainContainerText.pickAddOns.headerText;
    instructiveText = mainContainerText.pickAddOns.instructiveText;
  } else if (currentStep === 4) {
    headerText = mainContainerText.finishingUp.headerText;
    instructiveText = mainContainerText.finishingUp.instructiveText;
  }

  return (
    <section className="form-block">
      <StepSection
        width={width}
        currentStep={currentStep}
      />

      <MainContainer
        width={width}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        headerText={headerText}
        instructiveText={instructiveText}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        isNameValid={isNameValid}
        isEmailValid={isEmailValid}
        isPhoneValid={isPhoneValid}
        setIsNameValid={setIsNameValid}
        setIsEmailValid={setIsEmailValid}
        setIsPhoneValid={setIsPhoneValid}
        isValid={isValid}
        setIsValid={setIsValid}
      />

      {width <= 768 && (
        <footer>
          <StepsNavigation
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            name={name}
            email={email}
            phone={phone}
            isNameValid={isNameValid}
            isEmailValid={isEmailValid}
            isPhoneValid={isPhoneValid}
            setIsNameValid={setIsNameValid}
            setIsEmailValid={setIsEmailValid}
            setIsPhoneValid={setIsPhoneValid}
            setIsValid={setIsValid}
          />
        </footer>
      )}
    </section>
  );
}
