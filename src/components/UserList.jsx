import UserItem from './UserItem'
import PropTypes, { arrayOf } from 'prop-types'

const UserList = ({ users }) => {
  return (
    <>
      {users.map((value, index) => {
        return <UserItem name={value.name} key={index} />
      })}
    </>
  )
}

export default UserList;

// UserList.propTypes = PropTypes.arrayOf(
//   PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number
//   })
// ).isRequired;
