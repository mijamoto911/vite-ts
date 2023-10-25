import JsonPlaceholderAPI from "../../api/JsonPlaceholderAPI/JsonPlaceholderAPI";

export const userDetailsLoader = async ({
  params: { userId },
  request: { signal },
}) => {
  return await JsonPlaceholderAPI.getUser({ signal, userId });
};
