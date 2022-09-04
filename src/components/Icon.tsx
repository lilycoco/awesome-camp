export default function Icon({
  src,
  href,
  alt,
  className,
  size = 4,
}: {
  src?: string;
  href?: string;
  alt?: string;
  className?: string;
  size?: number;
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
        className={`h-${size} max-w-none object-cover hover:scale-105`}
      />
    </a>
  );
}
