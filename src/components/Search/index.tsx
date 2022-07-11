import { CustomInput, Div } from "./style";
import { FiSearch } from "react-icons/fi"

interface ISearch {
  placeholder: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  inputFilter: () => void
}

const Search = ({placeholder,setSearch,inputFilter}: ISearch) => {
  return (
    <Div>
      <FiSearch onClick={inputFilter}/>
      <CustomInput type="text" placeholder={placeholder} onChange={(e) =>{
         setSearch(e.target.value.toLowerCase())
         inputFilter()
      }} 
      />
    </Div>
  );
};

export default Search;
