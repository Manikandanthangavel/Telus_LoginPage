import React, { Component } from 'react'
import './myStyles.css'

class Login extends Component {
    render() {
        return(
<div>
<section className="loginbox">
        <div className="container">
            <h1 className='kk'>MY website</h1>
        </div>
       
        <div className="container">
            <div className='center-box'>
            <h2>Log in</h2>
            <p>Enter your existing first branch merge check account details here</p>
            <form className='form'>
                <div className='as'>
                <p> Email / Username</p>
                <input type='text' className='username'>
                </input>
                </div>
                <div className='as'>
                 <p>Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <a href="https://www.telus.com" className='color-purple'>Forgot?
               </a>
               </p>
               <div className="form-input">
				<span className='icon'><a href='#'><button className="btn"><i class="fa"></i>show</button></a></span>   
                <input type="password" className="password"></input>        
                </div> 
            </div>
            <br></br>
            <div className="checkbox">
			   <input id="remember-me-checkbox" type="checkbox"  tabindex="4"></input>
               <label for="remember-me-checkbox">Remember me </label>
                </div>
			<br></br>
            <button className="btn btn-success" type="submit" value="Next">Next</button>
            <div>
                <br></br>
            <p>Having trouble logging in?
               <a href="https://www.telus.com"
                className='yes'>Click here to log in with other account details</a>
           </p> </div>
           <br></br>
           <p className="ar">New to TELUS? <br></br><br></br>
                   <button className="btn btn-success">Register now  </button>
             </p>
            </form>
        </div>
       </div>
    </section>
    <div className="hp">
           <a href="#" className="nh">Need help ? Let’s Chat! <i className="fa fa-angle-right" aria-hidden="true"></i></a>
            </div>
</div>
        );
    }
}

export default Login;
