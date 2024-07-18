import location from "../imgs/location.png"

export default
function Card(props) {
    console.log(props)
    return(
        <div className="travelCard">
        <img src={props.data.img} alt="" className="cardPhoto"/>
        <div className="travelData">
           <div className="locationData">
           <img src={location} />
           <p>{props.data.location}</p>
           <a href={props.data.googleMaps}>View on Gooogle Maps</a>
           </div>
            <h2>{props.data.tittle}</h2>
            <strong> {props.data.startDate} - {props.data.endDate} </strong>
            <p>{props.data.description}</p>
        </div>
        </div>

 
    )
}