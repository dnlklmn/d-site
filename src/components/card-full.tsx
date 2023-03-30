import { Link } from "react-router-dom";

interface CardFullProps {
  title: string;
  subtitle?: string;
  imageURL?: string;
  to: string;
}

export default function CardFull({
  title,
  subtitle,
  imageURL,
  to,
}: CardFullProps) {
  return (
    <Link
      className="w-full h-[240px] hover:scale-[1.01] transition-all duration-300"
      to={to}
    >
      <div
        className={`h-full group bg-cover rounded-md overflow-clip shadow-md hover:shadow-lg transition-shadow duration-300`}
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      >
        <div className="bg-gradient-to-tr  from-[color:#584288CC] to-[color:#99168CCC] bg-cover flex flex-col  gap-2 text-[color:var(--fg-always-light)] w-full h-full p-4 justify-end backdrop-blur-sm opacity-100 group-hover:opacity-0 transition-all duration-300">
          <p className="h5 ">
            <i>{title}</i>
          </p>
          <p className="body-2 group-hover:opacity-0 transition-opacity duration-300">
            {subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
}

CardFull.defaultProps = {
  title: "Card Title",
  subtitle: "Design System",
  imageURL:
    "https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/this-site.png?alt=media&token=1245c8cd-601c-4069-a042-2807633524ab",
  to: "/",
};
