import styled from "styled-components";

export const FiltersWrap = styled.div`
  max-width: 224px;
`;
export const FiltersLabel = styled.label`
  font-weight: 500;
  line-height: 1.29;
  cursor: pointer;

  select {
    font-weight: 500;
    border: none;
  }
`;
export const selectStyle = (isDropdownOpen) => ({
  control: (styles) => ({
    ...styles,
    borderRadius: "14px",
    width: "226px",
    height: "48px",
    cursor: "pointer",
    backgroundColor: "var(--red)",
    outline: "none",
    padding: "0 6px",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "var(--white)",
    fontSize: "18px",
    lineHeight: "1.11",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "var(--white)",
    transform: isDropdownOpen ? "rotate(0deg)" : "rotate(180deg)",
    transition: "transform 0.3s ease",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "var(--white)",
    fontSize: "18px",
  }),
  menu: (styles) => ({
    ...styles,

    padding: "6px 18px",
    borderRadius: "14px",
    backgroundColor: "var(--white)",
    boxShadow: "0 20px 69px 0 rgba(0, 0, 0, 0.07)",
    color: "var(--text-light-grey)",
    fontSize: "18px",
    lineHeight: "1.11",
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    background: isFocused ? "var(--pink)" : "transparent",
    color: isSelected ? "var(--text-black)" : "var(--text-light-grey)",
    padding: "6px 0",
  }),
});
