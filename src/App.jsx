import usersData from './data/users.json'
import UserList from './components/UserList'
import AverageAge from './components/AverageAge'

const App = () => {

  const calcAdminAverage = (users) => {
    let average = [];
    for (const user of users) {
      if (user.role === "admin") {
        average.push(user.age);
      }
    }

    return average.reduce((sum, nextValue) => sum += nextValue) / average.length;
  };

  const extractUsers = (users) => {
    let newUsers = [...users];

    for (let i = newUsers.length - 1; i >= 0; i--) {
      if (newUsers.at(i).role === 'admin') {
        newUsers.splice(i, 1);
      }
    }

    console.log(newUsers);

    return newUsers;
  }

  const newUsers = extractUsers(usersData);
  const adminAverage = calcAdminAverage(usersData);

  return (
    <>
      <UserList users={newUsers} />
      <AverageAge average={adminAverage} />
    </>
  )
}

export default App
