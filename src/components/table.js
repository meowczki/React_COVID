import React, {Component} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import {Paper} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {
    BrowserRouter as Router, //glowny komponent routingu (zna historie)
    Route, //definiowanie sciezek i powiazanie ich z komponentami
    Link //przelaczanie sie miedzy sciezkami, podobne do <a> </a>, ale <a> przeladowuje strone
} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Home from "./Home";

const API = 'https://coronavirus-19-api.herokuapp.com/countries';



class table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({array: data}));
    }

    render() {
        const {array} = this.state;

        return (
            <Grid spacing={3}>

                    <Home/>

                <Grid item xs={12}>
            <TableContainer stickyHeader component={Paper}>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Cases</TableCell>
                            <TableCell align="right">Recovered</TableCell>
                            <TableCell align="right">Tests</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {array.slice(1).map((country) => {
                            return (

                            <TableRow componentClass='span' component={Link}  to={`/countries/${country.country}`} key={country.country}>
                                <TableCell component="th" scope="row">{country.country}</TableCell>
                                <TableCell align="right">{country.cases}</TableCell>
                                <TableCell align="right">{country.recovered}</TableCell>
                                <TableCell align="right">{country.totalTests}</TableCell>

                            </TableRow>  );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
                </Grid>
            </Grid>


        );
    }

}

export default table;