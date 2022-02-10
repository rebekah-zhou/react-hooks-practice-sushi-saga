import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [sushiEaten, setSushiEaten] = useState([])
  const [moneyLeft, setMoneyLeft] = useState(100)

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(sushis => setSushis(() => sushis))
  }, [])

  function handleSushiClick(newSushi={}) {
    setSushiEaten([...sushiEaten, newSushi])
    setMoneyLeft(() => moneyLeft - newSushi.price)
  }

  function handleAddMoneySubmit(moneyAdded) {
    setMoneyLeft(() => moneyLeft + Number(moneyAdded))
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} 
        onSushiClick={handleSushiClick}
        moneyLeft={moneyLeft} />
      <Table plates={sushiEaten} 
        moneyLeft={moneyLeft}
        onAddMoneySubmit={handleAddMoneySubmit} />
    </div>
  );
}

export default App;
