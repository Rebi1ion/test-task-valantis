import { refetch, sendApiRequest } from "../api";



export const fetchItems = async (ids, setItems, setPending) => {
  if (ids?.length === 0) return;
  setItems([]);
  setPending(true);

  const result = await sendApiRequest({
    action: "get_items",
    params: { ids },
  });

  refetch(() => fetchItems(ids, setItems, setPending), result);

  for (let i = 0; i < result?.length; i++) {
    for (let j = i + 1; j < result?.length; j++) {
      if (result[i]?.id === result[j]?.id && Array.isArray(result)) {
        result?.splice(j, 1);
        j--;
      }
    }
  }

  if (Array.isArray(result)) {
    await setItems(result);
    await setPending(false);
  }
};
