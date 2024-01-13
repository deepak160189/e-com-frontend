import {
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

function NavbarLinks () {
    return(        
<Nav>
<NavItem>
  <NavLink
    active
    href="#"
  >
    Link
  </NavLink>
</NavItem>
<NavItem>
  <NavLink href="#">
    Another Link
  </NavLink>
</NavItem>
<NavItem>
  <NavLink
    disabled
    href="#"
  >
    Disabled Link
  </NavLink>
</NavItem>
</Nav>
    )
}

export default NavbarLinks