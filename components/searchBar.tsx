import { SetStateAction, useState } from "react";

const SearchBar = ({ term }: any) => {
  const [searchTerm, setSearchTerm] = useState(term);
  console.log("searchTerm", searchTerm);
  // setSearchTerm(term);

  const changeHandler = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    e.preventDefault();

    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <input
          autoComplete="off"
          className="inputText"
          name="search"
          value={searchTerm}
          onChange={changeHandler}
          placeholder="search"
      />
    </div>
  );
};

export default SearchBar;
