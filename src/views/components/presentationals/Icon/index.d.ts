import React from "react";
import { IconType } from "../../../../constants/icons";
import { DirectionIcon } from "../../../../models/icons";
declare type Props = {
    id: IconType;
    size: number;
    className?: string;
    direction?: DirectionIcon;
};
declare const Icon: React.FC<Props>;
export default Icon;
