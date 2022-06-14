import Cookies from "js-cookie";  //cкачали либу
import { useEffect, useState, useCallback } from "react";

// export const useCookie = (name, initialValue) => {
//   const [value setValue] = useState(()=> {
//       const cookie = Cookies.get(name);
//       if(cookie) return cookie;
//       Cookies.set(name, initialValue);
//       return initialValue;
//   });

//   const updateCookie =  useCallback((newVal, options) => {
//      Cookies.set(name, newVal, options);
//      setValue(newVal)
//   }, [name]);

//   const deleteCookie = useCallback(() => {
//      Cookies.remove(name);
//      setValue(null);
//}, [name]);

//   return [value, updateCookie, deleteCookie]
// }

//-----------------------

//import { useCookie} from './useCookie'


//const App: FC = () => {
//const [value, updateCookie, deleteCookie] = useCookiege('token', ''); //применение 
// 
//    const changeToken = () => {
//      updateCookie(String(newDate()))
//}
//     return (
//         <>
            // <div>Token: {value}</div>
            // <button onClick={changeToken}>
            //     Change Token
            // </button>
            // <button onClick={deleteCookie}>
            // Delete Token
            // </button>
       //     </>
//     )
// }
//////////////////////////////////
