const likePublicationService = async (publicationId, likedByMe, token) => {
    const method = likedByMe ? 'delete' : 'post';

    const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_PORT}/publications/${publicationId}/likes`,
        {
            method,
            headers: {
                Authorization: token,
            },
        }
    );

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }
};

export default likePublicationService;
