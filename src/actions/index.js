import { GET } from "./APIMethods";

export const FETCH_PRODUCTS = async () => {
  const url = "http://localhost:7650/products";
  const APIResponse = await GET(url);
  if (APIResponse.error) {
    return [];
  }
  if (APIResponse.data) {
    return APIResponse.data;
  }
  return [];
};
