import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "../api"; // Import the useGetUserQuery hook
import { checkingCredentials, login, logout } from "../store/auth";

export const useCheckAuth = () => {
  const token = localStorage.getItem('token');
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const { data, isLoading, isSuccess, error } = useGetUserQuery({
    skip: !token,
  });

  useEffect(() => {
    dispatch(checkingCredentials());
    if (error) { 
      const message = error.message;
      dispatch(logout({ errorMesage: message }));
    }

    if (isSuccess) { 
      dispatch(login(data));
    }
  }, [error, isSuccess, data, dispatch]); 

  return {
    status,
    isLoading,
  };
};