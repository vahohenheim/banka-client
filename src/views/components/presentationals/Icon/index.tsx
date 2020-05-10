import React, {FunctionComponent} from "react";
import {arrowDegreesConfig, Icons, IconType} from "../../../../constants/icons";
import {IconConfig, DirectionIcon, degreeIconConfig} from "../../../../models/icons";

type Props = {
    id: IconType;
    size: number;
    className?: string;
    direction?: DirectionIcon;
}

interface IconComponent {
    size: number;
    rotation?: number;
    className?: string;
}

const findById = (value: IconType): IconConfig | undefined => {
    return Icons.find((icon) => value === icon.value);
}

const findRotation = (value: string): degreeIconConfig | undefined => {
    return arrowDegreesConfig.find((degree) => degree.direction === value);
}

const Icon: React.FC<Props> = ({ id, size, direction, className }) => {
    const icon: IconConfig | undefined = findById(id);
    const IconComponent: FunctionComponent<IconComponent> | undefined = icon?.component
    let rotation: number | undefined;

    if(direction) {
        rotation = findRotation(direction)?.value;
    }

    if(IconComponent) {
        return  <IconComponent size={size} rotation={rotation} className={className} />
    };
    return <p>Invalid Icon</p>
}

export default Icon;
