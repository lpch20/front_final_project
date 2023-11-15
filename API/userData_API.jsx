import api from "./rule_API";

export const userData = async (dataToSend) => {
  let url = "https://back-senpai-project.vercel.app/api/adduser";
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
  let url = `https://back-senpai-project.vercel.app/api/verifyuser?username=${usernameValue}`;
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
  let url = `https://back-senpai-project.vercel.app/api/dataUser`;

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

