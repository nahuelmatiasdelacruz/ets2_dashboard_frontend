import { createContext } from "react";
import { IAuthContext, authContextInitialObject } from '../interfaces';

export const AuthContext = createContext<IAuthContext>(authContextInitialObject);