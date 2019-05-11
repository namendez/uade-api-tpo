import React, { Component } from 'react';
import { CssBaseline, Typography, Paper, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';


const classes = styles => ({
    paper: {
        boxShadow: 'unset',
        backgroundColor: '#fafafa'
    },
    form: {
        margin: 'auto',
        maxWidth: 500,
        textAlign: 'center'
    },
    buttonInicio: {
        marginTop: 10,
        marginRight: 25
    },
    buttonRegistro: {
        marginTop: 10,
        marginLeft: 25
    }
})

class Login extends Component {
    render () {
        const classes = this.props.classes;
        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h2">Buscador de películas</Typography>
                    <Typography component="h2" variant="h5">
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
                        <div className={classes.buttons}>
                            <Button className={classes.buttonInicio} type="submit" color="primary" variant="contained" disableRipple>Iniciar sesion</Button>
                            <Button className={classes.buttonRegistro} type="submit" color="primary" variant="contained" disableRipple>Registrarse</Button>
                        </div>
                    </form>
                </Paper>
            </main>
        );
    }
}

export default withStyles(classes)(Login);