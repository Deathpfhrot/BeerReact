import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Navigation from "./navigation";
import BackArrow from '../BackArrow.png'


const Random = () =>{

    const [randome, setRandome] = useState([])

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response => response.json())
        .then(json => {
            setRandome(json)
            console.log(json)
            console.log(randome);
        })
    }, []);

    return(
        <div className="itemDiv">
            <img src={randome.image_url} alt="" />
            <h1>{randome.name}</h1>
            <h2>{randome.tagline}</h2>
            <p>First Brewed: {randome.first_brewed}</p>
            <p>Attenuation level: {randome.attenuation_level}</p>


            {console.log(randome.name)}

            <Link to="/">
                <img src={BackArrow} alt="Arrow" />
            </Link>

            <Navigation />
        </div>
    )
}

export default Random