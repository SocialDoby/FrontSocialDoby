import defaultAvatar from '../../assets/images/defaultAvatar.jpg';
import PropTypes from 'prop-types';

const Avatar = ({ avatar, username }) => {
    return (
        <div className='avatar-image'>
            <img
                src={
                    avatar
                        ? `${import.meta.env.VITE_BACKEND_URL}${
                              import.meta.env.VITE_BACKEND_PORT
                          }/${avatar}`
                        : defaultAvatar
                }
                alt={`${username} avatar`}
            />
        </div>
    );
};

Avatar.propTypes = {
    avatar: PropTypes.any,
    username: PropTypes.string,
};

export default Avatar;
