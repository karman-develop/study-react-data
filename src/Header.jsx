import React from "react";

const Header = ({ handleList }) => {
  const handleClick = (text) => {
    handleList(text);
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
