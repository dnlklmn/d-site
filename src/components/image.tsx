interface ImageProps {
  big?: boolean;
  right?: boolean;
  src: string;
  alt: string;
  height?: number;
}

export default function Image({ big, right, src, alt, height }: ImageProps) {
  return big ? (
    right ? (
      <div
        className={`overflow-visible ${
          height ? `w-full lg:w-3/4 my-auto` : ``
        } p-6 lg:p-0 float-left h-[${height}px] hidden lg:block`}
      >
        <img
          className="object-cover h-full object-left w-auto shadow-md rounded-md lg:rounded-none lg:rounded-l-md"
          src={src}
          alt={alt}
        />
      </div>
    ) : (
      <div
        className={`overflow-visible ${
          height ? `w-full lg:w-3/4 my-auto` : ``
        } p-6 lg:p-0 float-right self-center h-[${height}px] hidden lg:block`}
      >
        <img
          className="object-cover h-full object-right w-auto shadow-md rounded-md lg:rounded-none lg:rounded-r-md"
          src={src}
          alt={alt}
        />
      </div>
    )
  ) : (
    <div
      className={`overflow-visible ${
        height ? `w-full lg:w-3/4` : ``
      } h-[${height}px] my-1 block lg:hidden`}
    >
      <img
        className="object-cover h-full object-right w-auto shadow-md rounded-md"
        src={src}
        alt={alt}
      />
    </div>
  );
}

Image.defaultProps = {
  src: "https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/componentsInFigma.png?alt=media&token=060d3324-3dda-4951-bcea-87b523dca842",
  alt: "Documenting Decisions",
};
