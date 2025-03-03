import { HeaderContainer } from "./styles";
import Logo from "../../assets/Logo.svg"
import { Scroll, Timer } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Header(){
  return(
    <HeaderContainer>
      <img src={Logo}  />
      <nav>
        <NavLink to="/" title="Timer">
            <Timer size={24}/>
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}