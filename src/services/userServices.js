const userService = async (token) => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_PORT}/users`, {
        headers: {
            Authorization: token,
        },
    });

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }

    return body.data.user;
};

export default userService;
