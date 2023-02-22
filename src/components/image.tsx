interface ImageProps {
  big?: boolean;
  right?: boolean;
  src: string;
  alt: string;
  height?: number;
  noShadow?: boolean;
}

export default function Image({
  big,
  right,
  src,
  alt,
  height,
  noShadow,
}: ImageProps) {
  return big ? (
    right ? (
      <div
        className={` w-full overflow-visible bg-transparent my-auto p-6 lg:p-0 float-left hidden lg:block ${
          height ? `h-[${height}px]` : `h-[460px]`
        }`}
      >
        <img
          className={`object-cover h-full object-left rounded-md lg:rounded-none lg:rounded-l-md bg-transparent ${
            noShadow ? null : `shadow-md`
          }`}
          src={src}
          alt={alt}
        />
      </div>
    ) : (
      <div
        className={` w-full overflow-visible bg-transparent my-auto p-6 lg:p-0 float-right hidden lg:block ${
          height ? `h-[${height}px]` : `h-[460px]`
        }`}
      >
        <img
          className={`object-cover h-full object-right rounded-md lg:rounded-none lg:rounded-r-md bg-transparent ${
            noShadow ? null : `shadow-md`
          }`}
          src={src}
          alt={alt}
        />
      </div>
    )
  ) : (
    <div
      className={`overflow-visible bg-transparent ${
        height ? `w-full lg:w-3/4` : ``
      } h-[${height}px] my-1 block lg:hidden`}
    >
      <img
        className={`object-cover h-full object-right w-auto ${
          noShadow ? null : `shadow-md`
        } rounded-md`}
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
