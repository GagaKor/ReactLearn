import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">
          <img
            src={require('../assets/images/logos/logo.png')}
            width={100}
            alt="logo"
            style={{ justifyContent: 'center' }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="position-absolute top-100">
          <Nav navbar className="hstack gap-3">
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/board">Note</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => {
                  window.open('https://github.com/Gagakor');
                }}
              >
                GitHub
              </NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
