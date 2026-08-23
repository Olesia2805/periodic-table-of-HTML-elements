type ElementsHeaderProps = {
  query: string;
  onQueryChange: (query: string) => void;
};

export function ElementsHeader({ query, onQueryChange }: ElementsHeaderProps) {
  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
      <h1 className="font-display text-[38px] font-bold leading-[.98] tracking-[-.05em] text-[#232938] sm:text-[clamp(32px,4vw,55px)]">
        Periodic Table{" "}
        <span className="font-semibold text-[#68718d]">of HTML Elements</span>
      </h1>
      <label className="flex h-[50px] w-full items-center gap-2 border border-[#e0e3ec] bg-white px-3.5 shadow-[0_5px_20px_rgba(36,41,56,.05)] outline-none transition focus-within:border-[#707bd4] focus-within:shadow-[0_0_0_3px_#707bd426] sm:w-[395px]">
        <span
          className="-rotate-[20deg] text-[25px] leading-none text-[#747d98]"
          aria-hidden="true"
        >
          ⌕
        </span>
        <input
          className="min-w-0 flex-1 border-0 bg-transparent text-sm text-[#252b3a] outline-none placeholder:text-[#9ba2b5]"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Filter elements, tags, categories…"
          aria-label="Filter HTML elements"
        />
        {query && (
          <button
            className="text-[22px] leading-none text-[#9ba2b5]"
            onClick={() => onQueryChange("")}
            aria-label="Clear filter"
          >
            ×
          </button>
        )}
      </label>
    </header>
  );
}
