const editRecoverPassCodeService = async (recoverPassCode, newPass) => {
    try {
        const res = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_PORT}/users/password/recover`,
            {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    recoverPassCode,
                    newPass,
                }),
            }
        );

        const body = await res.json();

        if (!res.ok) {
            return body.message;
        }

        return body.message;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default editRecoverPassCodeService;
