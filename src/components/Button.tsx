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
        "m-auto flex h-10 min-w-[220px] items-center justify-center border-2 border-black bg-white text-black " +
        className
      }
      onClick={() => {}}
    >
      {label?.toUpperCase()}
    </button>
  );
}
