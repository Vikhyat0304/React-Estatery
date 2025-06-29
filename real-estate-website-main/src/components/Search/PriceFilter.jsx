import { Select } from "@chakra-ui/react";
import { useContext } from "react";
import { HouseContext } from "../../context/HouseContext";

const PriceFilter = () => {
  const { setPrice } = useContext(HouseContext);

  const prices = [
    { label: "₹20,000 - ₹30,000", value: "20000-30000" },
    { label: "₹30,000 - ₹1,10,000", value: "30000-110000" },
    { label: "₹1,10,000 - ₹1,40,000", value: "110000-140000" },
    { label: "₹1,40,000 - ₹1,70,000", value: "140000-170000" },
    { label: "₹1,70,000 - ₹2,00,000", value: "170000-200000" },
    { label: "₹2,00,000 - ₹2,30,000", value: "200000-230000" },
  ];

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  return (
    <Select
      onChange={priceHandler}
      defaultValue=""
      bg="gray.800"
      color="white"
      borderColor="gray.600"
      _hover={{ bg: "gray.700" }}
      _focus={{ borderColor: "cyan.400", boxShadow: "0 0 0 1px cyan" }}
    >
      <option value="" disabled hidden>
        Select Price Range
      </option>
      {prices.map((price, index) => (
        <option
          key={index}
          value={price.value}
          style={{ background: "#1a202c", color: "white" }}
        >
          {price.label}
        </option>
      ))}
    </Select>
  );
};

export default PriceFilter;
