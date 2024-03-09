import { useCallback, useEffect, useState } from "react";
import Item from "../Item/Item";
import "./ItemsList.css";
import { fetchIds } from "../../api/queries/fetchIds";
import { fetchItems } from "../../api/queries/fetchItems";

export default function ItemsList({ offset, setPending, idsObject }) {
  const { ids, setIds } = idsObject;
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchIds(setPending, setIds, offset);
  }, [offset, setIds, setPending]);

  useEffect(() => {
    fetchItems(ids, setItems, setPending);
  }, [ids, setPending]);

  const showItems = useCallback(() => {
    return items?.map((item) => (
      <Item
        id={item?.id}
        name={item?.product}
        brand={item?.brand}
        price={item.price}
        key={item?.id}
      />
    ));
  }, [items]);

  return <ul className="items-list">{showItems()}</ul>;
}
