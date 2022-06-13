import {createContext, Dispatch, FC, SetStateAction, useState, useMemo, useContext
} from "react";

// interface IContext {
//     isAuth: Boolean
//     setIsAuth: Dispatch<SetStateAction<boolean>>
// }

//export const AuthContext = createContext<IContext> ({} as IContext);

// export const AuthProvider:FC = ({children}) => {
//     const [isAuth, setIsAuth] = useState(false);

//     const value = useMemo(() => ({
//         isAuth,
//         setIsAuth
//         }), [isAuth])

//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

export const useAuth = () => useContext(AuthContext); //хук для получения контекста

//-----------------------
//обернули приложение
//<AuthProvider>
//<App/>
//</AuthProvider>

//---------------------

//import {AuthContext, useAuth} from './AuthContext'

//const App: FC = () => {
    //const {isAuth} = useContext(AuthContext); //получили переменную isAuth
//     const {isAuth} = useAuth() //аналогично получили переменную isAuth
//     return (
//         <>{isAuth}</>
//     )
// }