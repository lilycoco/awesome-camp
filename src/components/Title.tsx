export default function Title({
  enLabel,
  jaLabel,
  className,
}: {
  enLabel: string;
  jaLabel?: string;
  className?: string;
}) {
  return (
    <h1
      className={
        "mb-14 w-fit font-oleo text-6xl leading-normal md:mb-20 " + className
      }
    >
      {enLabel}
    </h1>
  );
}
