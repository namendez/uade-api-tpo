import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Input from '@material-ui/core/Input';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import { FormControl, Card, CardMedia, CardContent, Typography , Grid } from '@material-ui/core';




 // eslint-disable-next-line
const movies = {
    "Search": [
        {
            "Title": "The Godfather",
            "Year": "1972",
            "imdbID": "tt0068646",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            "Title": "The Godfather: Part II",
            "Year": "1974",
            "imdbID": "tt0071562",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            "Title": "The Godfather: Part III",
            "Year": "1990",
            "imdbID": "tt0099674",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTc1YjhiNzktMjEyNS00YmNhLWExYjItZDhkNWJjZjYxOWZiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            "Title": "The Godfather Trilogy: 1901-1980",
            "Year": "1992",
            "imdbID": "tt0150742",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTY1NzYxNDk0NV5BMl5BanBnXkFtZTYwMjk5MTM5._V1_SX300.jpg"
        },
        {
            "Title": "The Last Godfather",
            "Year": "2010",
            "imdbID": "tt1584131",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxNTgzOTQyNV5BMl5BanBnXkFtZTcwMzI1NDk3NA@@._V1_SX300.jpg"
        },
        {
            "Title": "The Godfather Family: A Look Inside",
            "Year": "1990",
            "imdbID": "tt0101961",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTUzOTc0NDAyNF5BMl5BanBnXkFtZTcwNjAwMDEzMQ@@._V1_SX300.jpg"
        },
        {
            "Title": "The Black Godfather",
            "Year": "1974",
            "imdbID": "tt0071225",
            "Type": "movie",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BY2E0YzhjMWYtZGU0NS00YmFhLThhN2ItNjc3ZTJkMmU5YzE1XkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "The Godfather Legacy",
            "Year": "2012",
            "imdbID": "tt2311160",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDdmZWViZjgtN2YxMi00OGE4LWI2ZjAtNWQwYTJlYjBmZTdhXkEyXkFqcGdeQXVyODAyNDE3Mw@@._V1_SX300.jpg"
        },
        {
            "Title": "The Godfather of Green Bay",
            "Year": "2005",
            "imdbID": "tt0385727",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTg1MDQyODkxMV5BMl5BanBnXkFtZTcwNzg5MDY0MQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Herschell Gordon Lewis: The Godfather of Gore",
            "Year": "2010",
            "imdbID": "tt1683431",
            "Type": "movie",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4NzYzMzgzM15BMl5BanBnXkFtZTgwMDg4NDA2MDE@._V1_SX300.jpg"
        }
    ],
    "totalResults": "56",
    "Response": "True"
}

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
       minWidth: theme.spacing.unit * 50,
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
        width: '300px'
    },
    movieBoxImg: {
        height: '426px'
    }
})

 // eslint-disable-next-line
class MovieBox extends Component {  
    render () {
        const classes = this.props.classes;
        return (
            <Card className={classes.movieBox} raised >
                <CardMedia className={classes.movieBoxImg} 
                            image="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                            title="El padrino"
                />
                <CardContent>
                    <Typography component="p" >Prueba</Typography>
                </CardContent>
            </Card>
        );
    }
}

class Home extends Component {
    handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
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
                                        placeholder="Buscar" />
                                </FormControl>
                            </form>
                        </div>
                        <FavoriteIcon className={classes.favoriteIcon}/>
                    </Toolbar>
                </AppBar>
                    <Grid container className={classes.moviePanel} >
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <MovieBox classes={classes}></MovieBox> 
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <MovieBox classes={classes}></MovieBox> 
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <MovieBox classes={classes}></MovieBox> 
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <MovieBox classes={classes}></MovieBox> 
                        </Grid>
                    </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Home);