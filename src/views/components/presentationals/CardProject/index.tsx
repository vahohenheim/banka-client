import React from 'react';
import {Project} from '../../../../models/account';

import * as styles from './CardProject.module.css';
import {PricePipe} from "../../../../utils/pipes";

type Props = {
    key?: number;
    project: Project;
    onClick?: () => void;
    className?: string;
};

const CardProject: React.FC<Props> = ({ project, onClick, key, className }) => {
    console.log(className)
    return (
        <div key={key} onClick={onClick} className={`${styles.container} ${className}`}>
            <div className={styles.content}>
                <img className={styles.picture} src={project.picture} />
                <div className={styles.data}>
                    <p className={styles.name}>{project.name}</p>
                    <div className={styles.balance}>
                        <p className={styles.amount}>{PricePipe(project.amount)} </p>
                        <p className={styles.goal}>/{PricePipe(project.goal)}</p>
                    </div>
                </div>
            </div>
            <div className={styles.progress}></div>
        </div>
    )
};

export default CardProject;
