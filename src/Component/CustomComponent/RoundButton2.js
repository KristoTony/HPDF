import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = (theme) => {
    return {
        root: {
            background: "none",
            border: "1px solid " + theme.palette.primary['500'],
            color: theme.palette.primary['500'],
            boxShadow: 'none',
            borderRadius: "45px",
            minHeight: '28px',
            height: '27px',
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
