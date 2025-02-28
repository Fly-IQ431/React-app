import React from "react";

class AddDelo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }
  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          placeholder="title"
          onChange={(e) => this.setState({ title: e.target.value })}
        />
        <input
          placeholder="description"
          onChange={(e) => this.setState({ description: e.target.value })}
        />
        <button
          type="button"
          onClick={() => {
            this.myForm.reset();
            this.props.onAdd({
              title: this.state.title,
              description: this.state.description,
            });
          }}
        >
          Add new goal
        </button>
      </form>
    );
  }
}

export default AddDelo;
