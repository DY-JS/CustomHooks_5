
import {Dispatch, FC, SetStateAction, useState, useEffect, useRef} from "react";

// type TypeOut = {
//     ref: any
//     isShow: boolean
//     setIsShow: Dispatch<SetStateAction<boolean>>
// }

// export const useOutside = (initialVisible: boolean): TypeOut => {
//   const [isShow, setIsShow] = useState((initialVisible);
//   const ref = useRef<HTMLElement>(null);

//   const handleClickOutside = (event: any) => {
//       if(ref.current && !ref.current.contains(event.target)){
//           setIsShow(false)
//       }
//   }

//   useEffect(() => {
//       document.addEventListener('click', handleClickOutside, true);
//       return () => {
//         document.removeEventListener('click', handleClickOutside, true);
//       }
//   });

//  return [ref, isShow, setIsShow]
//}

//-----------------------
//import { useOutside} from './useOutside'


//const App: FC = () => {
  const ref = useRef();
//const { ref, isShow, setIsShow } = useOutside(false); //применение 
// 
//     return (
// //         <>
//             <div ref={ref}>Hide</div>
//            </>
// //     )
// }
//////////////////////////////////