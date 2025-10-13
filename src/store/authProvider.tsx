import useRefresh from '@/common/hooks/useRefresh';
import { IAuth, IUserAuth } from '@/common/interfaces/auth';
import { createContext, useContext, useEffect, useState } from 'react';

interface IAuthContext {
    auth: IAuth;
    onLogin: (token: string, user: IUserAuth) => void;
    onLogout: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { data, isError } = useRefresh();

    const checkAuth = (): IAuth => {
        const token = localStorage.getItem('token');
        if (token) {
            return {
                isAuth: true,
                token,
                user: data ? data : undefined,
            }
        }
        return { isAuth: false }
    };

    useEffect(()=>{
        if(!isError) {
            setAuth(checkAuth());
        } else {
            setAuth({isAuth: false});
        }
    }, [data, isError]);

    const [auth, setAuth] = useState<IAuth>({
        isAuth: false,
    });

    const onLogin = (token: string, user: IUserAuth) => {
        setAuth({ isAuth: true, user, token });
        localStorage.setItem('token', token);
    };

    const onLogout = () => {
        setAuth({ isAuth: false, user: undefined })
    }

    return (
        <AuthContext.Provider value={{ auth, onLogin, onLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("no auth context");
    }
    return context;
};
