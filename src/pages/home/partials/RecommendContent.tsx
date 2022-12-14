export default function RecommendContent({
  title,
  description,
  className,
  src,
}: {
  title: string;
  description: string;
  className?: string;
  src: string;
}) {
  return (
    <div
      className={
        "scroll-reveal m-auto flex w-full flex-col justify-between gap-10 md:flex-row " +
        className
      }
    >
      <div className="w-full max-w-lg">
        <h2 className="mb-5 text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <img
        src={src}
        alt="recommend"
        className="max-h-80 object-cover md:max-w-lg"
      />
    </div>
  );
}
