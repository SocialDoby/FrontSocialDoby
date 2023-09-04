const deletePublicationService = async (publicationId, token) => {
    const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_PORT}/publications/${publicationId}`,
        {
            method: 'delete',
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

export default deletePublicationService;
