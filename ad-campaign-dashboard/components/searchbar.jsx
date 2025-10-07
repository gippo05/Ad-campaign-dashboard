import { FaSearch } from "react-icons/fa";

const SearchBar = ({onSearchChange, searchedItems}) => {

    return (
        <>
          <div className="relative flex items-center w-[600px]">
                <input
                    className="bg-white w-full h-10 rounded pl-10 pr-4 text-black focus:outline-none"
                    type="text"
                    id="search-input"
                    placeholder="Search items"
                    aria-label="Search items"
                    onChange={onSearchChange}
                    value={searchedItems}
                />
                <FaSearch className="absolute left-3 text-gray-500" />
        </div>

        </>
    )
}

export default SearchBar;