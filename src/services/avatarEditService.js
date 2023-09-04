const avatarEditService = async (avatar, token) => {
    const formData = new FormData();
    formData.append('avatar', avatar);

    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_PORT}/users/avatar`, {
        method: 'put',
        headers: {
            Authorization: token,
        },
        body: avatar,
    });

    return response.data;
};

export default avatarEditService;
