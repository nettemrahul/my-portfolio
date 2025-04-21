import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="mb-4">Projects</h2>
        <div className="card mx-auto shadow-sm" style={{ maxWidth: '500px' }}>
          <div className="card-body">
            <h5 className="card-title">Todo App</h5>
            <p className="card-text">React-based Todo app with full CRUD functionality and localStorage integration.</p>
            <a href="https://github.com/nettemrahul/todo-app" target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
              View Code
              
            </a>
          </div>
        </div>
        <div className="card mx-auto shadow-sm" style={{ maxWidth: '500px' }}>
          <div className="card-body">
            <h5 className="card-title">Used Car Price Prediction</h5>
            <p className="card-text">Used Car Price Prediction Using Machine Learning.</p>
            <a href="https://github.com/nettemrahul/Used-car-price-prediction" target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
              View Code
              
            </a>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Projects;
