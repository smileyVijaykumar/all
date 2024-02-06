import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <Link to="/Profile/MyAccount">MyAccount</Link>
      <Outlet></Outlet>
    </div>
  );
};

export default Profile;
