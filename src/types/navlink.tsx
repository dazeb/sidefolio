import type { ComponentType, SVGProps } from "react";

export type Navlink = {
  href: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
