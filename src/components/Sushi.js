import React, { useState } from "react";

function Sushi({ sushi, onSushiClick, moneyLeft }) {
  const {name, img_url, price} = sushi
  const [isEaten, setIsEaten] = useState(false)

  function handleSushiClick() {
    if (moneyLeft >= price && !isEaten) {
      setIsEaten(true)
      onSushiClick(sushi)
    } else if (isEaten) {
      console.log('You already ate this sushi!')
    } else {
      console.log('No more moneys :(')
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
