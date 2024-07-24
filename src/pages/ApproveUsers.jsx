import React from "react";
import Table from "../components/Table";

const ApproveUsers = () => {
  return (
    <div className="max-w-[1300px] m-auto flex flex-col justify-center items-center pt-16  ">
      <h1 className="text-black font-bold text-3xl underline pb-5 ">
        Update Users Status
      </h1>
      <Table />
    </div>
  );
};

export default ApproveUsers;
