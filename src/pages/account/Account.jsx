/* eslint-disable react/prop-types */
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import styles from "./account.module.scss";

import { login, logout } from "../../_redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

// function Test() {
//   const dispatch = useDispatch();
//   const userName = useSelector(state => state.user.value.userName)

//   return (
//     <div>
//       <p>{userName}</p>
//       <button onClick={() => dispatch(login({ userName: "value" }))}>
//         Click me
//       </button>
//     </div>
//   );
// }

function Account() {
  const { name } = useParams();
  return <div>{name ? <Auth tab={name} /> : <Details />}</div>;
}

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    userName && dispatch(login({ userName, email, phone, address }));
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

      <div>
        <label htmlFor="signupAddress">Address:</label>
        <input
          type="text"
          name="signupAddress"
          id="signupAddress"
          defaultValue={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <Button type="submit" text="Sign Up" fill />
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

      <Button type="submit" text="Sign In" fill />
    </form>
  );
}

function Auth({ tab = "signin" }) {
  return !(tab === "signin" || tab === "signup") ? (
    <Navigate to={"/account/signin"} />
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

function Details() {
  const { userName, email, phone, address } = useSelector(
    (state) => state.user.value
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const none = "None";

  const handleLogout = () => {
    dispatch(logout());
    navigate("/account/signin");
  };

  const handleReset = () => {
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
        <div>{userName || none}</div>
      </div>

      <div className={styles.field}>
        <div>Email</div>
        <div>{email || none}</div>
      </div>

      <div className={styles.field}>
        <div>Phone number</div>
        <div>{phone || none}</div>
      </div>

      <div className={styles.field}>
        <div>Address</div>
        <div>{address || none}</div>
      </div>

      <Button
        text="Log out"
        fill
        onClick={handleLogout}
        className={styles.logout}
      />
      <Button
        text="Reset Data"
        className={styles.reset}
        onClick={handleReset}
      />
    </div>
  );
}

export default Account;
