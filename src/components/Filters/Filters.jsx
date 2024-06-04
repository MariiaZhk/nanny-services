import { useState } from "react";
import Select from "react-select";
import { FiltersLabel, FiltersWrap } from "./Filters.styled";
import { Controller, useForm } from "react-hook-form";
import { selectStyle } from "./Filters.styled";

const options = [
  { value: "name", label: "A to Z" },
  { value: "name desc", label: "Z to A" },
  { value: "price_less", label: "Less than 10$" },
  { value: "price_greater", label: "Greater than 10$" },
  { value: "rating", label: "Popular" },
  { value: "rating_minus", label: "Not popular" },
  { value: "all", label: "Show all" },
];

const Filters = () => {
  const { control } = useForm({ mode: "onChange" });
  const [selectedOption, setSelectedOption] = useState(options[6] || null);
  const [isDropdownOpen, setIsDropdownOpen] = useState();

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <FiltersWrap>
      <FiltersLabel>
        Filters
        <Controller
          name="category"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              options={options}
              defaultValue={selectedOption}
              styles={selectStyle(isDropdownOpen)}
              onMenuOpen={() => {
                setIsDropdownOpen(true);
              }}
              onMenuClose={() => {
                setIsDropdownOpen(false);
              }}
              isSearchable={false}
              value={options.find((option) => option.value === field.value)}
              onChange={handleSelectOption}
              components={{ IndicatorSeparator: () => null }}
              aria-label="Filters"
            />
          )}
        />
      </FiltersLabel>
    </FiltersWrap>
  );
};

export default Filters;
