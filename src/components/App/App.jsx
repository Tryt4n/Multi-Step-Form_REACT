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
      />

      {width <= 768 && (
        <footer>
          <StepsNavigation
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </footer>
      )}
    </section>
  );
}
