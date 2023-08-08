import React, { useEffect } from "react";
import "../../Styles/Home/Home.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, getAdmins } from "../../store/Registration/SignUp";
import useLocalStorage from "use-local-storage";

const Home = () => {
  const [dataAccount, setDataAccount] = useLocalStorage("DataAccount", null);
  const dispatch = useDispatch();
  const { _id } = useParams();

  useEffect(() => {
    if (dataAccount == null) {
      window.location = "/Signin";
    }
    if (dataAccount?.case == "user") {
      dispatch(getUsers());
    } else if (dataAccount?.case == "admin") {
      dispatch(getAdmins());
    }
  }, [dataAccount]);

  const { users, admins } = useSelector((state) => state);
  // console.log(users.users)
  console.log(dataAccount?._id);
  console.log(users.admins);

  return (
    <div className="Home">
      {dataAccount
        ? users.users &&
          users.users.map((user) => {
            return user._id == dataAccount._id ? (
              <div className="container">
                <div className="containerImage">
                  <img src={user.profilePicture} />
                </div>
                <div className="contanierBox">
                  <label>Name</label>
                  <span>{user.name}</span>
                  <label>Country</label>
                  <span>{user.country}</span>
                  <label>Phone</label>
                  <span>{user.phoneNumber}</span>
                </div>
                <div className="contanierBox">
                  <label>Email</label>
                  <span>{user.email}</span>
                  <label>Address</label>
                  <span>{user.address}</span>
                  <label>Case</label>
                  <span>{user.case}</span>
                </div>
              </div>
            ) : null;
          })
        : null}
      {dataAccount
        ? users.admins &&
          users.admins.map((admin) => {
            return admin._id == dataAccount._id ? (
              <div className="container">
                <div className="containerImage">
                  <img src={admin.profilePicture} />
                </div>
                <div className="contanierBox">
                  <label>Name</label>
                  <span>{admin.name}</span>
                  <label>Country</label>
                  <span>{admin.country}</span>
                  <label>Phone</label>
                  <span>{admin.phoneNumber}</span>
                </div>
                <div className="contanierBox">
                  <label>Email</label>
                  <span>{admin.email}</span>
                  <label>Address</label>
                  <span>{admin.address}</span>
                  <label>Case</label>
                  <span>{admin.case}</span>
                </div>
              </div>
            ) : null;
          })
        : null}
        <button onClick={() => setDataAccount(null)}>Logout</button>
    </div>
  );
};

export default Home;
