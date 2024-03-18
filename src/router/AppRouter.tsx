import React from 'react'
import { Route, Routes } from "react-router-dom";
import { PublicRoute, PrivateRoute } from './';
import { LoginPage } from '../auth';
import { MainPage } from '../pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={
        <PublicRoute>
          <LoginPage/>
        </PublicRoute>
      }/>
      <Route path="/" element={
        <PrivateRoute>
          <MainPage/>
        </PrivateRoute>
      }/>
    </Routes>
  )
}
