import React from 'react';

const projects = [
  {
    id: 1,
    title: 'まもるくん',
    description: 'Description of project 1...',
    imageUrl: './image/jphacks.png', // 画像のパスを指定
    projectLink: 'https://github.com/jphacks/C_2208', // プロジェクトへのリンク
  },
  {
    id: 2,
    title: 'はにかむマップ',
    description: 'Description of project 2...',
    imageUrl: './image/hack-u.png',
    projectLink: 'https://github.com/mizutanimeen/hackU/tree/tomas',
  },
  {
    id: 3,
    title: 'Areal-Airreal',
    description: 'Description of project 3...',
    imageUrl: './image/withar.jpg',
    projectLink: 'https://github.com/hibiki0612/areal-AirReal',
  },
  {
    id: 4,
    title: 'ひまつぶ',
    description: 'Description of project 4...',
    imageUrl: './image/open-hack-u.png',
    projectLink: 'https://github.com/Hikaru-Kou/open_hack_2022_spring_yubi',
  },
  {
    id: 5,
    title: 'BBB',
    description: 'Description of project 5...',
    imageUrl: './image/ar_game.png',
    projectLink: 'https://github.com/thomas0124/Idea-Tech-teamproject',
  },
  {
    id: 6,
    title: 'ReadingPassbook',
    description: 'Description of project 6...',
    imageUrl: './image/readingpassbook.jpg',
    projectLink: 'https://github.com/thomas0124/ReadingPassbook',
  },
];

const Projects: React.FC = () => {
  return (
  <>
    <div className="project-header">
      <h2>Projects</h2>
    </div>
    <section className="projects">
        {projects.map((project) => (
          <div className="project-item" key={project.id}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
    </section>
  </>
  );
}

export default Projects;
