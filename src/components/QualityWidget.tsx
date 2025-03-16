
import React from 'react';
import QualityAssurance from './QualityAssurance';

const QualityWidget = () => {
  return (
    <div className="flex flex-col space-y-4">
      <QualityAssurance />
      {/* Add more quality-related components here if needed */}
    </div>
  );
};

export default QualityWidget;
