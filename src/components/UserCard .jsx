import PropTypes from "prop-types";
function UserCard({ name, email }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{email}</p>
    </>
  );
}
UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
export default UserCard;
