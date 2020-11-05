import React, {Component} from 'react';
import PiePlot from "./PiePlot";
import DoughnutPlot from "./DoughnutPlot";
import Grid from "@material-ui/core/Grid";
import Home from "./Home";
const API = 'https://coronavirus-19-api.herokuapp.com/countries/';
const GLOBALAPI='https://coronavirus-19-api.herokuapp.com/all';

class countryStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            local: [],
            global:[],

        };
    }
    componentDidMount() {
        const  country  = this.props.match.params.country;
        fetch(API+country)
            .then(response => response.json())
            .then(data => this.setState({local: data}));
        fetch(GLOBALAPI)
            .then(response => response.json())
            .then(data => this.setState({global: data}));

    }
    render() {

        const local = this.state.local;
        const global=this.state.global;
        const datacases=[
            { y: (global.cases-local.cases), label: "World" },
            { y: local.cases, label: local.country },
        ];
        const datarecovery=[
            { y: (global.recovered-local.recovered), label: "World" },
            { y: local.recovered, label: local.country },
        ];
        return (
            <Grid  container spacing={3}>
               <Home/>
                <Grid item xs={12}>
            <div >
                <PiePlot data={datacases}/>
                <DoughnutPlot data={datarecovery}/>
            </div>
                </Grid>
            </Grid>
        );
    }
}
export default countryStats;