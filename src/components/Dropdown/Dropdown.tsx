import React from "react";
import "../Dropdown/Dropdown.scss";
import close from "../../assets/close.svg";
import { NavLink } from "react-router-dom";
import { Category } from "../../models/Category";

interface DropdownProps {
  categories: Category[];
  onClose: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ categories, onClose }): JSX.Element => {

  return (
    <div className="dropdown">
      <div className="dropdown__background"></div>
      <div className="dropdown__container">
        <div className="dropdown__header">
          <img src={close} className="dropdown__close-icon" alt="Close" onClick={onClose} />
        </div>
        {categories.map((category) => (
          <NavLink key={category._id} className="header__link" to={category.name.es} title="">
            {category.name.es}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
