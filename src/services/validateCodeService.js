const validateCodeService = async (regCode, setActive) => {
    try {
        const res = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_PORT}/users/validate/${regCode}`,
            {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        const body = await res.json();

        if (!res.ok) {
            throw new Error(body.message);
        }

        setActive(true); // Actualiza el estado active a true

        return body.data.message;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default validateCodeService;
