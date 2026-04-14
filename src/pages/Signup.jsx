import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();

  function register(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    if (data.get("password") !== data.get("passwordConfirmation")) {
      setPasswordMatch(false);
    } else {
        setPasswordMatch(true);
        const user = {
          email: data.get("email"),
          password: data.get("password"),
          type: "user",
        };

        fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });

        navigate("/", {
          state: { message: "User registado com sucesso!" },
        });
      
    }
  }

  return (
    <div>
      <h5>Registo de users</h5>
      <form onSubmit={register} className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" />
        </div>
        <br />
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
        <br />

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="passwordConfirmation"
            type="password"
            name="passwordConfirmation"
          />
        </div>
        {!passwordMatch && <p>Atenção que as passes não coincidem</p>}
        <br />
        <p className="form-actions">
          <button type="submit">Login</button>
        </p>
      </form>
    </div>
  );
};
