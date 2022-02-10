import React, { useState } from "react";

function Table({ plates = [], moneyLeft, onAddMoneySubmit }) {
  // renders an empty plate for every element in the array
  const [showForm, setShowForm] = useState(false)
  const [moneyAdded, setMoneyAdded] = useState(0)


  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  function handleMoreMoneyButtonClick() {
    setShowForm(() => !showForm)
  }

  function handleAddMoneySubmit(e) {
    e.preventDefault()
    onAddMoneySubmit(moneyAdded)
  }

  function handleAddMoneyChange(e) {
    setMoneyAdded(e.target.value)
  }

  return (
    <>
      <h1 className="remaining">
        You have: ${moneyLeft} remaining!
      </h1>
      <div style={{'paddingLeft': '15px'}}>
        {showForm ?
          <form onSubmit={handleAddMoneySubmit} >
            <label>How much do you want to spend?</label>
            <input type="number"
              onChange={handleAddMoneyChange}
              placeholder='Enter amt here...'/>
            <button type="submit">Add da moneys!</button>
          </form>
          :<button onClick={handleMoreMoneyButtonClick}>
          I have more money!
          </button>}
      </div>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
