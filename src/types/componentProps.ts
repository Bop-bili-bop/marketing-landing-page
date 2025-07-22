import type { ReactNode } from "react";

// interfaces here
export interface FeatureProps {
    vertical: boolean;
    featureHeader: string;
    featureDescription: string;
    icon: string;
  }
export interface SectionFeatureProps {
    children?: ReactNode;
    tagLabel: string;
    sectionHeader: string;
    sectionDescription: string;
    img?: string;
    reverseRowDirection?: boolean
  }
export interface BurgerIconProps{
  className: string;
  onClick: () => void;
}
export interface BurgerMenuProps{
  isOpen: boolean;
}
export interface ButtonProps {
  variant: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
export interface LinksNavProps {
  className: string;
}
export interface MainProps {
  children: ReactNode
}