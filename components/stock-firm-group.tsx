"use client";

import useOption from "@/hooks/useOption";

const StockFirmGroup = () => {
  const { items, onItemClick } = useOption([
    "하나",
    "키움",
    "KB",
    "한국투자",
    "농협",
    "SK",
    "이베스트",
    "대신",
    "한화",
    "미래에셋",
    "하이",
    "IBK",
  ]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((s) => (
        <div
          key={s.name}
          className={`cursor-pointer w-40 h-12 rounded-md text-white flex justify-center items-center ${
            s.checked
              ? "bg-slate-600 hover:bg-slate-800"
              : "bg-slate-300 hover:bg-slate-400"
          }`}
          onClick={(e) => onItemClick(s.name)}
        >
          <input
            type="checkbox"
            className="cursor-pointer border-none"
            checked={s.checked}
          />
          <span className="w-24 text-center">{s.name}</span>
        </div>
      ))}
    </div>
  );
};

export default StockFirmGroup;
