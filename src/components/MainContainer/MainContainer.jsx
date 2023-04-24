import { useState } from "react";

import PersonalInfo from "../PersonalInfo/personalInfo";
import SelectPlan from "../SelectPlan/SelectPlan";
import StepsNavigation from "../StepsNavigation/StepsNavigation";
import PickAddOns from "../PickAddOns/PickAddOns";

export default function MainContainer({ width, headerText, instructiveText }) {
  const [isMonthlyChecked, setIsMonthlyChecked] = useState(true);
  const [activePlanCard, setPlanActiveCard] = useState("arcade");

  return (
    <article className="main-container">
      <header className="main-container__text-container">
        <h1 className="main-container__header-text">{headerText}</h1>
        <p className="main-container__instructive-text">{instructiveText}</p>
      </header>

      {/* <PersonalInfo /> */}
      {/* <SelectPlan
        isMonthlyChecked={isMonthlyChecked}
        setIsMonthlyChecked={setIsMonthlyChecked}
        activePlanCard={activePlanCard}
        setPlanActiveCard={setPlanActiveCard}
      /> */}
      <PickAddOns isMonthlyChecked={isMonthlyChecked} />

      {width >= 768 && <StepsNavigation />}
    </article>
  );
}
