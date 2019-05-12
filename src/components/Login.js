import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { CssBaseline, Typography, Paper, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';

const classes = theme => ({
    main: {
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'unset',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        marginRight: theme.spacing.unit,
        
    },
    form: {
        margin: 'auto',
        maxWidth: 500,
        width: '100%',
        marginTop: theme.spacing.unit * 16,
        textAlign: 'center'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: theme.spacing.unit * 2.5

    }
})

const handleInvalidForm = (event) => {
    console.log(event);
}

class Login extends Component {
    render () {
        const classes = this.props.classes;
        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <div className={classes.header}>
                        <Avatar className={classes.avatar}>
                            <LocalMoviesIcon />
                        </Avatar>
                        <Typography style={{textAlign: 'center'}} component="h1" variant="display3">PELICULAS</Typography>
                    </div>
                    <form className={classes.form} onInvalid={handleInvalidForm}>
                        <FormControl required fullWidth >
                            <InputLabel htmlFor="email">Dirección de correo</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus />
                        </FormControl>
                        <FormControl required fullWidth>
                            <InputLabel htmlFor="password">Clave</InputLabel>
                            <Input id="password" type="password" name="password" autoComplete="current-password"/>
                        </FormControl>
                        <div className={classes.buttons}>
                            <Button className={classes.buttonInicio} 
                                    type="submit" 
                                    color="primary" 
                                    variant="contained" 
                                    disableRipple>Ingresar</Button>
                            <Button className={classes.buttonRegistro} type="submit" color="primary" variant="contained" disableRipple>Registrarse</Button>
                        </div>
                    </form>
                </Paper>
            </main>
        );
    }
}

export default withStyles(classes)(Login);