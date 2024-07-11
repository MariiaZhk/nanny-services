import { useEffect, useState } from "react";
import Select from "react-select";
import { FiltersLabel, FiltersWrap } from "./Filters.styled";
import { Controller, useForm } from "react-hook-form";
import { selectStyle } from "./Filters.styled";
import { useDispatch, useSelector } from "react-redux";
import { setFilterAction } from "../../redux/nanniesSlice";
import { selectFilter } from "../../redux/selectors";

const options = [
  { value: "a-z", label: "A to Z" },
  { value: "z-a", label: "Z to A" },
  { value: "price-less", label: "Price Low to High" },
  { value: "price-greater", label: "Price High to Low" },
  { value: "popular", label: "Popular" },
  { value: "not-popular", label: "Not popular" },
  { value: "all", label: "Show all" },
];

const Filters = ({ filterType }) => {
  const { control, setValue } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState();
  const filter = useSelector((state) => selectFilter(state)[filterType]);

  // const defaultOption = options.find((option) => option.value === "all");
  useEffect(() => {
    setValue("category", filter);
  }, [filter, setValue]);

  const handleSelectOption = (option) => {
    dispatch(setFilterAction({ type: filterType, value: option.value }));
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
              // defaultValue={defaultOption}
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
