export default function PickAddOns({ isMonthlyChecked }) {
  return (
    <div>
      <div className="pick-add-ons-card">
        <input
          type="checkbox"
          name="online-service"
          id="online-service"
        />
        <label htmlFor="online-service">
          <h2>Online service</h2>
          <p>Access to multiplayer games</p>
        </label>
        <em>+$1/mo</em>
      </div>
    </div>
  );
}
