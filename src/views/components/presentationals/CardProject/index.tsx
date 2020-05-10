import React from 'react';
import {Project} from '../../../../models/account';

import * as styles from './CardProject.module.css';

type Props = {
    key?: number;
    project: Project;
    onClick?: () => void;
    className?: string;
};

const CardProject: React.FC<Props> = ({ project, onClick, key, className }) => {
    return (
        <div key={key} onClick={onClick} className={`${styles.cardProject} ${className}`}>
            <div>
                {project.picture}
                <div>
                    <p className={styles.cardProjectName}>{project.name}</p>
                    <div>
                        <p className={styles.cardProjectAmount}>{project.amount}</p>
                        <p className={styles.cardProjectGoal}>{project.goal}</p>
                    </div>
                </div>
            </div>
            <div>progress</div>
        </div>
    )
};

export default CardProject;
