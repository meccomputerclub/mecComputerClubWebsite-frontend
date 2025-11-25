export default function CategorySidebar({
  categories,
  selected,
  onSelect,
}: {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
}) {
  return (
    <aside className="bg-white dark:bg-[#181F2A] rounded-2xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-[#232B3E]">
      <h4 className="font-bold text-lg mb-4 text-[#0B1437] dark:text-white">
        Category
      </h4>
      <ul className="flex flex-col gap-2">
        <li>
          <button
            className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-colors ${
              selected === "All"
                ? "bg-[#009FFF] text-white"
                : "text-[#0B1437] dark:text-white hover:bg-[#F7FAFF] dark:hover:bg-[#232B3E]"
            }`}
            onClick={() => onSelect("All")}
          >
            All
          </button>
        </li>
        {categories.map((cat) => (
          <li key={cat}>
            <button
              className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-colors ${
                selected === cat
                  ? "bg-[#009FFF] text-white"
                  : "text-[#0B1437] dark:text-white hover:bg-[#F7FAFF] dark:hover:bg-[#232B3E]"
              }`}
              onClick={() => onSelect(cat)}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
