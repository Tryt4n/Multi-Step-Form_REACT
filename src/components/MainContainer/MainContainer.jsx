import StepsNavigation from "../StepsNavigation/StepsNavigation";
import FormContainer from "../FormContainer/FormContainer";

export default function MainContainer({ width, headerText, instructiveText }) {
  return (
    <article className="main-container">
      <header className="main-container__text-container">
        <h1 className="main-container__header-text">{headerText}</h1>
        <p className="main-container__instructive-text">{instructiveText}</p>
      </header>

      <FormContainer />

      {width >= 768 && <StepsNavigation />}
    </article>
  );
}
