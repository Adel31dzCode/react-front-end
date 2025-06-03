import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Loading from './../Components/Loading';
import axiosClient from './AxiosClient';

export default function ProtectedRoute() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const cookie = new Cookies();
  const token = cookie.get("Portfolio_AccessToken");

  useEffect(() => {
    const checkUser = async () => {
      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      try {
        const res = await axiosClient.get("/currentUser"); 
        if (res.data) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    };

    checkUser();
  }, [token]);

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return <Navigate to="/forbidden" replace />;
  }

  return <Outlet />;
}
