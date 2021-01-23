import React from 'react';
import './ExploreContainer.css';

interface ContainerProps { 

  title?: string;
  description?: string;
}

const ExploreContainer: React.FC<ContainerProps> = ( props ) => {
  return (
    <div className="container">
      <strong>{props.title}</strong>
      <p>{props.description}</p>
    </div>
  );
};

export default ExploreContainer;
