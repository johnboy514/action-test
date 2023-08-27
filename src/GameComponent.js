import React, { useState } from 'react';
import PlayerTurnActions from './PlayerTurnActions';

const GameComponent = () => {
  const [selectedAction, setSelectedAction] = useState(null);
  const [selectedBonusAction, setSelectedBonusAction] = useState(null);

  const handleActionSelect = (action) => {
    setSelectedAction(action);
    // Perform the logic associated with the selected action
  };

  const handleBonusActionSelect = (bonusAction) => {
    setSelectedBonusAction(bonusAction);
    // Perform the logic associated with the selected bonus action
  };

  const availableActions = [
    { id: 1, name: 'Attack', description: 'Perform a basic melee or ranged attack.' },
    { id: 2, name: 'Cast Spell', description: 'Cast a spell from your spellbook.' },
    { id: 3, name: 'Use Item', description: 'Use an item from your inventory.' },
    { id: 4, name: 'Hide', description: 'Attempt to hide from enemies.' },
    { id: 5, name: 'Disengage', description: 'Disengage from combat without provoking attacks of opportunity.' },
    { id: 6, name: 'Ready Action', description: 'Prepare to take a specific action in response to a trigger.' },
    { id: 7, name: 'Grapple', description: 'Attempt to grapple a target creature.' },
    { id: 8, name: 'Shove', description: 'Shove a creature to push them or knock them prone.' },
    { id: 9, name: 'Search', description: 'Thoroughly search an area for hidden items or secrets.' },
    { id: 10, name: 'Interact', description: 'Perform a minor interaction with an object or the environment.' },
    { id: 11, name: 'Throw', description: 'Throw an object that is close to you or from your inventory.' },
    // ... add more actions
  ];

  const availableBonusActions = [
    { id: 1, name: 'Dodge', description: 'Take the Dodge action to gain advantage on Dexterity saving throws.' },
    { id: 2, name: 'Dash', description: 'Use the Dash action to move double your speed.' },
    { id: 3, name: 'Use Item', description: 'Use the Use Item action to use an item in your inventory.' },
    // ... add more bonus actions
  ];

  return (
    <div>
      {/* Render game content here */}
      <PlayerTurnActions
        actions={availableActions}
        bonusActions={availableBonusActions}
        onSelectAction={handleActionSelect}
        onSelectBonusAction={handleBonusActionSelect}
      />
      {/* Render other game components */}
    </div>
  );
};

export default GameComponent;