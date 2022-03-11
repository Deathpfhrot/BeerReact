import { Link } from "react-router-dom"

const Home = () =>{
    return(
        <div className="divHome">
            <figure>
                <img src="/img/christin-hume.png" alt="hume" />
                <Link to={'/gallery'}>
                    <figcaption><h2>All Beers</h2></figcaption>
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam mollitia aspernatur illum dolores doloribus libero odio corrupti qui? Vel.</p>
            </figure>

            <figure>
                <img src="/img/proriat.png" alt="proriat" />
                <Link to={'/randomBeer'}>
                    <figcaption><h2>Random Beer</h2></figcaption>
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam mollitia aspernatur illum dolores doloribus libero odio corrupti qui? Vel.</p>
            </figure>
        </div>
    )
}

export default Home