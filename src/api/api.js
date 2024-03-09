import { API_HEADERS, API_URL } from "./config";

export const sendApiRequest = async (
  body,
  url = API_URL,
  headers = API_HEADERS
) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.status !== 200) throw new Error(response.status);

      return response.json().then(({ result }) => result);
    });

    return response;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export const refetch = (callback, result, retriesLeft = 10) => {
  if (result !== 200 && retriesLeft >= 1 && !Array.isArray(result)) {
    callback();
    retriesLeft--;
  }
};
