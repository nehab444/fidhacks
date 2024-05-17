import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FilterBar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setFilters({
      ...filters,
      schedule: date,
    });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <input
        type="number"
        name="numKids"
        placeholder="Number of Kids"
        value={filters.numKids}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-lg mr-2"
      />
      <input
        type="number"
        name="budget"
        placeholder="Budget"
        value={filters.budget}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-lg mr-2"
      />
 
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={filters.location}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-lg mr-2"
      />
      <DatePicker
        selected={filters.schedule}
        onChange={handleDateChange}
        className="p-2 border border-gray-300 rounded-lg"
        placeholderText="Schedule"
      />
    </div>
  );
};

export default FilterBar;
