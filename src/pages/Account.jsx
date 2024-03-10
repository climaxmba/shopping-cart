import Button from "../components/Button";

function SignUp() {
  return <form action="#">
    <div>
      <label htmlFor="signupName">Name:</label>
      <input type="text" name="signupName" id="signupName" />
    </div>
    
    <div>
      <label htmlFor="signupEmail">Email</label>
      <input type="email" name="signupEmail" id="signupEmail" />
    </div>
    
    <div>
      <label htmlFor="signupPassword">Password</label>
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
    
    <Button type="submit" text="Sign Up" />
  </form>
}

function LogIn() {
  return <form action="#">
    <div>
      <label htmlFor="loginEmail">Email:</label>
      <input type="email" name="loginEmail" id="loginEmail" />
    </div>
    
    <div>
      <label htmlFor="loginPassword">Password:</label>
      <input type="password" name="loginPassword" id="loginPassword" />
    </div>

    <Button type="submit" text="Log In" />
  </form>
}

// function Auth() {
//   return <div>
//     <div>
//       <span>Sign In</span>
//       <span>Sign Up</span>
//     </div>

//     <div>
//       <SignUp />
//       <LogIn />
//     </div>
//   </div>
// }

function Account() {
  return (
    <div>
      <h1>Account</h1>

      <div>
        <div>Name</div>
        <div>{"Name"}</div>
      </div>

      <div>
        <div>Email</div>
        <div>{"Email"}</div>
      </div>

      <div>
        <div>Phone number</div>
        <div>{"Phone"}</div>
      </div>

      <div>
        <div>Address</div>
        <div>{"Address"}</div>
      </div>
    </div>
  );
}

export default Account;
