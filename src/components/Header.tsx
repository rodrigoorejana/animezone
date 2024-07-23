// src/components/Header.tsx

import Link from "next/link";
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, UncontrolledDropdown } from "reactstrap";
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark expand="md">
      <Link href="/" passHref>
        <span className="navbar-brand">ANIMEZONE</span>
      </Link>
      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Categorias
          </DropdownToggle>
          <DropdownMenu align="end" className={styles.dropdownMenuCustom}>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="../category/Action" passHref>
                <span className={styles.dropdownLink}>Ação</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="/category/Adventure" passHref>
                <span className={styles.dropdownLink}>Aventura</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="/category/Comedy" passHref>
                <span className={styles.dropdownLink}>Comédia</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="/category/Romance" passHref>
                <span className={styles.dropdownLink}>Romance</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="/category/Drama" passHref>
                <span className={styles.dropdownLink}>Drama</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="/category/Fantasy" passHref>
                <span className={styles.dropdownLink}>Fantasia</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="/category/Music" passHref>
                <span className={styles.dropdownLink}>Música</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="/category/Sciencefiction" passHref>
                <span className={styles.dropdownLink}>Ficção</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="/category/Seinen" passHref>
                <span className={styles.dropdownLink}>Seinen</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="/category/Shoujo" passHref>
                <span className={styles.dropdownLink}>Shoujo</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="/category/Suspense" passHref>
                <span className={styles.dropdownLink}>Suspense</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="/category/Sports" passHref>
                <span className={styles.dropdownLink}>Esportes</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="/category/Supernatural" passHref>
                <span className={styles.dropdownLink}>Sobrenatural</span>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
};

export default Header;
