"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../globals.css';


const daycares = [
  // Apex Daycares
  { id: 1, name: 'Happy Kids Daycare', numKids: 1, price: 100, location: 'Apex', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },
  { id: 2, name: 'Little Stars Daycare', numKids: 2, price: 200, location: 'Apex', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },
  { id: 3, name: 'Bright Future Daycare', numKids: 3, price: 300, location: 'Apex', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },
  { id: 4, name: 'Sunshine Daycare', numKids: 4, price: 400, location: 'Apex', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },
  { id: 5, name: 'Rainbow Daycare', numKids: 5, price: 500, location: 'Apex', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },

  // Raleigh Daycares
  { id: 6, name: 'Tiny Tots Daycare', numKids: 1, price: 100, location: 'Raleigh', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },
  { id: 7, name: 'Giggles Daycare', numKids: 2, price: 200, location: 'Raleigh', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },
  { id: 8, name: 'Little Sprouts Daycare', numKids: 3, price: 300, location: 'Raleigh', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },
  { id: 9, name: 'Bright Minds Daycare', numKids: 4, price: 400, location: 'Raleigh', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },
  { id: 10, name: 'Kiddie Cove Daycare', numKids: 5, price: 500, location: 'Raleigh', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },

  // Chapel Hill Daycares
  { id: 11, name: 'Happy Hearts Daycare', numKids: 1, price: 100, location: 'Chapel Hill', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },
  { id: 12, name: 'Sunny Side Daycare', numKids: 2, price: 200, location: 'Chapel Hill', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },
  { id: 13, name: 'Rainbow Bright Daycare', numKids: 3, price: 300, location: 'Chapel Hill', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },
  { id: 14, name: 'Little Learners Daycare', numKids: 4, price: 400, location: 'Chapel Hill', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },
  { id: 15, name: 'Growing Minds Daycare', numKids: 5, price: 500, location: 'Chapel Hill', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },

  // Durham Daycares
  { id: 16, name: 'Happy Hearts Daycare', numKids: 1, price: 100, location: 'Durham', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },
  { id: 17, name: 'Sunny Side Daycare', numKids: 2, price: 200, location: 'Durham', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },
  { id: 18, name: 'Rainbow Bright Daycare', numKids: 3, price: 300, location: 'Durham', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },
  { id: 19, name: 'Little Learners Daycare', numKids: 4, price: 400, location: 'Durham', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },
  { id: 20, name: 'Growing Minds Daycare', numKids: 5, price: 500, location: 'Durham', availableDates: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09', '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13', '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17', '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29', '2024-05-30', '2024-05-31'] },
];

const uniqueLocations = [...new Set(daycares.map(daycare => daycare.location))];
const uniqueNumKids = [...new Set(daycares.map(daycare => daycare.numKids))];

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [numKids, setNumKids] = useState('');
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [schedule, setSchedule] = useState(new Date());
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const userProfile = {
      name,
      email,
      numKids,
      budget,
      location,
      schedule: schedule.toISOString(),
    };

    const query = new URLSearchParams(userProfile).toString();
    router.push(`/daycare-list?${query}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center relative">
      <nav className="w-full bg-white py-4 px-8 shadow-md flex items-center">
        <Link href="/">
          <div className="flex items-center">
            <img src="/logo.png" alt="TotSpot Logo" className="w-10 h-10 mr-2" />
            <div className="text-2xl font-bold text-blue-900">TotSpot</div>
          </div>
        </Link>
      </nav>

      <section className="w-full max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between relative">
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-3xl font-extrabold text-blue-900 mb-6">Login</h1>
          <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 transform transition-transform duration-300 hover:scale-105"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 transform transition-transform duration-300 hover:scale-105"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 transform transition-transform duration-300 hover:scale-105"
              required
            />
            <select
              value={numKids}
              onChange={(e) => setNumKids(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 transform transition-transform duration-300 hover:scale-105"
              required
            >
              <option value="">Select Number of Kids</option>
              {uniqueNumKids.map((num, index) => (
                <option key={index} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 transform transition-transform duration-300 hover:scale-105"
              required
            />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 transform transition-transform duration-300 hover:scale-105"
              required
            >
              <option value="">Select Location</option>
              {uniqueLocations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <DatePicker
              selected={schedule}
              onChange={(date) => setSchedule(date)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 transform transition-transform duration-300 hover:scale-105"
              required
            />
            <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transform transition-transform duration-300 hover:scale-105">
              Login
            </button>
          </form>
        </div>
        <div className="hidden md:block w-full md:w-1/2 p-6 relative">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <img src="/mmother.png" alt="Sticker" className="w-164 h-164" />
          </div>
        </div>
      </section>

      <div className="absolute top-20 left-16 animate-float">
        <img src="/giraffe.png" alt="Giraffe Sticker" className="w-16 h-16" />
      </div>
      <div className="absolute top-28 right-28 animate-float">
        <img src="/balloon.png" alt="Balloon Sticker" className="w-16 h-16" />
      </div>
      <div className="absolute top-80 right-10 animate-float">
        <img src="/star.png" alt="Star Sticker" className="w-16 h-16" />
      </div>
      <div className="absolute top-60 left-20 animate-float">
        <img src="/cupcake.webp" alt="Cupcake Sticker" className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 left-40 animate-float">
        <img src="/bee.webp" alt="Bee Sticker" className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 right-20 animate-float">
        <img src="/balloon.png" alt="Balloon Sticker" className="w-16 h-16" />
      </div>
      <div className="absolute bottom-48 left-0 animate-float">
        <img src="/balloon.png" alt="Giraffe Sticker" className="w-16 h-16" />
      </div>
    </div>
  );
};

export default Login;