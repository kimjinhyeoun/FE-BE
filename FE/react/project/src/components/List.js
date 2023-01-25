import React from 'react';
import data from '../db/data.json';
import styles from './List.module.css';

export default function List(){
    return(
        <div>
            <ul>
                {data.project.map(project => (
                    <li key={project.id}>아이콘 {project.icon}</li>
                ))}

            </ul>

            <h4 className='txt2'>CSS 적용확인</h4>
            <h4 className={styles.txt2}>CSS 적용확인</h4>


            <div>
                <table className={styles.project}>
                    <thead>
                        <tr>
                            <th>아이디</th>
                            <th>내용</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.project.map(project => (
                        <tr key={project.id}>
                            <td>{project.id}</td>
                            <td>{project.icon}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>





        </div>
    );
}