import "../css/Home.css"
import {FaRegNewspaper} from "react-icons/fa6"
import { CgProfile } from "react-icons/cg";
import { BsClipboard2Data } from "react-icons/bs";

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
                    <div className="IconBg">
                        <CgProfile className="Icon" size={90}/>
                    </div>
                        <label>Proflie</label>
                    </div>
                    <div className="card">
                        <div className="IconBg">
                            <BsClipboard2Data className="Icon" size={90}/>
                        </div>
                        <label>Dashboard</label>
                    </div>
                    <div className="card">
                        <div className="IconBg">
                            <FaRegNewspaper className="Icon" size={90}/>
                        </div>
                        <label>Blog</label>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Home; 