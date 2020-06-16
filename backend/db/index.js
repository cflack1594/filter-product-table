import { client } from "./client.js";

export const getAllProducts = async () => {
  try {
    await client.connect();

    const { insertedId } = await client
      .db("filter-products")
      .collection("products")
      .insert();

    return `New Listing created with the following id: ${insertedId}`;
  } catch (e) {
    throw Error(e);
  } finally {
    await client.close();
  }
};
