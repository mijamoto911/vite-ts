import JsonPlaceholderAPI from "../../api/JsonPlaceholderAPI/JsonPlaceholderAPI";

export const usersLoader = async ({ request: { signal } }) => {
  return await JsonPlaceholderAPI.getUsers({ signal });
};
