import React from 'react';

const MadeForBadge = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg px-3 py-2 flex items-end gap-2 border border-gray-200">
        <span 
          className="text-xs text-gray-600"
          style={{
            fontFamily: 'DM Sans',
            fontWeight: '400'
          }}
        >
          Made for
        </span>
        <img 
          src="/assets/images/jkcement-logo.png" 
          alt="JK Cement Logo" 
          className="h-5 w-auto"
        />
      </div>
    </div>
  );
};

export default MadeForBadge;
