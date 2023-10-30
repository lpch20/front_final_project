import api from "./rule_API";

export const actualPlaylist = async (dataToSend) => {
    let url = "/playlist";
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