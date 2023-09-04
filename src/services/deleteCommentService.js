const deleteCommentService = async (publicationId, commentId, token) => {
    const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_PORT}/publications/${publicationId}/comments/${commentId}`,
        {
            method: 'delete',
            headers: {
                Authorization: token,
            },
        }
    );

    const body = await res.json();

    if (!body.ok) {
        throw new Error(body.message);
    }
};

export default deleteCommentService;
