import api from "./rule_API";

export const cupidoMusic = async (dataToSend, token) => {
  let url = "https://back-senpai-project.vercel.app/api/cupidoPlaylist";
  try {
    const response = await api.post(url, dataToSend, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    throw (
      error.response.data.error 
    );
  }
};
