const singlePublicationService = async (publicationId) => {
    const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_PORT}/publications/${publicationId}`
    );
    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }

    return body.data.publication;
};

export default singlePublicationService;
