import React from "react";

const List = ({ list, handleDel }) => {
  const getIndex = (index) => {
    handleDel(index);
  };

  return (
    <>
      <h2>リスト</h2>
      <ul>
        {list.map((item, index) => (
          <li key={item} onClick={() => getIndex(index)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
