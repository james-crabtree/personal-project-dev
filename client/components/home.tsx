import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from 'Sidebar';

const App: React.FC = () => {
  return (
    <div>
      <Sidebar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
