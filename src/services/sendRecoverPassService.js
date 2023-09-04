const sendRecoverPassService = async (email) => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_PORT}/users/password/recover`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
        }),
    });

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }
};

export default sendRecoverPassService;
