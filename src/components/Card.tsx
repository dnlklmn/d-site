interface CardProps {
  children: JSX.Element;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="p-8 w-fit rounded-md shadow-md bg-fill-primary">
      {children}
    </div>
  );
}
