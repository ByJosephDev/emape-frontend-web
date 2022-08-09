import {
    makeStyles, Container, Grid,
    FormControl, Paper, Input, InputLabel,
    TextField, Button
} from '@mui/material';

import { useState } from 'react';

const Home = () => {

    const [fields, setFields] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value });
    };

    const handleLogin = async () => {

        if (fields.email == "joseph@gmail.com" && fields.password == "secret") {
            window.location.href = '/home';
        } else {
            alert('Credenciales incorrectas')
        }

    }

    return (
        <div>
            <Paper elevation={3}
                style={{ width: '300px', padding: '20px', marginTop:'25vh', marginLeft:'70vh' }}
            >
                <Grid style={{ textAlign: 'center' }}>
                    <h3>EMAPE</h3>
                </Grid>
                <Grid>
                    <TextField fullWidth type="email" label="Email" variant="outlined" value={fields.email} name="email"
                        onChange={handleInputChange} />
                </Grid>
                <Grid style={{ marginTop: '20px' }}>
                    <TextField fullWidth type="password" label="Password" variant="outlined" value={fields.password}
                        onChange={handleInputChange} name="password" />
                </Grid>
                <Grid style={{ marginTop: '50px', textAlign: 'center' }}>
                    <Button onClick={handleLogin} variant="contained" >Login</Button>
                </Grid>
            </Paper>
        </div>
    );
};

export default Home;