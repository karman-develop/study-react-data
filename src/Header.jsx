import React from "react";

const Header = ({ handleTab }) => {
  const handleClick = (text) => {
    handleTab(text);
  };

  return (
    <>
      <header>
        <ul>
          <li onClick={() => handleClick("list")}>リスト</li>
          <li onClick={() => handleClick("form")}>フォーム</li>
        </ul>
        <hr />
      </header>
    </>
  );
};

export default Header;
