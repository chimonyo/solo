import "./index.css"

function Travels(props){
return (
    <div className="card">
        <img src={`${props.img}`} alt="" className="image"/>
        <div className="details">
            <div className="line1">
                <img src={`./image/${props.locationIcon}`} alt="" className="locationIcon" />
                <p className="location">{props.location}</p>
                <a href={props.link} className="link" target="_blank" rel="noreferrer">View on Google Maps</a>
            </div>
            <h2>{props.title}</h2>
            <p className="dates">{props.startDate}-{props.endDate}</p>
            <p className="info">{props.description}</p>    
        </div>
    </div> 
)
}

export default Travels