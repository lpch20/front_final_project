import api from "./rule_API";

export const allActivity = async (token) => {
  let url = "https://back-senpai-project.vercel.app/api/activity";
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
export const allMood = async (token) => {
  let url = "https://back-senpai-project.vercel.app/api/mood";
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
export const allWeather = async (token) => {
  let url = "https://back-senpai-project.vercel.app/api/weather";
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

export const allGender = async (token) => {
  let url = "https://back-senpai-project.vercel.app/api/gender";
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

export const contextualMusic = async (dataToSend, token) => {
  let url = "https://back-senpai-project.vercel.app/api/contextualPlaylist";
  try {
    const response = await api.post(url, dataToSend, {headers:{Authorization: token}});
    return response.data;
  } catch (error) {
    throw (
      error.response.data.error 
    );
  }
};