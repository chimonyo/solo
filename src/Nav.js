import "./index.css"

function Nav(props){
    return (
        <nav className="navbar">
            <div className="navItems">
            <img src="./image/nav.svg" alt="" className="navIcon" />
            <p className="navText" >my travel journal. </p>
            </div>
        </nav> 
    )
}

export default Nav