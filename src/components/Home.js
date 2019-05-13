import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Input from '@material-ui/core/Input';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import SearchIcon from '@material-ui/icons/Search';
import { FormControl, Card, CardMedia, CardContent, Typography , Grid, IconButton, Tooltip } from '@material-ui/core';

const OMDB_URL="http://www.omdbapi.com/?type=movie"
const OMDB_APIKEY=""

const styles = theme => ({
    toolbar: {
        justifyContent: 'space-between'
    },
    boxBuscar: {
        display: 'inline-flex',
        verticalAlign: 'middle'
    },
    searchIcon: {
        fontSize: '32px'
    },
    formBusqueda: {
        marginLeft: theme.spacing.unit * 3
    },
    inputBuscar: {
       backgroundColor: 'inherit',
       color: 'inherit',
       minWidth: theme.spacing.unit * 30,
    },
    overrideInputClasses: { //VER POR QUE GARCHA NO CAMBIA EL COLOR DEL BORDE INFERIOR
        root: {
            '&::before': {
                'content': '"pepepepe"'
            }
        },
        underline: {
            '&::before': {

                'content': '"pepepepe"'
            }
        }

    },
    favoriteIcon: {

    },
    moviePanel: {
        marginTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2
    },
    movieBox: {
        width: '300px',
        marginBottom: theme.spacing.unit * 3
    },
    movieBoxImg: {
        height: '426px',
        objectFit: 'scale-down'
    },
    movieTitle: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    cardContent: {
        textAlign: 'center'
    },
    cardIconButton: {
        display: 'flex',
        justifyContent: 'space-between'
    }
})

class MovieBox extends Component {  
    render () {
        const { classes, movie } = this.props;

        return (
            <Card className={classes.movieBox} raised >
                <CardMedia className={classes.movieBoxImg} 
                            image={movie.Poster}
                            title={movie.Title}
                />
                <CardContent className={classes.cardContent}>
                    <Tooltip title={movie.Title}>
                        <Typography className={classes.movieTitle} component="h5" variant="h6" >{movie.Title}</Typography>
                    </Tooltip>
                    <Typography variant="subtitle1" color="textSecondary">{movie.Year}</Typography>
                    <div className={classes.cardIconButton}>
                        <IconButton>
                            <CommentIcon />
                        </IconButton>
                        <IconButton >
                            <FavoriteIcon />
                        </IconButton>
                    </div>
                </CardContent>
            </Card>
        );
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: false,
            page: 1,
            snackBarOpen: false,
        }
    }
    handleSnackbarClose = (event, reason) => {
        // if (reason === 'clickaway') {
        //   return;
        // }
    
        this.setState({ snackBarOpen: false });
      };

    handleSearchSubmit = (event) => {
        const palabraBuscada = event.target.children[0].children[0].children[0].value;
        const pagina = this.state.page;
        const url = OMDB_URL + '&apikey=' + OMDB_APIKEY + '&s=' + palabraBuscada + '&page=' + pagina;
        
        fetch(url).then(response => response.json()).then(result => {
            const movies = result;
            if (movies.Response === "True")
                this.setState({movies: movies});
            else
                this.setState({snackBarOpen: true});
        });
        
        event.preventDefault();
    };


    render () {
        const classes = this.props.classes;
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.boxBuscar}>
                            <SearchIcon className={classes.searchIcon}/>
                            <form className={classes.formBusqueda} onSubmit={this.handleSearchSubmit}>
                                <FormControl>
                                    <Input className={classes.inputBuscar} classes={classes.overrideInputClasses}
                                        type="text" required fullWidth 
                                        placeholder="Buscar"/>
                                </FormControl>
                            </form>
                        </div>
                        <IconButton>
                            <FavoriteIcon className={classes.favoriteIcon}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                    <Grid container className={classes.moviePanel} >
                        {this.state.movies && this.state.movies.Search.map(movie =>
                            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.imdbID}>
                                <MovieBox classes={classes} movie={movie} />
                            </Grid>)}
                    </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Home);