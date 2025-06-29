import { Select } from '@chakra-ui/react';
import { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';

const LocationFilter = () => {

  const { setCountry } = useContext(HouseContext);

  // India ke popular cities/regions
  const indianCities = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow"
  ];

  const locationHandler = (event) => {
    setCountry(event.target.value);
  };

  return (
<Select
  onChange={locationHandler}
  bg="gray.800"
  color="white"
  borderColor="gray.600"
  _hover={{ bg: "gray.700" }}
  _focus={{ borderColor: "cyan.400", boxShadow: "0 0 0 1px cyan" }}
  defaultValue=""
>
  <option value="" disabled hidden>
    Select City
  </option>
  {['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'].map((city, index) => (
    <option
      key={index}
      value={city}
      style={{ backgroundColor: '#1a202c', color: 'white' }}
    >
      {city}
    </option>
  ))}
</Select>


  );
};

export default LocationFilter;
