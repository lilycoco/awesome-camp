export default function Icon({
  src,
  href,
  alt,
  className,
}: {
  src?: string;
  href?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <img
        src={src}
        alt={alt}
        className="h-4 max-w-none object-cover hover:scale-105"
      />
    </a>
  );
}
