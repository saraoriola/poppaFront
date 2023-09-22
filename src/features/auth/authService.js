import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const register = async (userData) => {
    const res = await axios.post(API_URL + "/users/register", userData);
    return res.data;
};

const login = async (userData) => {
    const res = await axios.post(API_URL + "/users/login", userData);
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));
    }
    return res.data;
};

const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(API_URL + "/users/logout", {
        headers: {
            Authorization: token,
        },
    });
    if (res.data) {
        localStorage.clear();
    }
    return res.data;
};

//ESTO LO VAMOS A IMPLEMENTAR EN EL PERFIL, DE MOMENTO DEJARLO COMENTADO

// const uploadAvatar = async avatar => {
//   const token = JSON.parse(localStorage.getItem('token'));
//   const res = await axios.post(API_URL + '/users/avatar', avatar, {
//     headers: {
//       Authorization: token,
//     },
//   });
//   if (res.data) {
//     localStorage.setItem('user', JSON.stringify(res.data.user));
//   }
//   return res.data;
// };

const authService = {
    register,
    login,
    logout,

    //   uploadAvatar,
};

export default authService;
