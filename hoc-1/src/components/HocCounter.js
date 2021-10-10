import React from "react";

const hocCounter = (WrappedComponent) => {
  return class HocCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
    }

    incrementValue = () => {
      const { counter } = { ...this.state };
      this.setState({ counter: counter + 1 });
    };
    render() {
      return (
        <WrappedComponent
          counter={this.state.counter}
          incrementValue={this.incrementValue}
          {...this.props}
        />
      );
    }
  };
};

export default hocCounter;
