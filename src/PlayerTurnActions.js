import React from 'react';
import ActionComponent from './ActionComponent';
import BonusActionComponent from './BonusActionComponent';

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