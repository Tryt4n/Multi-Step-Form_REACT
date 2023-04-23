// import PersonalInfo from "../PersonalInfo/personalInfo";
import SelectPlan from "../SelectPlan/SelectPlan";
import StepsNavigation from "../StepsNavigation/StepsNavigation";

export default function MainContainer({ width, headerText, instructiveText }) {
  return (
    <article className="main-container">
      <header className="main-container__text-container">
        <h1 className="main-container__header-text">{headerText}</h1>
        <p className="main-container__instructive-text">{instructiveText}</p>
      </header>

      {/* <PersonalInfo /> */}
      <SelectPlan />

      {width >= 768 && <StepsNavigation />}
    </article>
  );
}
