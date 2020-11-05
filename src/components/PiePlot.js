import React, {Component} from 'react';
import CanvasJSReact from '../lib/canvasjs.react';

let CanvasJSChart = CanvasJSReact.CanvasJSChart;


class PiePlot extends Component {

    render() {


        const options = {
            title: {
                text: "Percent of World Covid recoveries"
            },
            data: [{
                type: "doughnut",
                startAngle: 60,
                indexLabelFontSize: 17,
                indexLabel: "{label} - #percent%",
                toolTipContent: "<b>{label}:</b> {y} (#percent%)",
                dataPoints: this.props.data

            }]
        }

        return (

            <div>
                <CanvasJSChart options={options}
                />
            </div>
        );
    }
}

export default PiePlot;