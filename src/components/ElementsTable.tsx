import type { CSSProperties } from "react";
import { categories } from "../data/categories";
import type { ElementData } from "../types";

type ElementsTableProps = {
  elements: ElementData[];
  matchingTags: Set<string>;
  hasQuery: boolean;
  selectedElement: ElementData | null;
  onSelect: (element: ElementData | null) => void;
};

function getTagTextClass(tag: string) {
  const visibleLength = tag.length + 2;

  if (visibleLength > 10) return "text-[12px] tracking-[-.08em]";
  if (visibleLength > 8) return "text-[14px] tracking-[-.06em]";
  if (visibleLength > 6) return "text-[15px] tracking-[-.04em]";
  if (visibleLength > 4) return "text-[16px] tracking-[-.02em]";

  return "text-[17px]";
}

export function ElementsTable({
  elements,
  matchingTags,
  hasQuery,
  selectedElement,
  onSelect,
}: ElementsTableProps) {
  return (
    <section
      className="overflow-x-auto px-[3px] pb-3 pt-[3px]"
      aria-label="Periodic table of HTML elements"
    >
      <div className="grid min-w-[1755px] grid-cols-[repeat(18,minmax(0,1fr))] grid-rows-[repeat(8,63px)_25px_63px] gap-[7px] sm:grid-rows-[repeat(8,72px)_25px_72px]">
        {elements.map((element) => {
          const isSelected = selectedElement?.tag === element.tag;
          const isDimmed = hasQuery && !matchingTags.has(element.tag);
          return (
            <button
              className={[
                "element-card flex min-w-0 flex-col items-start justify-center overflow-hidden rounded-[7px] border bg-[var(--element-background)] p-[9px] text-left text-[var(--color-element-text)] transition duration-150 hover:z-10 hover:-translate-y-[3px] hover:shadow-[var(--shadow-element)]",
                isSelected
                  ? "is-selected z-10 -translate-y-[3px] shadow-[var(--shadow-element)]"
                  : "",
                isDimmed
                  ? "opacity-[.14] hover:translate-y-0 hover:shadow-none"
                  : "",
              ].join(" ")}
              style={
                {
                  gridArea: element.position,
                  "--element-background": `var(${categories[element.category].backgroundVariable})`,
                  "--element-accent": `var(${categories[element.category].accentVariable})`,
                } as CSSProperties
              }
              key={element.tag}
              onClick={() => onSelect(isSelected ? null : element)}
              aria-pressed={isSelected}
            >
              <span
                className={`element-tag whitespace-nowrap font-mono font-medium leading-tight ${getTagTextClass(element.tag)}`}
              >
                &lt;{element.tag}&gt;
              </span>
              <span className="element-label mt-[5px] w-full overflow-hidden text-ellipsis whitespace-nowrap text-[9px] text-[var(--color-element-label)]">
                {categories[element.category].name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
