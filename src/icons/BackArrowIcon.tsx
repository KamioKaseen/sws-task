import { FC } from "react";

interface BackArrowIconProps {
  className?: string;
}

export const BackArrowIcon: FC<BackArrowIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_3_4484)">
        <path d="M10 9V5L3 12L10 19V14.9C15 14.9 18.5 16.5 21 20C20 15 17 10 10 9Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_3_4484">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};


