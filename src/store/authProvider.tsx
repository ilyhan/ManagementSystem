import { IAuth, IUserAuth } from '@/common/interfaces/auth';
import { createContext, useContext, useState } from 'react';

interface IAuthContext {
    auth: IAuth;
    onLogin: (token: string, user: IUserAuth) => void;
    onLogout: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [auth, setAuth] = useState<IAuth>({
        isAuth: false,
    });

    const onLogin = (token: string, user: IUserAuth) => {
        setAuth({ isAuth: true, user, token });
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
