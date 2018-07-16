import React, {Component} from 'react';

class Exercise2 extends Component {
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
        let res = [];
        res = result;
        result.forEach((value, index) => {
            value.forEach((val, i) => {
                let ant = i - 1;
                let next = i + 1;
                if (val === 'x') {
                    if (value[next] === 1 && value[ant] !== 1) {
                        console.log(value);
                        console.log('a', ant);
                        console.log('n', next);
                        console.log('actual', res[index][i]);
                        res[index][i] = 0;
                    } else {
                        //
                    }
                }
            });
        });
        console.log('result', res);
        return result;
    }

    render() {
        return (
            <div className="container">
                Exercise2 page
            </div>
        );
    }
}

export default Exercise2;
