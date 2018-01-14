import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = (theme) => {
    return {
        root: {
            background: theme.palette.primary['500'],
            border: 0,
            color: 'white',
            boxShadow: 'none',
            borderRadius: "45px",
            minHeight: '28px',
            height: '32px',
            padding: '0px',
            fontWeight: "bold",
        },
        label: {
            textTransform: 'capitalize',
        },
    };
};

export default withStyles(styles)((props) => {
    return (
        <Button
            classes={{
                root: props.classes.root,
                label: props.classes.label, 
            }}
        >
            {props.children ? props.children : ''}
        </Button>
    );
});
