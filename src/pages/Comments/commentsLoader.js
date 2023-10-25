import JsonPlaceholderAPI from "../../api/JsonPlaceholderAPI/JsonPlaceholderAPI";

export const commentsLoader = async ({ request: { signal } }) => {
  return await JsonPlaceholderAPI.getComments({ signal });
};
