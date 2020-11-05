import React, { Component }  from 'react';

import {
    BrowserRouter as Router, //glowny komponent routingu (zna historie)
    Route, //definiowanie sciezek i powiazanie ich z komponentami
    Link //przelaczanie sie miedzy sciezkami, podobne do <a> </a>, ale <a> przeladowuje strone
} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Home from "./components/Home";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
        <Grid  style={{textAlign: "center"}} container spacing={3}>

                <Home/>


            <Grid item xs={12}>
                <div>
                    <Button component={Link}   to={`/countries`} variant="contained" color="primary" href="#contained-buttons">Check stats</Button>
                </div>
            </Grid>
        </Grid>



    );
  }



}

export default App;