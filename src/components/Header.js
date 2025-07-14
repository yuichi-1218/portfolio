import React from "react";
// react-router-domからLinkとuseLocationをインポート
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const Header = () => {
  // 現在のURLパスを取得
  const location = useLocation();
  // ホームページにいるかどうかを判定
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { to: "scroll_title", label: "Home" },
    { to: "about", label: "About" },
    { to: "works", label: "works" },
    { to: "skill", label: "Skill" },
    { to: "others", label: "Others" },
  ];

  return (
    <header>
      <div className="container">
        <nav className="gnav">
          <ul className="gnav-list">
            {navLinks.map((link) => (
              <li className="gnav-item" key={link.to}>
                {isHomePage ? (
                  // ホームページにいる場合は、react-scrollのLinkを使う
                  <Scroll to={link.to} smooth={true} duration={600}>
                    {link.label}
                  </Scroll>
                ) : (
                  // 他のページにいる場合は、react-router-domのLinkを使う
                  // まずホームページに戻り、その後スクロールさせる
                  <Link to={`/#${link.to}`}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
