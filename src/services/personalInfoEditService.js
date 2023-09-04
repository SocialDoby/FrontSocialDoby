const personalInfoEditService = async (personalInfo, token) => {
    const formData = new FormData();

    formData.append('personalInfo', personalInfo);

    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_PORT}/users/info`, {
            method: 'PUT',
            headers: {
                Authorization: token,
            },
            body: formData,
        });

        const body = await res.json();

        if (!res.ok) {
            throw new Error(body.message);
        }

        return body.data && body.data.message;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default personalInfoEditService;
