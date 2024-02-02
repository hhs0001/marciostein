export type Clinic = {
    key: string;
    name: string;
    location: string;
    details: string;
    position: [number, number]
};

import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};