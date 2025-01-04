import React, { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
export function InputCard({ onCityChange }) {
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
      <div className="flex flex-col space-y-1.5 py-4">
              <Label htmlFor="name">Enter City Name</Label>
            </div>
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter city name"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        <Button
          type="submit"
          className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
