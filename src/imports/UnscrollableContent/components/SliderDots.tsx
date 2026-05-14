export function SliderDots({ insets, current, onSelect }: { insets: string[]; current: number; onSelect: (i: number) => void; }) {
  return (
    <div className="absolute contents">
      {insets.map((inset, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className="absolute block cursor-pointer"
          style={{ inset }}
        >
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" fill="white" fillOpacity={i === current ? 1 : 0.5} r="6" />
          </svg>
        </button>
      ))}
    </div>
  );
}
