import api from "./rule_API";

export const usernameVerify = async (usernameValue) => {
  let url = `https://back-senpai-project.vercel.app/api/verifyDataUser?username=${usernameValue}`;
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw (
      error.response.data.error
    );
  }
};

export const emailVerify = async (emailValue) => {
  let url = `https://back-senpai-project.vercel.app/api/verifyDataMail?email=${emailValue}`;
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw (
      error.response.data.error
    );
  }
};

export const passwordVerify = async (user) => {
  let url = `https://back-senpai-project.vercel.app/api/verifyDataPassword`;

  try {
    const response = await api.post(url, user);
    return response.data;
  } catch (error) {
    throw (
      error.response.data.error
    );
  }
};
