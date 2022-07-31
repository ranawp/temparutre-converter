import React from 'react';
import Boilingverdic from './Boilingverdic'

export default class Calculator extends React.Component {
    state = {
        temperature: '',
    };

    onTemperatureChange = (e) => {
        this.setState({
            temperature: e.target.value
        })
    }
    render() {
        const { temperature } = this.state;
        return (
            <>
                <fieldset>
                    <legend>Enter temperature in celsius:</legend>
                    <input type="text" value={temperature} onChange={this.onTemperatureChange} />
                </fieldset>
                <Boilingverdic celsius={parseFloat(temperature)} />
            </>
        )
    }
}