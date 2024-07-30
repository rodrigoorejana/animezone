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
      <Nav className="ml-auto best-category" navbar>
      <Link href="../category/Action" passHref><span className="navbar-brand">Action</span></Link>
      <Link href="../category/Adventure" passHref><span className="navbar-brand">Adventure</span></Link>
      <Link href="../category/Drama" passHref><span className="navbar-brand">Drama</span></Link>
      <Link href="../category/Romance" passHref><span className="navbar-brand">Romance</span></Link>
      </Nav>
       
      
      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Categorys
          </DropdownToggle>
          <DropdownMenu align="end" className={styles.dropdownMenuCustom}>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="../category/Action" passHref>
                <span className={styles.dropdownLink}>Action</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="/category/Adventure" passHref>
                <span className={styles.dropdownLink}>Adventure</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="/category/Comedy" passHref>
                <span className={styles.dropdownLink}>Comedy</span>
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
                <span className={styles.dropdownLink}>Fantasy</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="/category/Music" passHref>
                <span className={styles.dropdownLink}>Music</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="/category/Sciencefiction" passHref>
                <span className={styles.dropdownLink}>Fiction</span>
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
                <span className={styles.dropdownLink}>Sports</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItemCustom}>
              <Link href="/category/Supernatural" passHref>
                <span className={styles.dropdownLink}>Supernatural</span>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
};

export default Header;
