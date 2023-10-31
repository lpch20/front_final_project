import api from "./rule_API";

export const userData = async (dataToSend) => {
  let url = "/adduser";
  try {
    const response = await api.post(url, dataToSend);
    return response.data;
  } catch (error) {
    throw (
      error.response.data.error ||
      "Mail incorrecto, porfavor intente nuevamente"
    );
  }
};

export const usernameVerify = async (usernameValue) => {
  let url = `/verifyuser?username=${usernameValue}`;
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw (
      error.response.data.error ||
      "Mail incorrecto, porfavor intente nuevamente"
    );
  }
};

export const getUserPlaylists = async (token) => {
  let url = `/dataUser`;
  // ?token=${token}`;
  try {
    const result = await api.get(url, {
      headers: { Authorization: token },
    });
    console.log(result);
    return result.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
// export const usersName = async (token) => {
//   let url = `/userName`;
//   try {
//     const result1 = await api.get(url, {
//       headers: { Authorization: token },
//     });
//     console.log(result1);
//     return result1.data;
//   } catch (error) {
//     throw error.response.data.error;
//   }
// };
