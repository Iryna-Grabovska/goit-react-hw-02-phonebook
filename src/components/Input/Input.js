// import shortid from 'shortid';

import { Component } from 'react';

export class Input extends Component {
  handleChange = e => {
    this.props.onChange(e.target.value);
  };
  render() {
    const { name, type, labelName, value, onChange } = this.props;
    return (
      <label>
        {labelName}
        <input type={type} name={name} value={value} onChange={onChange} />
      </label>
    );
  }
}
export default Input;
