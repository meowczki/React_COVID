import React, {Component} from 'react';
import CanvasJSReact from '../lib/canvasjs.react';

let CanvasJSChart = CanvasJSReact.CanvasJSChart;


class DoughnutPlot extends Component {

    render() {


        const options = {
            title: {
                text: "Percent of World Covid cases"
            },
            data: [{
                type: "pie",
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

export default DoughnutPlot;