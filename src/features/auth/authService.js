import axios from "axios";

const API_URL = "http://localhost:3001/users/";

const register = async (userData) => {
  const res = await axios.post(API_URL + "register", userData);
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(API_URL + "login", userData);
  if (res.data) {
    localStorage.setItem("userConnected", JSON.stringify(res.data.user));
    localStorage.setItem("token", JSON.stringify(res.data.token));
  }
  return res.data;
};

const logout = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.delete(API_URL + "logout", {
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
