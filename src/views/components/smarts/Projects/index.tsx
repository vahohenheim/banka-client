import React from 'react'
import {Project} from '../../../../models/account'

import * as styles from './Projects.module.css';
import Icon from "../../presentationals/Icon";
import Heading from "../../presentationals/Heading";
import Empty from "../../presentationals/Empty";
import ListProjects from "../../presentationals/ListProjects";

type Props = {
    projects?: Project[];
}

const Projects: React.FC<Props> = ({ projects }) => {

    return (

        <div className={styles.container}>
            <Heading className={styles.title} tag="h2">Projects</Heading>
            {!!projects && projects.length > 0 ? (
                <>
                    <div className={styles.actions}>
                        <div>
                            <Icon id="add" size={20} />
                        </div>
                        <div>
                            <Icon id="param" size={20} />
                        </div>

                    </div>
                    <ListProjects projects={projects} />
                </>
            ): (
                <Empty importantContent={"Créer votre premier projet"} thinContent={"pour gérer vos épargnes"} />
            )}
        </div>
    )
}

export default Projects;
