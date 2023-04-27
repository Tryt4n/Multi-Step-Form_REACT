export default function PickAddOns({ isMonthlyChecked, addOnsState }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="pick-add-ons-container"
    >
      <label
        htmlFor="online-service"
        className={`pick-add-ons-card ${addOnsState.onlineService ? "active" : ""}`}
      >
        <input
          type="checkbox"
          name="online-service"
          id="online-service"
          className="pick-add-ons-card__checkbox"
          checked={addOnsState.onlineService}
          onChange={() => {
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
        className={`pick-add-ons-card ${addOnsState.largerStorage ? "active" : ""}`}
      >
        <input
          type="checkbox"
          name="larger-storage"
          id="larger-storage"
          className="pick-add-ons-card__checkbox"
          checked={addOnsState.largerStorage}
          onChange={() => {
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
        className={`pick-add-ons-card ${addOnsState.customizableProfile ? "active" : ""}`}
      >
        <input
          type="checkbox"
          name="customizable-profile"
          id="customizable-profile"
          className="pick-add-ons-card__checkbox"
          checked={addOnsState.customizableProfile}
          onChange={() => {
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
