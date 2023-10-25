import api from "./rule_API";

export const allActivity = async () => {
  let url = "/activity";
  try {
    const result = await api.get(url);
    console.log(result);
    return result.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
export const allMood = async () => {
  let url = "/mood";
  try {
    const result = await api.get(url);
    console.log(result);
    return result.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
export const allWeather = async () => {
  let url = "/weather";
  try {
    const result = await api.get(url);
    console.log(result);
    return result.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
export const allGender = async () => {
  let url = "/gender";
  try {
    const result = await api.get(url);
    console.log(result);
    return result.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
