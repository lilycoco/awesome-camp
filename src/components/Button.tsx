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
        "bg-white text-black min-w-[220px] h-10 items-center justify-center flex m-auto border-2 border-black " +
        className
      }
      onClick={() => {}}
    >
      {label?.toUpperCase()}
    </button>
  );
}
