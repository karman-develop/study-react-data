import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import List from "./List";

function App() {
  const [tab, setTab] = useState("list");

  const handleList = (text) => {
    setTab(text);
  };

  return (
    <>
      <Header handleList={handleList} />
      {tab === "list" ? <List /> : <Form />}
    </>
  );
}

export default App;
