import Watch from "./Watch";

export default function WatchList({ watches, onRemove }) {
  return (
    <div>
      {watches.map((w) => (
        <Watch
          key={w.city}
          city={w.city}
          timezone={w.timezone}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
