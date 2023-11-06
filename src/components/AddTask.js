import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddTask extends Component {
  state = {
    desc: '',
  };
  render() {
    return (
      <div >
        <div >
          <input
        
            type='text'
            onChange={(e) => this.setState({ desc: e.target.value })}
          />
        </div>

        <div >
          <img
            style={{ width: `30px` }}
            src={require('../assets/iconfinder_add_134224.png')}
            alt='add'
            onClick={() =>
              this.props.handleAdd({
                id: Date.now(),
                description: this.state.desc,
                done: false,
              })
            }
          />
        </div>
      </div>
    );
  }
}

// AddTask.propTypes = {
//   handleAdd: PropTypes.func,
// };

export default AddTask;
