import PropTypes from 'prop-types';
import { useTheme } from '../../../contexts/ThemeContext';

const PublicationBody = ({ title, photoName, videoName, description }) => {
    const { isDarkMode } = useTheme();

    return (
        <div className={`photo-info ${isDarkMode ? 'dark' : 'light'}`}>
            {photoName && (
                <img
                    src={`${import.meta.env.VITE_BACKEND_URL}${
                        import.meta.env.VITE_BACKEND_PORT
                    }/${photoName}`}
                    alt='Imagen de la publicación'
                />
            )}
            {videoName && (
                <video
                    controls
                    controlsList='nodownload noremoteplayback'
                    loop
                    autoPlay
                    muted
                >
                    <source
                        src={`${import.meta.env.VITE_BACKEND_URL}${
                            import.meta.env.VITE_BACKEND_PORT
                        }/${videoName}`}
                        type='video/mp4'
                    />
                    Tu navegador no admite el video.
                </video>
            )}
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
        </div>
    );
};

PublicationBody.propTypes = {
    title: PropTypes.string,
    photoName: PropTypes.string,
    videoName: PropTypes.string,
    description: PropTypes.string,
};

export default PublicationBody;
