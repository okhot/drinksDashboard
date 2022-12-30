import React, { useState } from "react";
import registerStyle from "../styles/register.module.css";
import registerImage from "../public/assets/undraw_access_account_re_8spm.svg";
import Image from "next/image";

function CreateUser({ handleSubmit }) {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  return (
    <div className={registerStyle.register}>
      <Image src={registerImage} className={registerStyle.registerImage} />
      <div className={registerStyle.register__form}>
        <div className={registerStyle.registerForm__userFirstname}>
          <label className="form__label" for="firstName">
            First Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={handleInputChange}
          />
        </div>
        <div className={registerStyle.registerForm__lastName}>
          <label className="form__label" for="lastName">
            Last Name{" "}
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            value={lastName}
            className="form__input"
            placeholder="LastName"
            onChange={handleInputChange}
          />
        </div>
        <div className={registerStyle.registerForm__email}>
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            value={email}
            className="form__input"
            placeholder="Email"
            onChange={handleInputChange}
          />
        </div>
        <div className={registerStyle.registerForm__password}>
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={handleInputChange}
          />
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div>
        <button
          onClick={() => handleSubmit({ firstName, lastName, email, password })}
          type="submit"
        >
          register
        </button>
      </div>
    </div>
  );
}

export default CreateUser;
