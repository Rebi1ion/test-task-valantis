import { useCallback, useState } from "react";
import "./Sidebar.css";
import { filterItems } from "../../api/queries/filterItems";
import { fetchIds } from "../../api/queries/fetchIds";

export default function Sidebar({ setIds, setIsFilter, setPending }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");

  const onNameInputChange = useCallback((value) => {
    setName(value);
    setPrice("");
    setBrand("");
  }, []);

  const onPriceInputChange = useCallback((value) => {
    setName("");
    setPrice(value);
    setBrand("");
  }, []);

  const onBrandInputChange = useCallback((value) => {
    setName("");
    setPrice("");
    setBrand(value);
  }, []);

  const onClickFilterButton = useCallback(async () => {
    await filterItems({ name, price, brand, setIds });
    setIsFilter(true);
  }, [name, price, brand, setIds, setIsFilter]);

  const onClickResetButton = useCallback(async () => {
    await fetchIds(setPending, setIds);
    setIsFilter(false);
    setName("");
    setPrice("");
    setBrand("");
  }, [setIds, setIsFilter, setPending]);

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Фильтр по одному параметру</h2>
      <input
        onChange={(e) => {
          onNameInputChange(e.target.value);
        }}
        value={name}
        type="text"
        placeholder="Название"
      />

      <input
        onChange={(e) => {
          onPriceInputChange(+e.target.value);
        }}
        value={price}
        type="number"
        placeholder="Цена"
      />

      <input
        onChange={(e) => {
          onBrandInputChange(e.target.value);
        }}
        value={brand}
        type="text"
        placeholder="Бренд"
      />
      <button onClick={onClickFilterButton} className="sidebar-button">
        Фильтровать
      </button>
      <button onClick={onClickResetButton} className="sidebar-button">
        Убрать фильтрацию
      </button>
    </div>
  );
}
