import api from "./rule_API";

export const allSongs = async (token) => {
  let url = "https://back-senpai-project.vercel.app/api/songs";
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
export const topTwenty = async (token) => {
  let url = "https://back-senpai-project.vercel.app/api/top20";
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
