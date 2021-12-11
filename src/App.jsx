import usersData from "./data/users.json";
import UserList from "./components/UserList";
import AverageAge from "./components/AverageAge";

const App = () => {
  const users = usersData.filter((user) => {
    return user.role === "user";
  });

  const adminAges = usersData
    .filter((user) => {
      return user.role === "admin";
    })
    .map((admin) => admin.age);

  const average = parseInt(
    adminAges.reduce((accumulator, a) => {
      return accumulator + a;
    }, 0) / adminAges.length
  );

  return (
    <>
      <UserList users={users} />
      <AverageAge average={average} />
    </>
  );
};

export default App;
