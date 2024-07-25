import React from "react";
import { AddMatch } from "./AddMatch";
import FilterGetMatch from "./FilterGetMatch";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const user = useSelector((state) => state.user);
  console.log(user.isAdmin)
  {/*Add match only for Admin */}
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
