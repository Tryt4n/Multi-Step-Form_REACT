import { useEffect, useRef } from "react";
import { isAlpha } from "validator";

export default function PersonalInfo({ name, setName, email, setEmail, phone, setPhone }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  useEffect(() => {
    // console.log(nameRef.current.value);
  }, [name, setName, nameRef]);

  function validateName(name) {
    return isAlpha(name.replace(/\s+/g), "pl-PL");
  }

  return (
    <>
      <form
        className="personal-info-container"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="personal-info-container__input-wrapper">
          <div>
            <div className="personal-info-container__label-wrapper">
              <label
                htmlFor="name"
                className="personal-info-container__label"
              >
                Name
              </label>
              <em className="personal-info-container__label-warning-info">
                This filed is required
              </em>
            </div>
            <input
              className="personal-info-container__input"
              type="text"
              name="name"
              id="name"
              required
              placeholder="e.g. Stephen King"
              pattern="[a-zA-Z\-]+"
              ref={nameRef}
              value={name}
              // onChange={(e) => setName(e.target.value)}
              onChange={(e) => {
                if (validateName(e.target.value)) {
                  setName(e.target.value);
                }
              }}
            />
          </div>

          <div>
            <div className="personal-info-container__label-wrapper">
              <label
                htmlFor="email"
                className="personal-info-container__label"
              >
                Email Address
              </label>
              <em className="personal-info-container__label-warning-info">
                This filed is required
              </em>
            </div>
            <input
              className="personal-info-container__input"
              type="email"
              name="email"
              id="email"
              required
              placeholder="e.g. stephenking@lorem.com"
              ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="personal-info-container__label-wrapper">
              <label
                htmlFor="phone"
                className="personal-info-container__label"
              >
                Phone
              </label>
              <em className="personal-info-container__label-warning-info">
                This filed is required
              </em>
            </div>
            <input
              className="personal-info-container__input"
              type="tel"
              name="phone"
              id="phone"
              required
              placeholder="e.g. +1 234 567 890"
              ref={phoneRef}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
      </form>
    </>
  );
}
