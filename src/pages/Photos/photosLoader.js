import JsonPlaceholderAPI from "../../api/JsonPlaceholderAPI/JsonPlaceholderAPI";

export const photosLoader = async ({ request: { signal } }) => {
  return await JsonPlaceholderAPI.getPhotos({ signal });
};
