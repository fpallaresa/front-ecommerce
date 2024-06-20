import React from "react";
import "../Dropdown/Dropdown.scss";
import close from "../../assets/close.svg";
import { NavLink } from "react-router-dom";

interface DropdownProps {
  onClose: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onClose }): JSX.Element => {
  return (
    <div className="dropdown">
      <div className="dropdown__background"></div>
      <div className="dropdown__container">
        <div className="dropdown__header">
          <img src={close} className="dropdown__close-icon" alt="Close" onClick={onClose} />
        </div>
        <NavLink className="dropdown__link" to="#" title="">
          HOMBRE
        </NavLink>
        <NavLink className="dropdown__link" to="#" title="">
          MUJER
        </NavLink>
        <NavLink className="dropdown__link" to="#" title="">
          INFANTIL
        </NavLink>
      </div>
    </div>
  );
};

export default Dropdown;
