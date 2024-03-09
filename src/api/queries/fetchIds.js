import { refetch, sendApiRequest } from "../api";

export const fetchIds = async (setPending, setIds, offset = 1, limit = 50) => {
  setPending(true);
  const result = await sendApiRequest({
    action: "get_ids",
    params: { offset, limit },
  });

  refetch(() => fetchIds(setPending, setIds, offset, limit), result);

  if (Array.isArray(result)) {
    await setIds(result);
    await setPending(false);
  }
};
