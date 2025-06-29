import { createContext, useState, useEffect } from 'react';
import { housesData } from '../data';

export const HouseContext = createContext();

const HouseProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [price, setPrice] = useState('');
  const [property, setProperty] = useState('');
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Utility to extract unique values
  const getUnique = (array) => [...new Set(array)];

  useEffect(() => {
    setCountries(getUnique(houses.map(house => house.country)));
    setProperties(getUnique(houses.map(house => house.type)));
  }, [houses]);

  const isDefault = (str = '') => str.trim() === '';

  const searchHandler = () => {
    setIsLoading(true);

    const [minPrice, maxPrice] = price
      ? price.split('-').map(p => parseInt(p.trim()))
      : [0, Infinity];

    const filteredHouses = housesData.filter(house => {
      const housePrice = parseInt(house.price);

      const matchesCountry = isDefault(country) || house.country === country;
      const matchesType = isDefault(property) || house.type === property;
      const matchesPrice = isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice);

      return matchesCountry && matchesType && matchesPrice;
    });

    setTimeout(() => {
      setHouses(filteredHouses);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        houses,
        setHouses,
        country,
        setCountry,
        countries,
        price,
        setPrice,
        property,
        setProperty,
        properties,
        searchHandler,
        isLoading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseProvider;
