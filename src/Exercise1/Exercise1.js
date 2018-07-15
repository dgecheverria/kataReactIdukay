import React, {Component} from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    calculo = (matriz) => {
        let result = [];
        result = matriz;
        matriz.forEach((value, index) => {
            value.forEach((res, i) => {
                if (res !== 1) {
                    result[index][i] = 'x';
                }
            });
        });
        return result;
    }

    render() {
    return (
      <div className="container">
        Exercise1 page
      </div>
    );
  }
}

export default Exercise1;
