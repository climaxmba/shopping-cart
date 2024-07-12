import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  logout,
  setEmail,
  setPhone,
  setUserName,
} from "../../_redux/store";
import { Button } from "@mui/material";

import PropTypes from "prop-types";
import styles from "./account.module.scss";

export default function Account() {
  const { name } = useParams();
  return <div>{name ? <Auth tab={name} /> : <Details />}</div>;
}

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    userName && dispatch(login({ userName, email, phone }));
    navigate("/");
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="signupName">Username:</label>
        <input
          type="text"
          name="signupName"
          id="signupName"
          defaultValue={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="signupEmail">Email:</label>
        <input
          type="email"
          name="signupEmail"
          id="signupEmail"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="signupPhone">Phone:</label>
        <input
          type="number"
          name="signupPhone"
          id="signupPhone"
          defaultValue={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <Button variant="contained" type="submit" className={styles.fillButton}>
        Sign Up
      </Button>
    </form>
  );
}

function SignIn() {
  const [userName, setUserName] = useState("");
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ ...user, userName }));
    navigate("/");
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="loginName">Username:</label>
        <input
          type="text"
          name="loginName"
          id="loginName"
          defaultValue={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <Button variant="contained" type="submit" className={styles.fillButton}>
        Sign In
      </Button>
    </form>
  );
}

function Auth({ tab = "signin" }) {
  return !(tab === "signin" || tab === "signup") ? (
    <Navigate to="/account/signin" />
  ) : (
    <div className={styles.auth}>
      <div className={styles.authTabs}>
        <Link
          className={tab === "signin" ? styles.currTab : ""}
          to="/account/signin"
        >
          Sign In
        </Link>
        |
        <Link
          className={tab === "signup" ? styles.currTab : ""}
          to="/account/signup"
        >
          Sign Up
        </Link>
      </div>

      <div>{tab === "signin" ? <SignIn /> : <SignUp />}</div>
    </div>
  );
}

Auth.propTypes = {
  tab: PropTypes.string,
};

function Details() {
  const { userName, email, phone } = useSelector((state) => state.user.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const none = <span style={{ fontStyle: "italic" }}>None</span>;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/account/signin");
  };

  const handleReset = () => {
    dispatch(logout());
    localStorage.clear();
    location.assign(location.origin);
  };

  useEffect(() => {
    !userName && navigate("/account/signup");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  return (
    <div className={styles.details}>
      <h1 className={styles.heading}>Account</h1>

      <div className={styles.field}>
        <div>Username</div>
        <div
          contentEditable
          onBlur={(e) => dispatch(setUserName(e.target.textContent))}
        >
          {userName || none}
        </div>
      </div>

      <div className={styles.field}>
        <div>Email</div>
        <div
          contentEditable
          onBlur={(e) => dispatch(setEmail(e.target.textContent))}
        >
          {email || none}
        </div>
      </div>

      <div className={styles.field}>
        <div>Phone number</div>
        <div
          contentEditable
          onBlur={(e) => dispatch(setPhone(e.target.textContent))}
        >
          {phone || none}
        </div>
      </div>

      <Button
        variant="outlined"
        onClick={handleLogout}
        className={styles.logout}
      >
        Log out
      </Button>
      <Button
        variant="contained"
        onClick={handleReset}
        className={styles.reset}
      >
        Reset Data
      </Button>
    </div>
  );
}
