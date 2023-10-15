import { NavLink, useLocation } from "react-router-dom"
import { StyledHeader } from "./Header.styled"



export const Header = () => {
    const {pathname} = useLocation()
    return <StyledHeader>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Movies' className={pathname.includes("movie_details") && "active"}>Search</NavLink>
    </StyledHeader>
}