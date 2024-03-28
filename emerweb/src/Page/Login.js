import "../css/Login.css"

function Login(){
    return(
        <div className="Login-container">
            <h1 className="login-title">Login</h1>
            <label className='title'>Email</label>
            <input placeholder="Email" className="input"/>
            <label className='title'>Password</label>
            <input placeholder="Password" className="input"/>
            <div className="button-container">
                <button className="button">Login</button>
            </div>
        </div>
    )
}

export default Login 