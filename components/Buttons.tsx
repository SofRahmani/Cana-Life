import { Button } from "@nextui-org/button";
import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

export interface ButtonsProps {
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined;
  variant?: "light" | "shadow" | "flat" | "solid" | "bordered" | "faded" | "ghost" | undefined;
  radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
  content: string;
  otherClass?: string;
  isLoading?: boolean;
  click?: MouseEventHandler;
  href: string;
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
}

export default function Buttons({
  color,
  variant,
  isLoading = false,
  radius,
  content,
  otherClass,
  click,
  href,
  size,
  isDisabled,
  startContent,
  endContent,
}: ButtonsProps) {
  return (
    <Link href={`${href}`}>
      <Button
        color={color}
        variant={variant}
        isLoading={isLoading}
        radius={radius}
        className={` ${otherClass} `}
        onClick={click}
        size={size}
        isDisabled={isDisabled}
        startContent={startContent}
        endContent={endContent}
      >
        {content}
      </Button>
    </Link>
  );
}
