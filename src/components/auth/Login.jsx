import './login.css'
import OurButton from '../OurButton';

export default function Login() {
  function ulogin(user){

    alert(user)
  }


  return (
    <div>
      
      <h2>Login</h2>
          
      <form className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
          />
        </div>
 
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input  
            id="password" type="password" name="password"/>
        </div>
      <p className="form-actions">
          <OurButton clickFunction={()=>ulogin('Sara')}>Login</OurButton>
      </p>
      </form>
 
  
    </div>
    
  );
}