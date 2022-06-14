import { useEffect, useState } from "react";

// export const useLocalStorage = (key: string, initialValue: any) => {
//   const [value setValue] = useState(()=> {
//       const json = localStorage.getItem(key);
//       if(json!==null) return JSON.parse(json);
//       return initialValue;
//   });
//   useEffect(() => {
//       localStorage.setItem(key, JSON.stringify(value))
//   }, [key, value]);

//   return [value, setValue]
// }

//-----------------------
//import { useLocalStorage} from './useLocalStorage'
//import {initialState} from './reducer'

//const App: FC = () => {
//const { todos, setTodos } = useLocalStorage('todos', initialState); //применение useLocalStorage
// 
//     return (
//         <>{todos}</>
//     )
// }
//////////////////////////////////