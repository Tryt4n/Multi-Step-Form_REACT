import { useRef } from "react";

export default function PickAddOns({ isMonthlyChecked, addOnsState }) {
  const onlineRef = useRef(null);
  const storageRef = useRef(null);
  const customizableRef = useRef(null);

  function handleCheckboxChange(ref) {
    if (ref.current.checked) {
      ref.current.parentNode.classList.add("active");
    } else {
      ref.current.parentNode.classList.remove("active");
    }
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="pick-add-ons-container"
    >
      <label
        htmlFor="online-service"
        className="pick-add-ons-card"
      >
        <input
          type="checkbox"
          name="online-service"
          id="online-service"
          className="pick-add-ons-card__checkbox"
          ref={onlineRef}
          onChange={() => {
            handleCheckboxChange(onlineRef);
            addOnsState.setOnlineService(!addOnsState.onlineService);
          }}
        />
        <div className="pick-add-ons-card__label-container">
          <h2 className="pick-add-ons-card__header">Online service</h2>
          <p className="pick-add-ons-card__text">Access to multiplayer games</p>
        </div>
        <em className="pick-add-ons-card__price">{isMonthlyChecked ? "+$1/mo" : "+10$/yr"}</em>
      </label>

      <label
        htmlFor="larger-storage"
        className="pick-add-ons-card"
      >
        <input
          type="checkbox"
          name="larger-storage"
          id="larger-storage"
          className="pick-add-ons-card__checkbox"
          ref={storageRef}
          onChange={() => {
            handleCheckboxChange(storageRef);
            addOnsState.setLargerStorage(!addOnsState.largerStorage);
          }}
        />
        <div className="pick-add-ons-card__label-container">
          <h2 className="pick-add-ons-card__header">Larger storage</h2>
          <p className="pick-add-ons-card__text">Extra 1TB of cloud save</p>
        </div>
        <em className="pick-add-ons-card__price">{isMonthlyChecked ? "+$2/mo" : "+20$/yr"}</em>
      </label>

      <label
        htmlFor="customizable-profile"
        className="pick-add-ons-card"
      >
        <input
          type="checkbox"
          name="customizable-profile"
          id="customizable-profile"
          className="pick-add-ons-card__checkbox"
          ref={customizableRef}
          onChange={() => {
            handleCheckboxChange(customizableRef);
            addOnsState.setCustomizableProfile(!addOnsState.customizableProfile);
          }}
        />
        <div className="pick-add-ons-card__label-container">
          <h2 className="pick-add-ons-card__header">Customizable profile</h2>
          <p className="pick-add-ons-card__text">Custom theme on your profile</p>
        </div>
        <em className="pick-add-ons-card__price">{isMonthlyChecked ? "+$2/mo" : "+20$/yr"}</em>
      </label>
    </form>
  );
}
