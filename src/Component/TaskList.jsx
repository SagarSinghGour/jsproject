import React, { useState } from 'react';

function TaskList() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      {/* Left Section */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* ... (rest of the left section code) ... */}

        <input
          type="date" // Changed to type="date"
          value={startDate} 
          onChange={handleStartDateChange}
          style={{ 
            padding: '5px', 
            margin: '0 5px', 
            border: '1px solid #ccc', 
            borderRadius: '4px' 
          }} 
        />
        <span style={{ margin: '0 5px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
            
          </svg>
        </span>
        <input
          type="date" // Changed to type="date"
          value={endDate}
          onChange={handleEndDateChange}
          style={{ 
            padding: '5px', 
            margin: '0 5px', 
            border: '1px solid #ccc', 
            borderRadius: '4px' 
          }} 
        />
        <span style={{ margin: '0 5px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
            
          </svg>
        </span>

        {/* ... (rest of the code) ... */}
      </div>
    </div>
  );
}

export default TaskList;