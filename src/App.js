// Dribbble design: https://dribbble.com/shots/7862386-Verify-Email-Address-UI-Design -->
import React, { useRef, useEffect } from "react";
import "./styles.css";

export default function App() {
  const inputOneRef = useRef(null);
  const inputTwoRef = useRef(null);
  const inputThreeRef = useRef(null);
  const inputFourRef = useRef(null);
  const inputFiveRef = useRef(null);
  const inputSixRef = useRef(null);

  const refFunction = (e, ref1, ref2) => {
    if (e.key >= 0 && e.key <= 9) {
      setTimeout(() => {
        ref2.current.focus();
      }, 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => {
        ref1.current.focus();
      }, 10);
    }
  };

  const changeHandler = (e, id) => {
    e.persist();
    if (id === 1) {
      refFunction(e, inputOneRef, inputTwoRef);
    } else if (id === 2) {
      refFunction(e, inputOneRef, inputThreeRef);
    } else if (id === 3) {
      refFunction(e, inputTwoRef, inputFourRef);
    } else if (id === 4) {
      refFunction(e, inputThreeRef, inputFiveRef);
    } else if (id === 5) {
      refFunction(e, inputFourRef, inputSixRef);
    } else if (id === 6) {
      refFunction(e, inputFiveRef, inputSixRef);
    }
  };

  useEffect(() => {
    inputOneRef.current.focus();
  }, []);

  return (
    <div className="container">
      <h2>Verify your account</h2>
      <p>
        We emailed you the six digit code to cool_buddy@gmail.com <br /> Enter
        the code below to confirm your email address.
      </p>
      <div className="code-container">
        <input
          type="number"
          className="code"
          placeholder="0"
          min="0"
          max="9"
          required
          ref={inputOneRef}
          onKeyDown={(e) => changeHandler(e, 1)}
        />
        <input
          type="number"
          className="code"
          placeholder="0"
          min="0"
          max="9"
          required
          ref={inputTwoRef}
          onKeyDown={(e) => changeHandler(e, 2)}
        />
        <input
          type="number"
          className="code"
          placeholder="0"
          min="0"
          max="9"
          required
          ref={inputThreeRef}
          onKeyDown={(e) => changeHandler(e, 3)}
        />
        <input
          type="number"
          className="code"
          placeholder="0"
          min="0"
          max="9"
          required
          ref={inputFourRef}
          onKeyDown={(e) => changeHandler(e, 4)}
        />
        <input
          type="number"
          className="code"
          placeholder="0"
          min="0"
          max="9"
          required
          ref={inputFiveRef}
          onKeyDown={(e) => changeHandler(e, 5)}
        />
        <input
          type="number"
          className="code"
          placeholder="0"
          min="0"
          max="9"
          required
          ref={inputSixRef}
          onKeyDown={(e) => changeHandler(e, 6)}
        />
      </div>
      <small className="info">
        This is design only. We didn't send you an actual email as we don't have
        your email, right? xD
      </small>
    </div>
  );
}
