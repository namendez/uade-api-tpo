import React, { Component } from 'react';
import { CssBaseline, Typography, Paper, FormControl, InputLabel, Input, Button } from '@material-ui/core';

const classes = styles => {

}

class Login extends Component {
    render () {
        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Iniciar sesión
                    </Typography>
                    <form className={classes.form}>
                        <FormControl required fullWidth>
                            <InputLabel htmlFor="email">Dirección de correo</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus />
                        </FormControl>
                        <FormControl required fullWidth>
                            <InputLabel htmlFor="password">Clave</InputLabel>
                            <Input id="password" type="password" name="password" autoComplete="current-password"/>
                        </FormControl>
                        <Button type="submit" fullWidth color="primary" variant="contained" disableRipple>Iniciar sesion</Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

export default Login;