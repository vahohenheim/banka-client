import React, {CSSProperties, FunctionComponent} from "react";
import {arrowDegreesConfig, Icons, IconType} from "../../../../constants/icons";
import {IconConfig, DirectionIcon, degreeIconConfig} from "../../../../models/icons";

import * as styles from './Icon.module.css';

type Props = {
    id: IconType;
    size: number;
    className?: string;
    direction?: DirectionIcon;
    onClick?: void;
}

interface IconComponent {
    size: number;
    rotation?: number;
    className?: string;
    onClick?: void;
}

const findById = (value: IconType): IconConfig | undefined => {
    return Icons.find((icon) => value === icon.value);
}

const findRotation = (value: string): degreeIconConfig | undefined => {
    return arrowDegreesConfig.find((degree) => degree.direction === value);
}

const Icon: React.FC<Props> = ({ id, size, direction, className, onClick }) => {
    const icon: IconConfig | undefined = findById(id);
    const IconComponent: FunctionComponent<IconComponent> | undefined = icon?.component
    let rotation: number | undefined;

    if(direction) {
        rotation = findRotation(direction)?.value;
    }

    const containerSize: CSSProperties = {
        width: size,
        height: size
    };

    if(IconComponent) {
        return (
            <div className={[styles.container, className].join(' ')} style={containerSize} onClick={() => onClick}>
                <IconComponent className={styles.icon} size={size} rotation={rotation} />
            </div>
        )
    };
    return <p>Invalid Icon</p>
}

export default Icon;
