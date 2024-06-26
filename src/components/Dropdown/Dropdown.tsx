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
  const mainCategories = categories.filter(category => !category.parentCategory);

  const renderSubcategories = (parentCategory: Category): JSX.Element | null => {
    const children = categories.filter(category => category.parentCategory?._id === parentCategory._id);
    if (children.length === 0) return null;
    return (
      <ul className="dropdown__subcategories">
        {children.map(child => (
          <li key={child._id} className="dropdown__subcategories-list">
            <NavLink className="dropdown__link" to={child.name.es.toLowerCase()} title={child.name.es} >
              {child.name.es}
            </NavLink>
            {renderSubcategories(child)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="dropdown">
      <div className="dropdown__background"></div>
      <div className="dropdown__container">
        <div className="dropdown__header">
          <img src={close} className="dropdown__close-icon" alt="Close" onClick={onClose} />
        </div>
        {mainCategories.map(category => (
          <div key={category._id} className="dropdown__category">
            <NavLink className="dropdown__link" to={category.name.es.toLowerCase()} title={category.name.es}>
              {category.name.es}
            </NavLink>
            {renderSubcategories(category)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
