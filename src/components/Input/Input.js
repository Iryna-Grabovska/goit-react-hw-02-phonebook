import s from './Input.module.css';
import PropTypes from 'prop-types';

import { Component } from 'react';

export class Input extends Component {
  handleChange = e => {
    this.props.onChange(e.target.value);
  };
  render() {
    const { name, type, labelName, value, onChange } = this.props;
    return (
      <label className={s.nameLabel}>
        {labelName}
        <input
          className={s.contactsInput}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }
}
export default Input;

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  labelName: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
