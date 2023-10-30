import api from "./rule_API";

export const actualPlaylist = async () => {
    let url = "/playlist";
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