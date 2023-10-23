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
