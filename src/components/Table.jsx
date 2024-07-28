import React, { useEffect, useState } from "react";
import { headItems } from "../data";
import { getAllUsers, getPendingUsers } from "../utils/getUsers";
import Button from "./buttons";
import {
  approveUser,
  deleteUser,
  unApproveUser,
} from "../utils/updateUserStatus";
import toast from "react-hot-toast";
import Loader from "react-js-loader";
import DataLoader from "./loaders/DataLoader";
const TableHead = () => {
  return (
    <thead>
      <tr>
        {headItems.map((item) => (
          <th
            className="border-e-2 border-b-2 border-solid border-black items-start "
            key={item}
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const Column = ({ content }) => {
  return (
    <td className="border-e-2 border-b-2 border-solid border-black  px-5 items-center text-center ">
      {content}
    </td>
  );
};

const TableBody = ({ setLoading, setUpdateFlag, users }) => {
  return (
    <tbody>
      {users?.map((user) => (
        <tr key={user.email}>
          <Column content={user.name} />
          <Column content={user.email} />
          <Column content={user.status} />
          <Column content={user.userType} />

          <Column content={user.totalSpent} />
          <Column content={user.lastMonthSpent} />
          <Column content={user.date} />

          <Column
            content={
              user.status === "pending" ? (
                <Button
                  buttonText={"Approve"}
                  buttonType={"primary"}
                  buttonAction={() => {
                    approveUser(user.email, setLoading, setUpdateFlag);
                  }}
                />
              ) : (
                <div className="flex flex-row gap-5 items-center justify-center">
                  <Button
                    buttonText={"Un Approve"}
                    buttonType={"secondary"}
                    buttonAction={() => {
                      unApproveUser(user.email, setLoading, setUpdateFlag);
                    }}
                  />
                  <Button
                    buttonText={"Delete"}
                    buttonType={"danger"}
                    buttonAction={() => {
                      deleteUser(user.email, setLoading, setUpdateFlag);
                    }}
                  />
                </div>
              )
            }
          />
        </tr>
      ))}
    </tbody>
  );
};

const Table = () => {
  const [users, setUsers] = useState([]);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPendingUsers = async () => {
      setLoading(true);
      try {
        const pendingUsers = await getPendingUsers();
        const allUsers = await getAllUsers();
        const combinedUsers = [...pendingUsers, ...allUsers];

        const uniqueUsers = combinedUsers.reduce((acc, user) => {
          const email = user[1];
          if (!acc.some((u) => u[1] === email)) {
            acc.push(user);
          }
          return acc;
        }, []);

        if (uniqueUsers?.length > 0) {
          const formattedUsers = uniqueUsers.map((user) => ({
            name: user[0],
            email: user[1],
            totalSpent: 0,
            lastMonthSpent: 0,
            userType: "User 1",
            date: Date.now(),
            status: user[2] ? user[2] : "approved",
          }));

          console.log(formattedUsers);
          setUsers(formattedUsers);
        }
      } catch (error) {
        toast.error(error.message || "Error fetching users.");
      } finally {
        setLoading(false);
      }
    };

    fetchPendingUsers();
  }, [updateFlag]);
  return loading ? (
    <DataLoader />
  ) : (
    <table className="border-solid border-2 border-black p-4 w-full ">
      <TableHead />
      <TableBody
        setLoading={setLoading}
        setUpdateFlag={setUpdateFlag}
        users={users}
      />
    </table>
  );
};

export default Table;
