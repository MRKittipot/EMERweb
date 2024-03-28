import "../css/Login.css"

function Login(){
    return(
        <div className="Login-container">
            <h1 className="login-title">Login</h1>
            <p className='title'>Email</p>
            <input placeholder="Email" className="input"/>
            <p className='title'>Password</p>
            <input placeholder="Password" className="input"/>
            <div className="button-container">
                <button className="button">Login</button>
            </div>
        </div>
    )
}

export default Login 