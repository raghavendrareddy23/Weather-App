import React, { useState, useEffect } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import CitiesList from "./CitiesList";

function InputBox({ setQuery, weatherData }) {
  const [input, setInput] = useState(weatherData.name);
  const [showDropdown, setShowDropdown] = useState(false);

  const onSubmit = () => {
    setQuery({ q: input });
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setShowDropdown(true);
  };

  const handleDropdownSelect = (selectedCity) => {
    setInput(selectedCity);
    setShowDropdown(false);
  };

  useEffect(() => {
    if (input === "") {
      setShowDropdown(false);
    }
  }, [input]);

  return (
    <div className="relative mt-5 w-full text-black md:mx-auto md:w-1/2">
      <div className="relative flex flex-row items-center w-full text-black">
        <UilLocationPoint
          size={22}
          className="absolute ml-5 text-blue cursor-pointer transition ease-out hover:scale-125"
        />

        <input
          onFocus={() => setShowDropdown(true)}
          value={input}
          onChange={handleInputChange}
          placeholder="Search for city...."
          id="input"
          className="rounded-lg pl-10 text-xl font-light p-2 w-full h-12 capitalize placeholder:lowercase mx-4"
        />

        <UilSearch
          onClick={onSubmit}
          size={22}
          className="absolute right-10 text-blue cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      {showDropdown && (
        <CitiesList
          setInput={handleDropdownSelect}
          input={input}
          setDivToggle={setShowDropdown}
        />
      )}
    </div>
  );
}

export default InputBox;