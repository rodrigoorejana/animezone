// src/components/Header.tsx

import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/" passHref className="navbar-brand">
          ANIMEZONE
      </Link>
      <Nav className="flex-row" navbar>
        <Link href="/products" className="nav-link me-2">
            Categorias
        </Link>
      </Nav>
    </Navbar>
  )
}

export default Header