import React from "react";

const Form = ({ text, handleText, handleList }) => {
  const handleChange = (e) => {
    handleText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleList(text);
  };

  return (
    <>
      <h2>フォーム</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={text} />
          <br />
          <button>追加</button>
        </form>
      </div>
    </>
  );
};

export default Form;
