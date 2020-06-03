export const get = async () => {
  try {
    let resp = await window.fetch(
      "https://my-json-server.typicode.com/Claim-Academy-JS/products/products"
    );

    return resp.json();
  } catch (error) {
    throw new Error(error);
  }
};
