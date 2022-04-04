import { searchIconGray } from '../../assets';
import './style.css';


const SearchInput = props =>{
    return (
        <div className="search-input-container flex">
            <img src="searchIconGray"/>
            <input placeholder="Find your music"/>
        </div>
    );
}
export default SearchInput ;












