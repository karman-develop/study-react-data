import React, { useState } from "react";
import { data } from "./script/data";
import Header from "./Header";
import Form from "./Form";
import List from "./List";

function App() {
  const [tab, setTab] = useState("list");
  const [text, setText] = useState("");
  const [list, setList] = useState(data);

  const handleTab = (result) => {
    setTab(result);
  };

  const handleText = (result) => {
    setText(result);
  };

  const handleList = (result) => {
    setList([...data, result]);
    setTab("list");
    setText("");
  };

  const handleDel = (index) => {
    setList(list.toSpliced(index, 1));
  };

  return (
    <>
      <Header handleTab={handleTab} />
      {tab === "list" ? (
        <List list={list} handleDel={handleDel} title="リスト" />
      ) : (
        <Form
          text={text}
          handleText={handleText}
          handleList={handleList}
          title="フォーム"
        />
      )}
    </>
  );
}

export default App;
