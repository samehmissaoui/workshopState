import React from 'react';
// import PropTypes from 'prop-types';

import './Todo.css';

const Todo = ({
  task: { description, id, done },
  handleDelete,
  handleDone,
}) => {
  return (
    <div >
    
        <span className={done ? 'done' : 'unDone'}>{description}</span>
     
      <div >
        <img
          style={{ width: `25px` }}
          src={require('../assets/iconfinder_new-24_103173.png')}
          alt='edit'
          onClick={() => handleDelete(id)}
        />
      </div>
      <div >
        <img
          style={{ width: `25px` }}
          src={require('../assets/done.png')}
          alt='done'
          onClick={() => handleDone(id)}
        />
      </div>
    </div>
  );
};

// Todo.propTypes = {
//   description: PropTypes.string,
//   id: PropTypes.string,
//   done: PropTypes.bool,
// };

export default Todo;
