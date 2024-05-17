"use client"

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const daycares = [
    // Apex Daycares
    { id: 1, name: 'Happy Kids Daycare', numKids: 1, price: 100, location: 'Apex', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'], imageUrl: '/daycare1.png', review: '⭐⭐⭐⭐⭐' },
    { id: 2, name: 'Little Stars Daycare', numKids: 2, price: 200, location: 'Apex', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'], imageUrl: '/daycare2.png', review: '⭐⭐⭐⭐' },
    { id: 3, name: 'Bright Future Daycare', numKids: 3, price: 300, location: 'Apex', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'], imageUrl: '/daycare3.png', review: '⭐⭐⭐⭐⭐'  },
    { id: 4, name: 'Sunshine Daycare', numKids: 4, price: 400, location: 'Apex', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'], imageUrl: '/daycare4.png', review: '⭐⭐⭐'  },
    { id: 5, name: 'Rainbow Daycare', numKids: 5, price: 500, location: 'Apex', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] , imageUrl: '/daycare5.png', review: '⭐⭐⭐⭐' },
  
    // Raleigh Daycares
    { id: 6, name: 'Tiny Tots Daycare', numKids: 1, price: 100, location: 'Raleigh', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] , imageUrl: '/daycare1.png', review: '⭐⭐⭐⭐⭐' },
    { id: 7, name: 'Giggles Daycare', numKids: 2, price: 200, location: 'Raleigh', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] , imageUrl: '/daycare2.png', review: '⭐⭐⭐' },
    { id: 8, name: 'Little Sprouts Daycare', numKids: 3, price: 300, location: 'Raleigh', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'], imageUrl: '/daycare3.png', review: '⭐⭐⭐⭐'  },
    { id: 9, name: 'Bright Minds Daycare', numKids: 4, price: 400, location: 'Raleigh', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'], imageUrl: '/daycare4.png', review: '⭐⭐⭐'  },
    { id: 10, name: 'Kiddie Cove Daycare', numKids: 5, price: 500, location: 'Raleigh', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'], imageUrl: '/daycare5.png', review: '⭐⭐⭐⭐⭐'  },
  
    // Chapel Hill Daycares
    { id: 11, name: 'Happy Hearts Daycare', numKids: 1, price: 100, location: 'Chapel Hill', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] , imageUrl: '/daycare1.png', review: '⭐⭐⭐⭐' },
    { id: 12, name: 'Sunny Side Daycare', numKids: 2, price: 200, location: 'Chapel Hill', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'], imageUrl: '/daycare2.png', review: '⭐⭐⭐⭐⭐'  },
    { id: 13, name: 'Rainbow Bright Daycare', numKids: 3, price: 300, location: 'Chapel Hill', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] , imageUrl: '/daycare3.png', review: '⭐⭐⭐⭐' },
    { id: 14, name: 'Little Learners Daycare', numKids: 4, price: 400, location: 'Chapel Hill', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] , imageUrl: '/daycare4.png', review: '⭐⭐⭐⭐' },
    { id: 15, name: 'Growing Minds Daycare', numKids: 5, price: 500, location: 'Chapel Hill', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] , imageUrl: '/daycare5.png', review: '⭐⭐⭐⭐⭐' },
  
    // Durham Daycares
    { id: 16, name: 'Happy Hearts Daycare', numKids: 1, price: 100, location: 'Durham', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] , imageUrl: '/daycare1.png', review: '⭐⭐⭐' },
    { id: 17, name: 'Sunny Side Daycare', numKids: 2, price: 200, location: 'Durham', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] , imageUrl: '/daycare2.png', review: '⭐⭐⭐⭐⭐' },
    { id: 18, name: 'Rainbow Bright Daycare', numKids: 3, price: 300, location: 'Durham', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'], imageUrl: '/daycare3.png', review: '⭐⭐⭐⭐'  },
    { id: 19, name: 'Little Learners Daycare', numKids: 4, price: 400, location: 'Durham', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] , imageUrl: '/daycare4.png', review: '⭐⭐⭐⭐' },
    { id: 20, name: 'Growing Minds Daycare', numKids: 5, price: 500, location: 'Durham', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'], imageUrl: '/daycare5.png', review: '⭐⭐⭐⭐⭐'  },
  ];

