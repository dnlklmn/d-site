interface VideoProps {
  src: string;
  showLg?: boolean;
}

export default function Video({ src, showLg }: VideoProps) {
  return (
    <video
      controls
      autoPlay
      loop
      muted
      className={`rounded-none shadow-md lg:rounded-md ${
        showLg ? `hidden lg:block` : `block lg:hidden`
      }`}
    >
      <source src={src} type="video/mp4"></source>
    </video>
  );
}

Video.defaultProps = {
  src: "https://firebasestorage.googleapis.com/v0/b/d-site-8d30a.appspot.com/o/commit%20tokens.mp4?alt=media&token=354899e9-71ff-4b12-8e03-2217d0656316",
};
