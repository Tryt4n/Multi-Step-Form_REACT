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
  return (
    <section className="form-block">
      <StepSection width={width} />

      <MainContainer
        width={width}
        // headerText={mainContainerText.personalInfo.headerText}
        // instructiveText={mainContainerText.personalInfo.instructiveText}
        // headerText={mainContainerText.selectPlan.headerText}
        // instructiveText={mainContainerText.selectPlan.instructiveText}
        // headerText={mainContainerText.pickAddOns.headerText}
        // instructiveText={mainContainerText.pickAddOns.instructiveText}
        headerText={mainContainerText.finishingUp.headerText}
        instructiveText={mainContainerText.finishingUp.instructiveText}
      />

      {width <= 768 && (
        <footer>
          <StepsNavigation />
        </footer>
      )}
    </section>
  );
}
