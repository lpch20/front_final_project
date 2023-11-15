import api from "./rule_API";

export const emailAdd = async (emailValue) => {
  let url = `https://back-senpai-project.vercel.app/api/verifymail?email=${emailValue}`;
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw (
      error.response.data.error 
    );
  }
};
