import { useId, useState } from "react";
import useFilters from "../hooks/useFilters";
import "./Filters.css";

export function Filters() {
  const { setFilters } = useFilters()
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCateogry = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categorias</label>
        <select onChange={handleChangeCateogry} id={categoryFilterId}>
          <option value="all">Todas</option>
          <option value="laptops">Notebooks</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}
