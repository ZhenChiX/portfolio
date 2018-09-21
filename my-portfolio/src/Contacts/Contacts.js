import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import '../App/App.css';


const styles = theme => ({
    container: {
        display: 'grip',
        flexWrap: 'wrap',
    },

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,

    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 300,
    },
    button: {
        width: 200,
    }

});


class Contact extends Component {
    state = {
        name: 'name',
        age: '30',
        multiline: 'Controlled',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    // class Contacts extends Component {
    render() {
        const { classes } = this.props;
        return (

            <div className='Contact'>
                <Fragment>
                    <div className="Contact-logo"></div>

                    <form id="form-submit" className={classes.container} noValidate autoComplete="on">

                        <TextField
                            // required
                            id="outlined-name"
                            label="Name"
                            className={classes.textField}
                            // value={this.state.name}
                            placeholder="Name"
                            onChange={this.handleChange('name')}
                            margin="normal"
                            variant="outlined"
                            autoComplete="name"
                           
                        />

                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            className={classes.textField}
                            type="email"
                            name="email"
                            placeholder="Email"
                            margin="normal"
                            variant="outlined"
                            autoComplete="email"
                        />

                        <TextField
                            id="outlined-required"
                            label="Subject"
                            placeholder="Subject"
                            className={classes.textField}
                            margin="normal"
                            fullWidth
                            variant="outlined"
                            multiline
                            autoComplete=""

                        />
                        <TextField
                            id="outlined-required"
                            label=""
                            className={classes.textField}
                            margin="normal"
                            fullWidth
                            multiline
                            rows="10"
                            variant="outlined"
                            autoComplete=""


                        />


                        <Button variant="extendedFab" aria-label="Delete" className={classes.button} id="submit" type="submit" ><span className="fas fa-share-square"></span>SEND
                        </Button>
                    </form>
                </Fragment>
            </div>
        )
    }
}




// export default Contacts;
export default withStyles(styles)(Contact);
