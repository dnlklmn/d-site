interface IconProps {
  height: number;
}

export default function FigmaIcon({ height }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 22 32">
      <g clipPath="url(#clip0_190_129)">
        <path
          fill="#0ACF83"
          d="M5.314 32c2.933 0 5.313-2.39 5.313-5.333v-5.334H5.314c-2.932 0-5.312 2.39-5.312 5.334C.002 29.61 2.382 32 5.314 32z"
        ></path>
        <path
          fill="#A259FF"
          d="M.002 16c0-2.944 2.38-5.333 5.312-5.333h5.313v10.666H5.314C2.382 21.333.002 18.944.002 16z"
        ></path>
        <path
          fill="#F24E1E"
          d="M.002 5.333C.002 2.39 2.382 0 5.314 0h5.313v10.667H5.314c-2.932 0-5.312-2.39-5.312-5.334z"
        ></path>
        <path
          fill="#FF7262"
          d="M10.627 0h5.312c2.933 0 5.313 2.39 5.313 5.333 0 2.944-2.38 5.334-5.313 5.334h-5.312V0z"
        ></path>
        <path
          fill="#1ABCFE"
          d="M21.252 16c0 2.944-2.38 5.333-5.313 5.333-2.932 0-5.312-2.389-5.312-5.333 0-2.944 2.38-5.333 5.312-5.333 2.933 0 5.313 2.389 5.313 5.333z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_190_129">
          <path fill="#fff" d="M0 0H21.254V32H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

FigmaIcon.defaultProps = {
  height: 24,
};
