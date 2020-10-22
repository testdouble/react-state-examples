import React from "react";
import { atom, selector, useRecoilValue, useRecoilState } from "recoil";

const itemsState = atom({
  key: "itemsState",
  default: [
    {
      description: "Don't be lazy, write the post of the week 😬",
      done: false
    }
  ]
});

const unfinishedItemsState = selector({
  key: "unfinishedItemsState",
  get: ({ get }) => {
    const items = get(itemsState);

    return items.filter(item => item.done === false);
  }
});

const unfinishedItemsCountState = selector({
  key: "unfinishedItemsCountState",
  get: ({ get }) => {
    const items = get(unfinishedItemsState);

    return items.length;
  }
});

const List = () => {
  const unfinishedItemsCount = useRecoilValue(unfinishedItemsCountState);
  const [items, setItems] = useRecoilState(itemsState);
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setItems(
      items.concat({
        description: value,
        done: false
      })
    );

    setValue("");
  };

  return (
    <>
      You have {unfinishedItemsCount} unfinished tasks!!
      {items.map((item, i) => (
        <div key={i}>{item.description}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <button disabled={!value}>Add</button>
      </form>
    </>
  );
};

export default List;
