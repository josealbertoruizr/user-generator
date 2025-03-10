'use client';

import React, { useState } from "react";
import { usePeopleApi } from "../app/hooks/userPeopleApi";

const UserProfile = () => {
  const { currentPerson, error, loading, fetchData } = usePeopleApi();
  const [activeField, setActiveField] = useState<'name' | 'email' | 'birthday' | 'phone' | 'password' | ''>('');

  if (error) return <div>Error loading data</div>;

  const getFieldLabel = () => {
    switch (activeField) {
      case 'email':
        return 'My email address is';
      case 'birthday':
        return 'My birthday is';
      case 'phone':
        return 'My phone number is';
      case 'password':
        return 'My password is';
      case 'name':
        return 'Hi, My name is';
      default:
        return 'Select an option';
    }
  };

  const getFieldValue = () => {
    switch (activeField) {
      case 'email':
        return currentPerson?.email || "example@example.com";
      case 'birthday':
        return currentPerson?.birthday?.slice(0, 10) || "01/01/2000";
      case 'phone':
        return currentPerson?.phone || "(123) 456-7890";
      case 'password':
        return currentPerson?.password || "********";
      case 'name':
        return currentPerson?.name || "Freddie Carroll";
      default:
        return '';
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-1/2 text-center p-6 relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gray-800 rounded-t-lg"></div>
        <div className="relative mt-12">
          <img
            src={currentPerson?.picture || "https://via.placeholder.com/100"}
            alt="User Profile"
            className="w-24 h-24 rounded-full border-4 border-white mx-auto"
          />
          <h2 className="text-gray-600 mt-2 text-sm">{getFieldLabel()}</h2>
          <h1 className="text-gray-950 text-xl font-semibold">{getFieldValue()}</h1>

          <div className="flex justify-center gap-4 mt-4">
            <button onClick={() => setActiveField('name')} className={`px-4 py-2 rounded-md ${activeField === 'name' ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}>Name</button>
            <button onClick={() => setActiveField('email')} className={`px-4 py-2 rounded-md ${activeField === 'email' ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}>Email</button>
            <button onClick={() => setActiveField('birthday')} className={`px-4 py-2 rounded-md ${activeField === 'birthday' ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}>Birthday</button>
            <button onClick={() => setActiveField('phone')} className={`px-4 py-2 rounded-md ${activeField === 'phone' ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}>Phone</button>
            <button onClick={() => setActiveField('password')} className={`px-4 py-2 rounded-md ${activeField === 'password' ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}>Password</button>
          </div>

          <button 
            onClick={fetchData} 
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Fetch New Data
          </button>

          {loading && <div className="text-center mt-4">Loading...</div>}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
