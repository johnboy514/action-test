import React from 'react';

const ActionComponent = ({ action, onActionSelect }) => {
  return (
    <button onClick={() => onActionSelect(action)}>
      {action.name} - {action.description}
    </button>
  );
};

export default ActionComponent;