import {TypedUseSelectorHook, useSelector} from "react-redux";


//export const useTypedSelector:TypedUseSelectorHook<RootState> =useSelector;

// ПОЛУЧИЛИ ТИПИЗИРОВАННЫЙ ХУК


//import { useTypedSelector} from './useTypedSelector'

//const App: FC = () => {
//const appContent = useTypedSelector(state => state.people); //получили часть state
// вместо const appContent = useTypedSelector(state: RootState....

//     return (
//         <>{appContent}</>
//     )
// }