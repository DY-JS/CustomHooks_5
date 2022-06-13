import React, {useState} from 'react';

import useDebounce from "./hooks/useDebounce";
import useRequest from "./hooks/useRequest";

function Search() {
    const [value, setValue] = useState('');
    const debouncedSearch = useDebounce(search, 500);

    function search(query) {  //эта ф-ция попала в аргумент debouncedSearch
        fetch(`https://jsonplaceholder.typicode.com/todos?query=`+query)
        .then(res => res.json())
        .then(json => {console.log(json)});
    }

    const onChange = e => {
        setValue(e.target.value);
        //search(e.target.value)
        debouncedSearch(e.target.value) //отсрочка ф-ции search
    }
   
    return (
        <div>
            <input 
                type="text"
                placeholder='Type for search'
                value={value}
                onChange={onChange}
                />
        </div>
    );
}

export default Search;
