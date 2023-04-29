import { useRef, useEffect } from "react";

export default function PersonalInfo({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  isNameValid,
  isEmailValid,
  isPhoneValid,
  isValid,
}) {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

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
              {!isValid && name === "" ? (
                <em className="personal-info-container__label-warning-info">
                  This filed is required
                </em>
              ) : undefined}
              {!isValid && !isNameValid && name !== "" ? (
                <em className="personal-info-container__label-warning-info">
                  Please enter your full name
                </em>
              ) : undefined}
            </div>
            <input
              className="personal-info-container__input"
              type="text"
              name="name"
              id="name"
              required
              placeholder="e.g. Stephen King"
              maxLength={40}
              ref={nameRef}
              value={name}
              onChange={(e) => {
                let input = e.target.value;
                //* Validation: first letter of any word is capitalize, any other letters are lowercase *//
                input = input.toLowerCase().replace(/(?:^|\s|[-])\S/g, (a) => a.toUpperCase());
                if (
                  /^[a-zA-Z\s-]*$/.test(input) && //* Only letters, spaces and dashes
                  /^(?!\s)(?!-)/.test(input) && //* No space or dash at the beginning
                  !/\s{2,}/.test(input) && //* No more than one space in a row
                  !/-{2,}/.test(input) && //* No more than one dash in a row
                  !/\s[-]|[^\s-][-]\s/.test(input) //* No spaces or dashes next to each other
                ) {
                  setName(input);
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
              {!isValid && email === "" ? (
                <em className="personal-info-container__label-warning-info">
                  This filed is required
                </em>
              ) : undefined}
              {!isValid && !isEmailValid && email !== "" ? (
                <em className="personal-info-container__label-warning-info">
                  Please enter a valid email
                </em>
              ) : undefined}
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
              maxLength={40}
              onChange={(e) => {
                let input = e.target.value;
                //* Removes all characters other than letters, numbers, "_", "-", ".", "@"
                input = input.replace(/[^a-zA-Z0-9_\-\.@]/g, "");
                //* Removes the characters "_", "-", ".", "@" from the beginning of the entered value
                input = input.replace(/^[_\-.@]+/, "");
                //* remove occurrences of "_", "-", ".", "@" next to each other
                input = input.replace(/[_\-.@]+[_\-.@]+/g, (match) => match.charAt(0));
                //* Checks if "@" occurs only once
                let atIndex = input.indexOf("@");
                if (atIndex !== -1) {
                  let afterAtIndex = input.substring(atIndex + 1);
                  if (afterAtIndex.indexOf("@") !== -1) {
                    //* Does not let enter the "@" a second time
                    input = input.substring(0, atIndex + 1) + afterAtIndex.replace(/[@]/g, "");
                  }
                }
                setEmail(input);
              }}
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
              {!isValid && phone === "" ? (
                <em className="personal-info-container__label-warning-info">
                  This filed is required
                </em>
              ) : undefined}
              {!isValid && !isPhoneValid && phone !== "" ? (
                <em className="personal-info-container__label-warning-info">
                  Please enter a valid phone number
                </em>
              ) : undefined}
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
              maxLength={13}
              onChange={(e) => {
                let input = e.target.value;
                const lastChar = input.charAt(input.length - 1);
                //* Check if space or dash is entered after +
                if (
                  input.length > 1 &&
                  (lastChar === " " || lastChar === "-") &&
                  input.charAt(input.length - 2) === "+"
                ) {
                  //* Remove space or dash if it's entered directly after +
                  input = input.slice(0, -1);
                }
                //* Removes all characters that are not numbers or "+" or "-" or space
                input = input.replace(/[^0-9+\-\s]/g, "");
                //* Removes spaces from the beginning of the entered value
                input = input.trimStart();
                //* Removes the "-" sign from the beginning of the entered value
                input = input.replace(/^[-]/, "");
                //* Removes spaces or dashes that are next to each other, and also checks whether two of the same characters ("-" or space) are not next to each other
                input = input
                  .replace(/[\s-]+/g, (match) => {
                    return match.charAt(0);
                  })
                  .replace(/([- ])\1+/g, "$1");
                //* Removes all occurrences of "+" except the first character
                input = input.replace(/\+/g, (match, offset) => {
                  return offset === 0 ? "+" : "";
                });
                //* Checks if "+" is only at the beginning
                if (input.indexOf("+") !== 0) {
                  input = input.replace(/[+]/g, "");
                }
                setPhone(input);
              }}
            />
          </div>
        </div>
      </form>
    </>
  );
}
