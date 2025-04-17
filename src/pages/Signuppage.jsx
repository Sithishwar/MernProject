import './Signuppage.css'

function Signuppage()
{
    return(
        <>
       
        <h1>Sign up</h1>
        <div>
        <label for="email-input" >Email</label>
        <input id="email-input" placeholder='email' />
        <label for="name-input" >Username</label>
        <input id="name-input " placeholder='Username'/>
        <label for="pass-input" >Password</label>
        <input id="pass-input" placeholder='Password'/>
        
        </div>
        </>
    )
}
export default Signuppage;