import React, { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';


export function AlertCard({ onCityChange }) {
  const [inputCity, setInputCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim() !== '') {
      onCityChange(inputCity);
    }
  };


  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleSubmit}>
      
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter city name"
          className=" rounded-md p-2 w-full"
        />
        
      </form>
    </div>
  );
}
