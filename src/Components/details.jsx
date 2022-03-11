import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import Navigation from "./navigation";

const Details = () =>{

    let apiId = useParams("_id")
    console.log(apiId._id);

    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${apiId._id}`)
            .then(response => response.json())
            .then(json => {
                setItem(json)
                console.log(json)
            })
    }, []);

    return(
        <div class="itemDiv">
            <img src={item.image_url} alt="" />
            <h1>{item.name}</h1>
            <h2>{item.tagline}</h2>
            <p>First Brewed: {item.first_brewed}</p>
            <p>Attenuation level: {item.attenuation_level}</p>


            {console.log(item.name)}


            <i class="fas fa-arrow-alt-left"><Link to="/">Back</Link></i>
        <Navigation />

        </div>
    )
}

export default Details