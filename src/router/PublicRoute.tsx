import { ReactNode, useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/context';

export const PublicRoute = ({children}: {children: ReactNode}) => {
  const {logged} = useContext(AuthContext);
  return (logged ? <Navigate to="/"/> : children);
}
