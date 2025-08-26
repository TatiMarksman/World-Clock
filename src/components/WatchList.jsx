import Watch from "./Watch";

export default function WatchList({ watches, onRemove }) {
  return (
    <>
      {watches.map((watch) => (
        <Watch
          key={watch.id}
          id={watch.id}
          city={watch.city}
          timezone={watch.timezone}
          onRemove={onRemove}
        />
      ))}
    </>
  );
}
