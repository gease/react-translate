import React from "react";
import Link from "./Link";

const Header = () => {
    return (
        <div className="menu secondary ui pointing">
            <Link href="/" className="item" >
                Accordion
            </Link>
            <Link href="/dropdown" className="item">
                Dropdown
            </Link>
            <Link href="/search" className="item">
                Search
            </Link>
            <Link href="/translate" className="item">
                Translate
            </Link>
        </div>
    );
}

export default Header;