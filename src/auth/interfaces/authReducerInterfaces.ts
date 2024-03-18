interface IAuthReducerLogin {
  type: "[AUTH] Login";
  payload: {
    user: string;
    password: string;
  };
}
interface IAuthReducerLogout {
  type: "[AUTH] Logout";
}
interface IAuthReducerRegister {
  type: "[AUTH] Register";
  payload: {
    user: string;
    password: string;
    rePassword: string;
  };
}

export interface IAuthContext {
  register: (registerData: IAuthReducerRegister) => Promise<void>;
  login: (loginData: IAuthReducerLogin) => Promise<void>;
  logout: (logoutData:IAuthReducerLogout) => void;
  logged: boolean;
  userData: {
    username?: string;
    token?: string;
  }
}
export const authContextInitialObject: IAuthContext = {
  register: async () => {},
  login: async () => {},
  logout: () => {},
  logged: false,
  userData:{}
}