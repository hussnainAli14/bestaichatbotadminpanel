import React from "react";
import Table from "../components/Table";
import Button from "../components/buttons";

const ApproveUsers = ({ setUser }) => {
  return (
    <div className="max-w-[1300px] m-auto flex flex-col justify-center items-center pt-16  ">
      <Button
        buttonType="danger"
        buttonText="Logout"
        buttonAction={() => {
          localStorage.clear();
          setUser(false);
        }}
      />
      <h1 className="text-black font-bold text-3xl underline pb-5 ">
        Update Users Status
      </h1>
      <Table />
    </div>
  );
};

export default ApproveUsers;
