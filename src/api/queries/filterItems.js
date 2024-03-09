import { refetch, sendApiRequest } from "../api";

export const filterItems = async ({ name, price, brand, setIds }) => {
  let params = {};
  if (name) params.product = name;
  if (price) params.price = price;
  if (brand) params.brand = brand;

  if (Object.keys(params).length === 0) return;

  const result = await sendApiRequest({
    action: "filter",
    params,
  });

  refetch(() => filterItems({ name, price, brand, setIds }), result);

  setIds(result);
};
