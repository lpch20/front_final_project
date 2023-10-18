import api from "./rule_API";

export const emailValidator = async (email) => {
  let url = "/emailAdd";
  try {
    const response = await api.post(url, email);
    return response.data;
  } catch (error) {
    throw (
      error.response.data.error ||
      "Mail incorrecto, porfavor intente nuevamente"
    );
  }
};
