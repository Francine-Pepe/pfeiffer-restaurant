import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import NavbarMobile from "./NavbarMobile";

function Navbar(props: any) {
  const { data } = props;

  return (
    <nav className="navlinks-container">
      <div className="navlinks-content">
        {data.map((item: { name: string, link: string}, index: any) => (
        <ul key={index}>
          <li>
            <NavLink
              to={item.link}>
                {item.name === "" ? (
                  <Logo />
                ) : item.name
                
              }
              
            </NavLink>
          </li>
        </ul>
      ))}
      </div>
      <div className="navbar-mobile">
        <NavbarMobile />

      </div>
      
      
    </nav>
  );
}

export default Navbar;