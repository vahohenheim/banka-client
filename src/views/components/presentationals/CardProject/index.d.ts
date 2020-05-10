import React from 'react';
import { Project } from '../../../../models/account';
declare type Props = {
    key?: number;
    project: Project;
    onClick?: () => void;
    className?: string;
};
declare const CardProject: React.FC<Props>;
export default CardProject;
