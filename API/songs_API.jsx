import api from "./rule_API";

export const allSongs = async () => {
  let url = "/songs";
  try {
    const result = await api.get(url);
    console.log(result);
    return result.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
export const topTwenty = async () => {
  let url = "/top20";
  try {
    const result = await api.get(url);
    console.log(result);
    return result.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
