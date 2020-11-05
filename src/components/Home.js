import React, { Component }  from 'react';

import {
    BrowserRouter as Router, //glowny komponent routingu (zna historie)
    Route, //definiowanie sciezek i powiazanie ich z komponentami
    Link //przelaczanie sie miedzy sciezkami, podobne do <a> </a>, ale <a> przeladowuje strone
} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
class Home extends Component {
    render() {
        return (

            <Grid  style={{textAlign: "center"}} item xs={12}>
                <div>
                    <h2>COVID</h2>
                    <div>
                        <Button component={Link}   to={`/`} variant="contained" color="primary" >Home</Button>
                    </div>
                </div>
            </Grid>

        );
}


}

export default Home;