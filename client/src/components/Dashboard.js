import React,{useEffect} from "react";
import { AddMatch } from "./AddMatch";
import FilterGetMatch from "./FilterGetMatch";
import { useSelector, useDispatch } from "react-redux";
import {getAuthUser} from "../redux/actions"
const Dashboard = () => {
  const dispatch=useDispatch()

  const auth = () => dispatch(getAuthUser());

  useEffect(() => {
    auth();
  }, []);

  const user = useSelector((state) => state.user);
  {/*Add match only for Admin */}
  if (!user) {
    return <div>Loading...</div>; // or handle undefined user state
  }
  const admin = (
    <div>
      <nav className="navBarMatch">
        <AddMatch />
      </nav>
      <div>
        <FilterGetMatch />
      </div>
    </div>
  );

  const normalUser = (
    <div>
      <FilterGetMatch />
    </div>
  );

  return <>{user.isAdmin ? admin : normalUser}</>;
};

export default Dashboard;
