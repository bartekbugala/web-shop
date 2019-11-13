import React from 'react';

class Input extends React.Component {
  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.props.onConfirmHandler(e.target);
    }
  };

  render() {
    return (
      <input
        type="text"
        onKeyDown={this.handleKeyDown}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default Input;
