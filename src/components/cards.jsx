import Card from "./card";
import traveldata from "../traveldata";

export default

function Cards() {
    // const cardData = {
    //     id:1,
    //     tittle:"Monserrate",
    //     location:"Colombia",
    //     googleMaps:"https://maps.app.goo.gl/hBsKzsUsLu7WY4EW9",
    //     startDate:"2022",
    //     endDate: "2022",
    //     description:"Mountain in the center of the city with a church & shrine, popular with pilgrims & tourists.",
    //     img:"./src/imgs/colombia.jpeg" 
    // }

    const tabelCards = traveldata.map((inp) => {
        return  <Card data={inp} />
    })
    return(


        tabelCards
      
    )
}