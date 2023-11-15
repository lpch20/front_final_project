import api from "./rule_API";

export const actualPlaylist = async (token) => {
  let url = "https://back-senpai-project.vercel.app/api/playlist";
  try {
    const response = await api.get(url, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    throw (
      error.response.data.error 
    );
  }
};
