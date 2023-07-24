import { createContext, useState } from "react";

export const SearchContext = createContext();
const SearchDataProvider = ({ children }) => {
  const [searchData, setSearchData] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <SearchContext.Provider
      value={{ searchData, setSearchData, loading, setLoading }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchDataProvider;
