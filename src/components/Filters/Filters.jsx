import React from "react";
import Select from "react-select";
import { FiltersLabel, FiltersWrap } from "./Filters.styled";
import { Controller, useForm } from "react-hook-form";

const options = [
  { value: "name", label: "A to Z" },
  { value: "name desc", label: "Z to A" },
  { value: "price_less", label: "Less than 10$" },
  { value: "price_greater", label: "Greater than 10$" },
  { value: "rating", label: "Popular" },
  { value: "rating_minus", label: "Not popular" },
  { value: "all", label: "Show all" },
];

const Filters = ({ selectedOption, setSelectedOption }) => {
  const { control } = useForm({
    mode: "onChange",
  });

  const selectStyle = {
    control: (styles) => ({
      ...styles,
      borderRadius: "14px",
      width: "226px",
      height: "48px",
      cursor: "pointer",
      backgroundColor: "var(--red)",
      outline: "none",
      ":active": {
        borderColor: "var(--red)",
      },
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "var(--white)",
      fontSize: "18px",
    }),
    dropdownIndicator: (styles, { isFocused }) => ({
      ...styles,
      color: "var(--white)",
      transform: isFocused ? "rotate(0deg)" : "rotate(180deg)",
      ":hover": {
        transform: "rotate(0deg)",
      },
      ":active": {
        transform: "rotate(0deg)",
      },
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "var(--white)",
      fontSize: "18px",
      //   fontWeight: "500",
    }),
    menu: (styles) => ({
      ...styles,
      borderRadius: "14px",
      backgroundColor: "var(--white)",
      boxShadow: "0 20px 69px 0 rgba(0, 0, 0, 0.07);",
      overflow: "hidden",
      color: "var(--text-light-grey)",
      fontSize: "18px",
    }),
    option: (styles, { isFocused, isSelected }) => {
      if (isFocused) {
        return {
          ...styles,
          background: "var(--pink)",
          color: "var(--text-black)",
        };
      } else if (isSelected) {
        return {
          ...styles,
          background: "transparent",
          color: "var(--text-light-grey)",
        };
      } else {
        return {
          ...styles,
        };
      }
    },
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
              styles={selectStyle}
              isSearchable={false}
              value={options.find((option) => option.value === field.value)}
              onChange={(option) => {
                field.onChange(option.value);
                setSelectedOption(option);
              }}
              components={{
                IndicatorSeparator: () => null,
              }}
              aria-label="Filters"
              placeholder="A to Z"
            />
          )}
        />
      </FiltersLabel>
    </FiltersWrap>
  );
};

export default Filters;
