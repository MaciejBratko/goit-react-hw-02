import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends, className }) => (
  <ul className={clsx(styles.friendList, className)}>
    {friends.map(({ id, ...props }) => (
      <li
        key={id}
        className={clsx(
          styles.friendItem,
          styles[props.isOnline ? "online" : "offline"]
        )}
      >
        <FriendListItem {...props} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default FriendList;
