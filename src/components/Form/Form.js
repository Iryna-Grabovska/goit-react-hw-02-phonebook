import React, { Component } from 'react';
import Button from 'components/Button';
import Input from 'components/Input';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = e => {
    // const { name, number } = this.state;
    e.preventdefault();
    this.props.onSubmit(this.state);
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  // handleChange = ({ value, name }) => {
  //   this.setState({ [name]: value });
  //   // this.reset();
  // };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    //  const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          labelName="Name"
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleChange}
        />
        <Input
          labelName="Number"
          name="number"
          type="tel"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.handleChange}
        />
        <Button label="Add contact" />
      </form>
    );
  }
}
export default Form;
