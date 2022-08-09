import {
    Container, Grid, TextField,
    Button,
    MenuItem
} from '@mui/material';
import RegisterSteps from '../../components/Person/RegisterSteps';

import ButtonAppBar from '../../layouts/Header';

const Register = () => {

    return (
        <>
            <ButtonAppBar />
            <div style={{ padding: '50px' }} >
                <Grid>
                    <h2>Registrar persona</h2>
                </Grid>
                <Grid
                    container spacing={3}>
                    <RegisterSteps />
                </Grid>
            </div>
        </>
    );
};

export default Register;