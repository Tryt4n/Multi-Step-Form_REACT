import { useState } from "react";

import PersonalInfo from "../PersonalInfo/personalInfo";
import SelectPlan from "../SelectPlan/SelectPlan";
import StepsNavigation from "../StepsNavigation/StepsNavigation";
import PickAddOns from "../PickAddOns/PickAddOns";
import FinishingUp from "../FinishingUp/FinishingUp";

import { plans, addOns } from "../../data.json";

export default function MainContainer({ width, headerText, instructiveText }) {
  const [isMonthlyChecked, setIsMonthlyChecked] = useState(true);
  const [activePlanCard, setPlanActiveCard] = useState("arcade");
  //* ADD-ONS *//
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);

  const pickAddOnsProps = {
    onlineService,
    setOnlineService,
    largerStorage,
    setLargerStorage,
    customizableProfile,
    setCustomizableProfile,
  };

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
        plans={plans}
      /> */}
      {/* <PickAddOns
        isMonthlyChecked={isMonthlyChecked}
        addOnsState={pickAddOnsProps}
      /> */}
      <FinishingUp
        isMonthlyChecked={isMonthlyChecked}
        activePlanCard={activePlanCard}
        addOnsProps={pickAddOnsProps}
        plans={plans}
        addOns={addOns}
      />

      {width >= 768 && <StepsNavigation />}
    </article>
  );
}
