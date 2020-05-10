import React from "react";
export interface IconConfig {
    value: string;
    component: React.FunctionComponent;
}
export interface degreeIconConfig {
    direction: string;
    value: number;
}
export declare type DirectionIcon = 'top' | 'right' | 'bottom' | 'left';
