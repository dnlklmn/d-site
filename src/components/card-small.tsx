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
    <div className="w-full h-auto shadow-md rounded-md overflow-clip">
      <img className="object-cover w-full h-[160px]" src={img} />
      <div className="flex flex-col p-4 gap-3 h-auto">
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
