/* eslint-disable react/prop-types */
import { Link, useParams, Navigate } from "react-router-dom";
import Button from "../../components/button/Button";
import styles from "./account.module.scss";

function Account() {
  const { name } = useParams();
  return <div>
    {/* NavBar */}
    {name ? <Auth tab={name} /> : <Details />}
  </div>;
}

function SignUp() {
  return (
    <form action="#">
      <div>
        <label htmlFor="signupName">Name:</label>
        <input type="text" name="signupName" id="signupName" />
      </div>

      <div>
        <label htmlFor="signupEmail">Email:</label>
        <input type="email" name="signupEmail" id="signupEmail" />
      </div>

      <div>
        <label htmlFor="signupPassword">Password:</label>
        <input type="password" name="signupPassword" id="signupPassword" />
      </div>

      <div>
        <label htmlFor="signupPhone">Phone:</label>
        <input type="password" name="signupPhone" id="signupPhone" />
      </div>

      <div>
        <label htmlFor="signupAddress">Address:</label>
        <input type="password" name="signupAddress" id="signupAddress" />
      </div>

      <Button type="submit" text="Sign Up" fill />
    </form>
  );
}

function SignIn() {
  return (
    <form action="#">
      <div>
        <label htmlFor="loginEmail">Email:</label>
        <input type="email" name="loginEmail" id="loginEmail" />
      </div>

      <div>
        <label htmlFor="loginPassword">Password:</label>
        <input type="password" name="loginPassword" id="loginPassword" />
      </div>

      <Button type="submit" text="Sign In" fill />
    </form>
  );
}

function Auth({ tab = "signin" }) {
  return !(tab === "signin" || tab === "signup") ? <Navigate to={"/account/signin"} /> : (
    <div className={styles.auth}>
      <div className={styles.authTabs}>
        <Link className={tab === "signin" && styles.currTab} to="/account/signin">Sign In</Link>
        |
        <Link className={tab === "signup" && styles.currTab} to="/account/signup">Sign Up</Link>
      </div>

      <div>
        {tab === "signin" ? <SignIn /> : <SignUp /> }
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className={styles.details}>
      <h1 className={styles.heading}>Account</h1>

      <div className={styles.field}>
        <div>Name</div>
        <div>{"Name"}</div>
      </div>

      <div className={styles.field}>
        <div>Email</div>
        <div>{"Email"}</div>
      </div>

      <div className={styles.field}>
        <div>Phone number</div>
        <div>{"Phone"}</div>
      </div>

      <div className={styles.field}>
        <div>Address</div>
        <div>{"Address"}</div>
      </div>

      <Button text="Log out" fill />
    </div>
  );
}

export default Account;
