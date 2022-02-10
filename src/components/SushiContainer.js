import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis, onSushiClick, moneyLeft }) {
  const [moreClickCount, setMoreClickCount] = useState(0)
  const fourSushiArr = sushis.slice(moreClickCount, moreClickCount + 4)

  function handleMoreClick() {
    setMoreClickCount(() => moreClickCount + 4)
  }

  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {fourSushiArr.map(sushi => {
        return <Sushi key={sushi.id} 
          sushi={sushi}
          onSushiClick={onSushiClick}
          moneyLeft={moneyLeft} />
      })}
      <MoreButton onMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
