interface IconProps {
  height: number;
}

export default function ReactIcon({ height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      fill="none"
      viewBox="0 0 62 62"
    >
      <path
        stroke="#61DAFB"
        strokeWidth="2.785"
        d="M30.967 42.378c15.903 0 28.794-4.922 28.794-10.994 0-6.071-12.891-10.994-28.794-10.994-15.902 0-28.793 4.923-28.793 10.994 0 6.072 12.891 10.994 28.793 10.994z"
      ></path>
      <path
        stroke="#61DAFB"
        strokeWidth="2.785"
        d="M21.446 36.881c7.951 13.772 18.66 22.475 23.918 19.44 5.259-3.036 3.076-16.662-4.876-30.434-7.95-13.771-18.66-22.475-23.918-19.439-5.258 3.036-3.075 16.662 4.876 30.433z"
      ></path>
      <path
        stroke="#61DAFB"
        strokeWidth="2.785"
        d="M21.446 25.887c-7.95 13.772-10.134 27.397-4.875 30.433 5.258 3.036 15.966-5.667 23.917-19.439C48.44 23.11 50.623 9.484 45.364 6.448c-5.258-3.036-15.966 5.668-23.918 19.44z"
      ></path>
      <path
        fill="#61DAFB"
        d="M30.967 36.75a5.366 5.366 0 100-10.732 5.366 5.366 0 000 10.733z"
      ></path>
    </svg>
  );
}

ReactIcon.defaultProps = {
  height: 24,
};
