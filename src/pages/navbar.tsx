import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faCircleUser,
    faCar,
  } from "@fortawesome/free-solid-svg-icons";
import * as React from 'react';
import Link from 'next/link';

interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <div className="navbar">
        <Link href="/">
        <FontAwesomeIcon className="faIndex" icon={faCar} />
        </Link>
        <div className="navLeft">
          {/* <div className="cart">
          <FontAwesomeIcon className="faIndex" icon={faCartShopping} />
          <span>0</span>
          </div> */}
          <div className='profile'>
          <FontAwesomeIcon className="faIndex" icon={faCircleUser} />
          <Link href='/login' className='profileLink'>Log in</Link>
          <Link href='/register' className='profileLink'>Register</Link>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
