import { Link } from "react-router-dom";

export default function Navigation() {
    return(
        <div className="navDiv">
            <Link to="/">            
                <img src="/img/BeerLogo.png" alt="beer" />
            </Link>
        </div>
    )
}