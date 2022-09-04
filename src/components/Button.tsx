export default function Button({
  url,
  label,
  className,
}: {
  url?: string;
  label?: string;
  className?: string;
}) {
  return (
    <button
      className={
        "m-auto flex h-12 min-w-[200px] items-center justify-center rounded-full bg-warmGray-400 font-bold text-white shadow-md hover:bg-warmGray-600 " +
        className
      }
      onClick={() => {}}
    >
      {label?.toUpperCase()}
    </button>
  );
}
