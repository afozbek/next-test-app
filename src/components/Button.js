import { useEffect, useState } from "react";

const Button = (props) => {
  const [status, setStatus] = useState("success");
  const [userList, setUserList] = useState([]);

  const { message, onClick } = props;

  useEffect(() => {
    if (message === "Test") {
      setStatus("loading");
    }

    fetchUserList();
  }, [message]);

  const fetchUserList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    setUserList(data);
    setStatus("success");
  };

  console.log({ userList });

  return (
    <div>
      <button
        onClick={(e) => {
          onClick();
        }}
      >
        {status === "success" ? message : "Loading..."}
      </button>

      <ul>
        {userList.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Button;
