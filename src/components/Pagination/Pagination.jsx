import "./Pagination.css";

export default function Pagination({
  setOffset,
  maxPage,
  offset = 1,
}) {
  return (
    <div className="pagination">
      <button
        className={`arrow arrow_left ${offset === 1 && "disabled"}`}
        onClick={() => {
          setOffset(offset - 1);
        }}
      />
      <h2>{offset}</h2>
      <button
        className={`arrow arrow_right ${offset === maxPage && "disabled"}`}
        onClick={() => {
          setOffset(offset + 1);
        }}
      />
    </div>
  );
}
