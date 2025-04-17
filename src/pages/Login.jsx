import { useState } from "react";
import styles from "./Login.module.css"; // ✅ Correct import

function Login() {
  const [Mail,setMail]=useState("");
  const [Password,setPassword]=useState("");
  const [Merror,setMerror]=useState("");
  const [Perror,setPerror]=useState("");

 const handlemail=(e)=>
 {
  setMail(e.target.value);
 }
 const handlepass=(e)=>{
  setPassword(e.target.value);
 }
  const inputchecker=()=>
  {
    
  const regmail=/^\S+@+\S+.\S+$/;
const  regpass=/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{6,}$/
if (!regmail.test(Mail)) {
  setMerror("❌ Email must be in abc@def.xyz format");
} else {
  setMerror(""); // Clear error
}

if (!regpass.test(Password)) {
  setPerror("❌ Password must contain 1 CAPS, 1 SMALL, 1 DIGIT, 1 SPECIAL CHARACTER, and at least 6 characters.");
} else {
  setPerror(""); // Clear error
}


    
  }
  return (
    

    <>
      <div className={styles.loginHeader}><h1>Login Form</h1></div> {/* Use className */}
      <div className={styles.loginContainer}>
        <label className={styles.labelText} htmlFor="username-input">Email</label>
        <input placeholder="Email :" type="text" id="username-input" className={styles.inputField} onChange={(e)=>handlemail(e)}/><br/>
        { Merror && <p style={{color: Merror.includes("must")?'red':'green'}}>{Merror}</p>}

        <label className={styles.labelText} htmlFor="password-input">Password</label>
        <input type="password" placeholder="Enter password" id="password-input" className={styles.inputField} onChange={(e)=>handlepass(e)}/><br/>
        {Perror && <p style={{color: Perror.includes("must")?'red':'green'}}>{Perror}</p>}
        <label className={styles.forgotPassword}>Forget password</label><br/>

        <button id="Loginbtn" className={styles.loginButton} onClick={inputchecker}>Login</button>
        <button  className={styles.signupButton}>Sign Up</button>
      </div>
    </>
  );
}

export default Login;
