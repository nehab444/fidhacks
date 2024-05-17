"use client"

import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import DaycareList from '../daycare-list/page';

const Home = () => {
  const [filters, setFilters] = useState({
    numKids: '',
    minPrice: '',
    maxPrice: '',
  });

  const daycares = [
    { id: 1, name: 'Happy Kids Daycare', numKids: 2, price: 300, location: 'Apex', availableDates: ['2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23','2024-05-24', '2024-05-25', '2024-05-26','2024-05-27','2024-05-28','2024-05-29','2024-05-30','2024-05-31'] },
    { id: 2, name: 'Little Stars Daycare', numKids: 3, price: 500, location: 'Apex', availableDates: ['2024-05-23', '2024-05-24'] },
    { id: 3, name: 'Bright Future Daycare', numKids: 3, price: 400, location: 'Raleigh', availableDates: ['2024-05-25', '2024-05-26'] },
    { id: 4, name: 'Sunshine Daycare', numKids: 4, price: 350, location: 'Raleigh', availableDates: ['2024-05-27', '2024-05-28'] },
    { id: 5, name: 'Rainbow Daycare', numKids: 1, price: 450, location: 'Chapel Hill', availableDates: ['2024-05-29', '2024-05-30'] },
    { id: 6, name: 'Tiny Tots Daycare', numKids: 2, price: 200, location: 'Chapel Hill', availableDates: ['2024-05-31', '2024-06-01'] },
    { id: 7, name: 'Giggles Daycare', numKids: 3, price: 380,  location: 'Durham', availableDates: ['2024-06-02', '2024-06-03'] },
    { id: 8, name: 'Little Sprouts Daycare', numKids: 2, price: 420, location: 'Durham', availableDates: ['2024-06-04', '2024-06-05'] },
    { id: 9, name: 'Bright Minds Daycare', numKids: 1, price: 390, location: 'Chapel Hill', availableDates: ['2024-06-06', '2024-06-07'] },
    { id: 10, name: 'Kiddie Cove Daycare', numKids: 1, price: 340, location: 'Raleigh', availableDates: ['2024-06-08', '2024-06-09'] },
    { id: 11, name: 'Happy Hearts Daycare', numKids: 30, price: 500, location: 'Durham', availableDates: ['2024-06-10', '2024-06-11'] },
    { id: 12, name: 'Sunny Side Daycare', numKids: 1, price: 310, location: 'Apex', availableDates: ['2024-06-12', '2024-06-13'] },
    { id: 13, name: 'Rainbow Bright Daycare', numKids: 2, price: 460, location: 'Chapel Hill', availableDates: ['2024-06-14', '2024-06-15'] },
    { id: 14, name: 'Little Learners Daycare', numKids: 3, price: 220, location: 'Chapel Hill', availableDates: ['2024-06-16', '2024-06-17'] },
    { id: 15, name: 'Growing Minds Daycare', numKids: 3, price: 370, location: 'Raleigh', availableDates: ['2024-06-18', '2024-06-19'] },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <FilterBar filters={filters} setFilters={setFilters} />
      <DaycareList daycares={daycares} filters={filters} />
    </div>
  );
};

export default Home;
