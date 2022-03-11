import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Navigation from "./navigation"

const Gallery = () =>{

    const [gal, setGal] = useState([])

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => response.json())
        .then(json => {
            setGal(json)
            console.log(json)
            console.log(gal);

        })    
    }, []);

    return(
        <div class="galleryUpperDiv">
        {gal.map((ele, i) =>{

            return(
            <section key={i} className="galleryPics">
                <article>
                    <img src={ele.image_url} alt="" />
                </article>
                <article>
                    <h1>{ele.name}</h1>
                    <h2>{ele.tagline}</h2>
                    <p>Created by: {ele.name}</p>
                    <Link to={`/details/${ele._id}`}><button>Details</button></Link>
                </article>
            </section>
            )
        })}

        <Navigation />
        </div>

    )
}

export default Gallery