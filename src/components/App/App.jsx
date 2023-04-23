import useWindowSize from "../../hooks/useWindowSize";

import StepSection from "../StepSection/StepSection";
import StepsNavigation from "../StepsNavigation/StepsNavigation";
import MainContainer from "../MainContainer/MainContainer";

export default function App() {
  const { width } = useWindowSize();

  return (
    <section className="form-block">
      <StepSection width={width} />

      <MainContainer
        width={width}
        headerText="Personal Info"
        instructiveText="Please provide your name, email, address, and phone number."
      />

      {width <= 768 && <StepsNavigation />}
    </section>
  );
}
