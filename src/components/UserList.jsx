import UserItem from "./UserItem";
import PropTypes, { arrayOf } from "prop-types";

const UserList = ({ users }) => {
  return (
    <>
      {users.map((value) => {
        return <UserItem name={value.name} key={value.age} />;
      })}
    </>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number,
    })
  ).isRequired,
};
export default UserList;
