import React from 'react';
// import ActionComponent from './ActionComponent';
// import BonusActionComponent from './BonusActionComponent';


// const ActionComponent = ({ action, onActionSelect }) => {
//   return (
//     <button onClick={() => onActionSelect(action)}>
//       {action.name} - {action.description}
//     </button>
//   );
// };

// const BonusActionComponent = ({ bonusAction, onBonusActionSelect }) => {
//   return (
//     <button onClick={() => onBonusActionSelect(bonusAction)}>
//       {bonusAction.name} - {bonusAction.description}
//     </button>
//   );
// };

const PlayerTurnActions = ({ actions, bonusActions, onSelectAction, onSelectBonusAction }) => {
  return (
    <div>
      <h2>Actions</h2>
      <div>
        {actions.map((action) => (
          <button key={action.id} onClick={() => onSelectAction(action)}>
            {action.name}
          </button>
        ))}
      </div>

      <h2>Bonus Actions</h2>
      <div>
        {bonusActions.map((bonusAction) => (
          <button key={bonusAction.id} onClick={() => onSelectBonusAction(bonusAction)}>
            {bonusAction.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlayerTurnActions;