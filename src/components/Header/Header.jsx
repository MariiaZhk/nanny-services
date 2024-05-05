import { NavLink } from "react-router-dom";
import { HeaderSection } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderSection>
      <div>
        <h2>Nanny.Services</h2>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="nannies">Nannies</NavLink>
        <NavLink to="favorites">Favorites</NavLink>
      </div>
      <div>
        <button>Log In</button>
        <button>Registration</button>
      </div>
    </HeaderSection>
  );
};
