import { useEffect, useState } from "react";
import "./index.css";

const CountryDropdown = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        //Pre-selecting USA
        const us = data.find((country) => country.cca2 === "BD");
        setSelectedCountry(us);
      })

      .catch((error) => console.error("Error fetching country data:", error));
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  console.log(countries);
  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="country-button"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {selectedCountry ? (
            <>
              {selectedCountry.capital}
              <img
                src={selectedCountry?.flags?.png}
                alt={selectedCountry?.name?.official}
                className="flex items-center w-8 h-5 ml-2 mr-2 rounded-[2px]"
              />
            </>
          ) : (
            <>
              Select Country
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 7.293a1 1 0 011.414 0L10 8.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          )}
        </button>
      </div>

      {dropdownOpen && (
        <div
          className="dropdown-list"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {countries.map((country) => (
              <a
                key={country.cca2}
                onClick={() => handleCountrySelect(country)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <img
                  src={country.flags.png}
                  alt={country.cca2}
                  className="inline-block w-auto h-4 ml-2 mr-2 "
                />
                {country?.capital
}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
