import { createContext, useState } from "react";

//1. Crear el contexto, este es el que tenemos que consumir
export const FiltersContext = createContext();

//2. Crear el Provider, para proveer el contexto, este es el que nos provee el acceso al contexto
export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
