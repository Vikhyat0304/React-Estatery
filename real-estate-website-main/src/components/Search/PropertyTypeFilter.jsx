import { Select } from '@chakra-ui/react';
import { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';

const PropertyTypeFilter = () => {
  const { setProperty, properties } = useContext(HouseContext);

  const propertyTypeHandler = (e) => {
    setProperty(e.target.value);
  };

  return (
    <Select
      onChange={propertyTypeHandler}
      defaultValue=""
      bg="gray.800"
      color="white"
      borderColor="gray.600"
      fontWeight="medium"
      _hover={{ bg: "gray.700", borderColor: "cyan.500" }}
      _focus={{ borderColor: "cyan.400", boxShadow: "0 0 0 1px cyan" }}
      transition="all 0.3s ease"
    >
      {/* Hidden Placeholder (won't appear in dropdown options) */}
      <option value="" disabled hidden>
        Select Property Type
      </option>

      {properties.map((type, index) => (
        <option
          key={index}
          value={type}
          style={{
            backgroundColor: '#1a202c',
            color: 'white',
          }}
        >
          {type}
        </option>
      ))}
    </Select>
  );
};

export default PropertyTypeFilter;
