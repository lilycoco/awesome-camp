import { Link } from "react-router-dom";

export default function PlanContent({
  title,
  description,
  className,
  src,
  url,
}: {
  title: string;
  description: string;
  className?: string;
  src: string;
  url: string;
}) {
  return (
    <Link className="relative md:w-1/2 " to={url}>
      <div className="gradation relative">
        <img src={src} alt="top" className="w-auto brightness-110 filter" />
      </div>
      <div className="absolute top-5 left-5 font-['Noto_Sans'] text-white md:top-10 md:left-10">
        <p className="mb-3 text-5xl font-extrabold">{title}</p>
        <p className="mb-4">{description}</p>
      </div>
    </Link>
  );
}
