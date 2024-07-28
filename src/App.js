import { Toaster } from "react-hot-toast";
import ApproveUsers from "./pages/ApproveUsers";
import { useEffect, useState } from "react";
import Login from "./pages/Login";

// Function to set item in localStorage and dispatch an event
const setItemInLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
  const event = new Event("storageChange");
  window.dispatchEvent(event);
};

function App() {
  const [isUser, setUser] = useState(localStorage.getItem("email"));

  useEffect(() => {
    const handleStorageChange = () => {
      const email = localStorage.getItem("email");
      setUser(email ? true : false);
    };

    // Add event listener for the custom storage change event
    window.addEventListener("storageChange", handleStorageChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("storageChange", handleStorageChange);
    };
  }, [isUser]);

  return (
    <div>
      <Toaster />
      {isUser ? (
        <ApproveUsers setUser={setUser} />
      ) : (
        <Login
          setItemInLocalStorage={setItemInLocalStorage}
          setUser={setUser}
        />
      )}
    </div>
  );
}

export default App;
