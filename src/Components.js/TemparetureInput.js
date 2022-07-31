import React from 'react';


export default class TemparetureInput extends React.Component {
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
            </>
        )
    }
}