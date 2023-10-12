import { NavLink } from "react-router-dom"



export const Header = () => {
    return <div>
        <NavLink to='/goit-react-hw-05-movies/'>Home</NavLink>
        <NavLink to='/goit-react-hw-05-movies/Movies'>Search</NavLink>
    </div>
}