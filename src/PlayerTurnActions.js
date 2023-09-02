import React from 'react';
// import ActionComponent from './ActionComponent';
// import BonusActionComponent from './BonusActionComponent';


const ActionComponent = ({ action, onActionSelect }) => {
  return (
    <button onClick={() => onActionSelect(action)}>
      {action.name} - {action.description}
    </button>
  );
};

const BonusActionComponent = ({ bonusAction, onBonusActionSelect }) => {
  return (
    <button onClick={() => onBonusActionSelect(bonusAction)}>
      {bonusAction.name} - {bonusAction.description}
    </button>
  );
};

const PlayerTurnActions = ({ actions, bonusActions, onSelectAction, onSelectBonusAction }) => {
  return (
    <div>
      <h2>Actions:</h2>
      {actions.map(action => (
        <ActionComponent key={action.id} action={action} onActionSelect={onSelectAction} />
      ))}

      <h2>Bonus Actions:</h2>
      {bonusActions.map(bonusAction => (
        <BonusActionComponent
          key={bonusAction.id}
          bonusAction={bonusAction}
          onBonusActionSelect={onSelectBonusAction}
        />
      ))}
    </div>
  );
};

export default PlayerTurnActions;