export default function Icon({
  src,
  href,
  alt,
}: {
  src?: string;
  href?: string;
  alt?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} className="h-4 max-w-none object-cover" />
    </a>
  );
}
