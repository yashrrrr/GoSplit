import { useState, useRef } from "react";
import "./FriendsDropDown.css";
import dropDownArrow from "../assets/drop-down-arrow.png"; // <-- import the image

interface FriendsDropDownProps {
  options: string[];
  selected: string[];
  setSelected: (selected: string[]) => void;
}

export default function FriendsDropDown({
  options,
  selected,
  setSelected,
}: FriendsDropDownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOption = (option: string) => {
    setSelected(
      selected.includes(option)
        ? selected.filter((o) => o !== option)
        : [...selected, option]
    );
  };

  return (
    <div className="friends-dropdown-container" ref={dropdownRef}>
      <div className="friends-dropdown-header" onClick={() => setOpen((o) => !o)}>
        {selected.length>0 ? (selected.length>1 ? (selected.length===2 ? `${selected[0]}, ${selected[1]}`: `${selected[0]}, ${selected[1]}...`) : `${selected[0]}`) :"Choose From Options"}
        <span className={`dropdown-arrow${open ? " open" : ""}`}>
          <img
            src={dropDownArrow}
            alt="dropdown arrow"
            className="dropdown-arrow-img"
          />
        </span>
      </div>
      {open && (
        <div className="friends-dropdown-list">
          {options.map((option) => (
            <div
              key={option}
              className={`friends-dropdown-option${
                selected.includes(option) ? " selected" : ""
              }`}
              onClick={() => toggleOption(option)}
            >
              <input
                type="checkbox"
                checked={selected.includes(option)}
                readOnly
              />
              <span>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}