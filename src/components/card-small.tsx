interface CardSmallProps {
  children: any;
  linkText?: string;
  link?: string;
  img?: string;
}

export default function CardSmall({
  children,
  linkText,
  link,
  img,
}: CardSmallProps) {
  return (
    <div className="w-full shadow-md rounded-md overflow-clip h-full bg-white">
      <img className="object-cover w-full h-[120px]" src={img} />
      <div className="flex flex-col justify-between p-4 gap-3">
        {children}
        {linkText ? (
          <a className="link-2" href={link}>
            {linkText}
          </a>
        ) : null}
      </div>
    </div>
  );
}

CardSmall.defaultProps = {
  children: <p className="body-2 text-gray-400 ">Placeholder</p>,
};
