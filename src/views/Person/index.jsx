import {
    Container, Grid, TextField,
    Button,
    MenuItem
} from '@mui/material';

import ButtonAppBar from '../../layouts/Header';

import { useState } from 'react';


const Person = () => {

    const [step, setStep] = useState(0);

    const nextStep = () => setStep(step + 1);
    const backStep = () => setStep(step - 1);
    const handleSubmit = () => alert('Datos enviado correctamente');

    const generalRender = () => {
        if (step === 0) {
            return (
                <>
                    <Grid container style={{ marginTop: '20px', marginLeft: '25px' }}
                    >
                        <h3>Datos Generales</h3>
                    </Grid>
                    <Grid item md={4}>
                        <TextField
                            fullWidth
                            label="Código"

                        />
                    </Grid>
                    <Grid item md={4}>
                        <TextField
                            fullWidth
                            label="Fecha de registro"
                        />
                    </Grid>
                    <Grid item md={4}>
                        <TextField
                            fullWidth
                            id="filled-select-currency"
                            select
                            label="Estado"
                        >
                            <MenuItem value="A" >
                                Activo
                            </MenuItem>
                            <MenuItem  value="I">
                                Inactivo
                            </MenuItem>

                        </TextField>
                    </Grid>
                    <Grid item md={4}>
                        <TextField
                            fullWidth
                            select
                            label="Tipo Documento"
                        >
                            <MenuItem value="dni" >
                                DNI
                            </MenuItem>
                            <MenuItem value="ext" >
                                Extranjero
                            </MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item md={4}>
                        <TextField
                            fullWidth
                            label="Número de doc."
                            type='number'
                        />
                    </Grid>
                    <Grid item md={4}>
                        <TextField
                            fullWidth
                            label="RUC"
                            type='number'
                        />
                    </Grid>
                    <Grid
                        item md={4}>
                        <TextField
                            fullWidth
                            label="Apellido Paterno"
                            type='text'
                        />
                    </Grid>
                    <Grid item md={4}>
                        <TextField
                            fullWidth
                            label="Apellido Materno"
                            type='text'
                        />
                    </Grid>
                    <Grid item md={4}>
                        <TextField
                            fullWidth
                            label="Nombres"
                            type='text'
                        />
                    </Grid>
                    <Grid
                        item md={8}>
                        <TextField
                            fullWidth
                            label="Apellido y Nombre"
                            type='text'
                        />
                    </Grid>
                    <Grid
                        item md={4}>
                        <TextField
                            fullWidth
                            id="filled-select-currency"
                            select
                            label="Sexo"
                        >
                            <MenuItem value="m" >
                                Masculino
                            </MenuItem>
                            <MenuItem  value="f">
                                Femenino
                            </MenuItem>

                        </TextField>
                    </Grid>
                    <Grid
                        item md={12}>
                        <Button onClick={nextStep} variant="contained">Siguiente</Button>
                    </Grid>
                </>
            );
        }
        if (step === 1) {
            return <>
                <Grid container style={{ marginTop: '20px', marginLeft: '25px' }}
                >
                    <h3>Datos de Nacimiento</h3>
                </Grid>
                <Grid
                    item md={7}>
                    <TextField
                        fullWidth
                        type='date'
                    />
                </Grid>
                <Grid
                    item md={3}>
                    <TextField
                        fullWidth
                        label='Edad'
                        type='number'
                    />
                </Grid>
                <Grid item md={4}>
                    <TextField
                        id="filled-select-currency"
                        fullWidth
                        select
                        label="Departamento"
                    >
                        <MenuItem >
                            Masculino
                        </MenuItem>
                        <MenuItem >
                            Femenino
                        </MenuItem>

                    </TextField>
                </Grid>
                <Grid
                    item md={4}>
                    <TextField
                        fullWidth
                        id="filled-select-currency"
                        select
                        label="Provincia"
                    >
                        <MenuItem >
                            Masculino
                        </MenuItem>
                        <MenuItem >
                            Femenino
                        </MenuItem>

                    </TextField>
                </Grid>
                <Grid
                    item md={4}>
                    <TextField
                        fullWidth
                        id="filled-select-currency"
                        select
                        label="Distrito"
                    >
                        <MenuItem >
                            Masculino
                        </MenuItem>
                        <MenuItem >
                            Femenino
                        </MenuItem>

                    </TextField>
                </Grid>
                <Grid
                    item md={6}>
                    <Button onClick={backStep} variant="contained">Atras</Button>
                </Grid>
                <Grid
                    item md={6}>
                    <Button onClick={nextStep} variant="contained">Siguiente</Button>
                </Grid>
            </>;
        }
        if (step === 2) {
            return <>
                <Grid container style={{ marginTop: '20px', marginLeft: '25px' }}
                >
                    <h3>Datos de Dirección</h3>
                </Grid>
                <Grid item md={9}>
                    <TextField
                        fullWidth
                        label="Dirección Principal"
                        type='text'
                    />
                </Grid>
                <Grid item md={3}>
                    <TextField
                        fullWidth
                        label="Localidad"
                        type='text'
                    />
                </Grid>
                <Grid item md={9}>
                    <TextField
                        fullWidth
                        label="Dirección Alterna"
                        type='text'
                    />
                </Grid>
                <Grid item md={4}>
                    <TextField
                        id="filled-select-currency"
                        fullWidth
                        select
                        label="Departamento"
                    >
                        <MenuItem >
                            Masculino
                        </MenuItem>
                        <MenuItem >
                            Femenino
                        </MenuItem>

                    </TextField>
                </Grid>
                <Grid
                    item md={4}>
                    <TextField
                        fullWidth
                        id="filled-select-currency"
                        select
                        label="Provincia"
                    >
                        <MenuItem >
                            Masculino
                        </MenuItem>
                        <MenuItem >
                            Femenino
                        </MenuItem>

                    </TextField>
                </Grid>
                <Grid
                    item md={4}>
                    <TextField
                        fullWidth
                        id="filled-select-currency"
                        select
                        label="Distrito"
                    >
                        <MenuItem >
                            Masculino
                        </MenuItem>
                        <MenuItem >
                            Femenino
                        </MenuItem>

                    </TextField>
                </Grid>
                <Grid
                    item md={6}>
                    <Button onClick={backStep} variant="contained">Atras</Button>
                </Grid>
                <Grid
                    item md={6}>
                    <Button onClick={nextStep} variant="contained">Siguiente</Button>
                </Grid>
            </>;
        }
        if (step === 3) {
            return <>
                <Grid container style={{ marginTop: '20px', marginLeft: '25px' }}
                >
                    <h3>Datos Personales</h3>
                </Grid>
                <Grid item md={4}>
                    <TextField
                        id="filled-select-currency"
                        fullWidth
                        select
                        label="Estado civil"
                    >
                        <MenuItem >
                            Masculino
                        </MenuItem>
                        <MenuItem >
                            Femenino
                        </MenuItem>

                    </TextField>
                </Grid>
                <Grid
                    item md={4}>
                    <TextField
                        fullWidth
                        id="filled-select-currency"
                        select
                        label="N. Educativo"
                    >
                        <MenuItem >
                            Masculino
                        </MenuItem>
                        <MenuItem >
                            Femenino
                        </MenuItem>

                    </TextField>
                </Grid>
                <Grid
                    item md={4}>
                    <TextField
                        fullWidth
                        id="filled-select-currency"
                        select
                        label="Profesión"
                    >
                        <MenuItem >
                            Masculino
                        </MenuItem>
                        <MenuItem >
                            Femenino
                        </MenuItem>

                    </TextField>
                </Grid>
                <Grid item md={4}>
                    <TextField
                        fullWidth
                        label="Télefono Fijo"
                        type='number'
                    />
                </Grid>
                <Grid item md={4}>
                    <TextField
                        fullWidth
                        label="Celular"
                        type='number'
                    />
                </Grid>
                <Grid
                    item md={4}>
                    <TextField
                        fullWidth
                        label="E-mail"
                        type='email'
                    />
                </Grid>
                <Grid item md={12}>
                    <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="Observaciones"
                        multiline
                        rows={4}
                    />
                </Grid>
                <Grid
                    item md={6}>
                    <Button onClick={backStep} variant="contained">Atras</Button>
                </Grid>
                <Grid
                    item md={6}>
                    <Button onClick={handleSubmit} variant="contained">Enviar</Button>
                </Grid>
            </>
        }
    };

    return (
        <>
            <ButtonAppBar />
            <Container style={{ marginTop: '30px' }} >
                <Grid>
                    <h2>Registrar persona</h2>
                </Grid>
                <Grid style={{ marginTop: '20px' }}
                    container spacing={3}>
                    {generalRender()}
                </Grid>
            </Container>
        </>
    );
};

export default Person;