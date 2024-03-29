import "../css/Home.css"

function Home(){
    return(
        <body className="home-body">
            <div className="home-navbar">
                <div>Profile</div>
                <div>DashBoard</div>
                <div>Blog</div>
            </div>
            <div className="home-container">
                <h1 className="home-title">EMER Management</h1>
                <div className="card-list">
                    <div className="card">
                        <label>Proflie</label>
                    </div>
                    <div className="card">
                        <label>Dashboard</label>
                    </div>
                    <div className="card">
                        <label>Blog</label>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Home; 