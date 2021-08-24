
import './style.css'



function Login(){

    return(
        <>
        <button id="loginBtn">Login</button><br/>
        <div className="MainLogin">
        
        <lable>Username or email address</lable><br/>
        <input type="text"></input><br />
        <lable>Password</lable><br />
        <input type="password"></input><br/>
        <div className="loginEnd">
            <button id="EndBtn">Login</button>
            
            <a href=".">Lost Your Password ?</a>
        </div>
        </div>
        </>
    )
}

export default Login;