const uniqueLocations = [...new Set(daycares.map(daycare => daycare.location))];
const uniqueNumKids = [...new Set(daycares.map(daycare => daycare.numKids))];

const DaycareList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialFilters = {
    name: searchParams.get('name') || '',
    email: searchParams.get('email') || '',
    numKids: searchParams.get('numKids') || '',
    budget: searchParams.get('budget') || '',
    location: searchParams.get('location') || '',
    schedule: new Date(searchParams.get('schedule')) || new Date(),
  };

  const [filters, setFilters] = useState(initialFilters);

  const filteredDaycares = daycares.filter((daycare) => {
    const matchesNumKids = filters.numKids ? daycare.numKids >= parseInt(filters.numKids) : true;
    const matchesMaxPrice = filters.budget ? daycare.price <= parseInt(filters.budget) : true;
    const matchesLocation = filters.location ? daycare.location.toLowerCase() === filters.location.toLowerCase() : true;
    const matchesSchedule = filters.schedule ? daycare.availableDates.includes(filters.schedule.toISOString().split('T')[0]) : true;

    return matchesNumKids && matchesMaxPrice && matchesLocation && matchesSchedule;
  });

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

  const handleReEnterData = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center relative">
      <nav className="w-full bg-white py-4 px-8 shadow-md flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <img src="/logo.png" alt="TotSpot Logo" className="w-10 h-10 mr-2" />
            <div className="text-2xl font-bold text-blue-900">TotSpot</div>
          </div>
        </Link>
        <button onClick={handleReEnterData} className="text-blue-500 hover:underline">Logout</button>
      </nav>

      <div className="w-full max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg relative">
        <img src="/giraffe.png" alt="sticker" className="absolute top-[-20px] left-[-20px] w-16 h-16 animate-float" />
        <img src="/balloon.png" alt="sticker" className="absolute top-[-20px] right-[-20px] w-16 h-16 animate-float" />
        <img src="/star.png" alt="sticker" className="absolute bottom-[-20px] left-[-20px] w-16 h-16 animate-float" />
        <img src="/bee.webp" alt="sticker" className="absolute bottom-[-20px] right-[-20px] w-16 h-16 animate-float" />
        <h1 className="text-3xl font-extrabold text-blue-900 mb-6 text-center animate-bounce">Hi, {filters.name}!</h1>
        <div className="p-4 bg-white rounded-lg shadow-md mb-4 flex flex-col gap-4">
          <select
            name="numKids"
            value={filters.numKids}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 transform transition-transform duration-300 hover:scale-105"
          >
            <option value="">Number of Kids</option>
            {uniqueNumKids.map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>

          <input
            type="number"
            name="budget"
            placeholder="Budget"
            value={filters.budget}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 transform transition-transform duration-300 hover:scale-105"
          />

          <select
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 transform transition-transform duration-300 hover:scale-105"
          >
            <option value="">Location</option>
            {uniqueLocations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>

          <DatePicker
            selected={filters.schedule}
            onChange={handleDateChange}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 transform transition-transform duration-300 hover:scale-105"
            placeholderText="Schedule"
          />
        </div>

        <div className="min-h-[600px]"> {/* Adjust the min-height as needed */}
          {filteredDaycares.length === 0 ? (
            <div className="p-4 bg-white rounded-lg shadow-md my-2 animate-pulse">
              <h2 className="text-2xl font-bold">No matching daycares found.</h2>
            </div>
          ) : (
            filteredDaycares.map((daycare) => (
              <div key={daycare.id} className="p-4 bg-white rounded-lg shadow-md my-2 flex gap-4 hover:shadow-lg transition-shadow duration-300">
                <img src={daycare.imageUrl} alt={daycare.name} className="w-24 h-24 rounded-full object-cover transform hover:scale-110 transition-transform duration-300" />
                <div>
                  <h2 className="text-2xl font-bold">{daycare.name}</h2>
                  <p>Number of Kids: {daycare.numKids}</p>
                  <p>Price: ${daycare.price}</p>
                  <p>Location: {daycare.location}</p>
                  <p className="text-yellow-500">{daycare.review}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <style jsx>{`
        .sticker {
          position: absolute;
          width: 50px;
          height: 50px;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default DaycareList;