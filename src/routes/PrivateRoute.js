import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ permissionLevel }) => {
  const user = useSelector((state) => state.user.user);
  if(!user){
    <Navigate to="/login" />;
  }

  if(permissionLevel === 'customer'){
    return user.lvl === 'customer' ? <Outlet></Outlet> : <Navigate to="/" />;
  }

  if(permissionLevel === 'admin'){
    return user.lvl === 'admin' ? <Outlet></Outlet> : <Navigate to="/" />;
  }

  if(permissionLevel === 'seller'){
    return user.lvl === 'seller' ? <Outlet></Outlet> : <Navigate to="/" />;
  }
  return <Navigate to="/" />;
};

export default PrivateRoute;
