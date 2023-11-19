import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <a href="home">
        <img src="_images/side-images/home.png" alt="Home" />
      </a>
      <a href="my-projects">
        <img src="_images/side-images/color-palette.png" alt="My projects" />
      </a>
      <a href="top-projects">
        <img src="_images/side-images/ranking.png" alt="Top projects" />
      </a>
      <a href="my-profile">
        <img src="_images/side-images/my-profile.png" alt="My profile" />
      </a>
      <a href="news">
        <img src="_images/side-images/newspaper.png" alt="News" />
      </a>
      <br />
      <br />
      <br />
      <br />
      <div className="createButton"></div>
      <div className="deleteButton"></div>
    </div>
  );
};

export default Sidebar;
