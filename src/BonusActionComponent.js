import React from 'react';

const BonusActionComponent = ({ bonusAction, onBonusActionSelect }) => {
  return (
    <button onClick={() => onBonusActionSelect(bonusAction)}>
      {bonusAction.name} - {bonusAction.description}
    </button>
  );
};

export default BonusActionComponent;