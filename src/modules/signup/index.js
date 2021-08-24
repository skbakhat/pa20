



import './style.css'



function Signup(){

    return(
        <>
        <button id="loginBtn">SignUp</button><br/>
        <form>
        <div className="MainLogin">
        <lable>First Name</lable><br/>
        <input type="text" required="required"></input><br />
        <lable>Last Name</lable><br/>
        <input type="text" required="required"></input><br />
        <lable>Email address</lable><br/>
        <input type="text" required="required"></input><br />
        <lable>Password</lable><br />
        <input type="password" required="required"></input><br/>
        <div className="loginEnd">
            <button type="submit" id="EndBtn">Signup</button>
            
            <a href=".">Lost Your Password ?</a>
        </div>
        </div>
        </form>
        </>
    )
}

export default Signup;