import { useState } from "react";

const useOption = (arr: string[]) => {
  const [items, setItems] = useState(
    arr.map((x) => ({ name: x, checked: false }))
  );

  const onAllClick = () => {
    setItems((prev) => prev.map((x) => ({ ...x, checked: !x.checked })));
  };

  const onItemClick = (item: string) => {
    setItems((prev) =>
      prev.map((x) => (x.name === item ? { ...x, checked: !x.checked } : x))
    );
  };

  return {
    items,
    onAllClick,
    onItemClick,
  };
};

export default useOption;
