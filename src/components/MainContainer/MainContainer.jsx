import { useState } from "react";

import PersonalInfo from "../PersonalInfo/personalInfo";
import SelectPlan from "../SelectPlan/SelectPlan";
import StepsNavigation from "../StepsNavigation/StepsNavigation";
import PickAddOns from "../PickAddOns/PickAddOns";
import FinishingUp from "../FinishingUp/FinishingUp";
import Confirmation from "../Confirmation/Confirmation";

import { plans, addOns } from "../../data.json";

export default function MainContainer({
  width,
  headerText,
  instructiveText,
  currentStep,
  setCurrentStep,
  //* Personal Info
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  isNameValid,
  setIsNameValid,
  isEmailValid,
  setIsEmailValid,
  isPhoneValid,
  setIsPhoneValid,
  isValid,
  setIsValid,
  //*
}) {
  //* Monthly or Yearly plan *//
  const [isMonthlyChecked, setIsMonthlyChecked] = useState(true);

  //* Active Plan *//
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
      {currentStep > 4 ? (
        ""
      ) : (
        <header className="main-container__text-container">
          <h1 className="main-container__header-text">{headerText}</h1>
          <p className="main-container__instructive-text">{instructiveText}</p>
        </header>
      )}

      {currentStep === 1 && (
        <PersonalInfo
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          isNameValid={isNameValid}
          isEmailValid={isEmailValid}
          isPhoneValid={isPhoneValid}
          isValid={isValid}
        />
      )}

      {currentStep === 2 && (
        <SelectPlan
          isMonthlyChecked={isMonthlyChecked}
          setIsMonthlyChecked={setIsMonthlyChecked}
          activePlanCard={activePlanCard}
          setPlanActiveCard={setPlanActiveCard}
          plans={plans}
        />
      )}

      {currentStep === 3 && (
        <PickAddOns
          isMonthlyChecked={isMonthlyChecked}
          addOnsState={pickAddOnsProps}
        />
      )}

      {currentStep === 4 && (
        <FinishingUp
          isMonthlyChecked={isMonthlyChecked}
          activePlanCard={activePlanCard}
          addOnsProps={pickAddOnsProps}
          plans={plans}
          addOns={addOns}
          setCurrentStep={setCurrentStep}
        />
      )}

      {currentStep === 0 || (currentStep > 4 && <Confirmation />)}

      {width > 768 && (
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
      )}
    </article>
  );
}
