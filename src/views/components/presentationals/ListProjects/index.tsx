import React from 'react'
import {Project} from '../../../../models/account'
import CardProject from "../CardProject";

import * as styles from './ListProjects.module.css';

type Props = {
    projects: Project[];
}

const ListProjects: React.FC<Props> = ({ projects }) => {

    return (
        <div className={styles.container}>
            {projects.map((project) => (
                <CardProject key={project.id} project={project} />
            ))}
        </div>
    )
};

export default ListProjects;
