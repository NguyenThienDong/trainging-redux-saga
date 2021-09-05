import theme from "../../commons/Theme";

const styles = () => ({
    taskboard: {
        display: 'flex',
        alignItems: 'center'
    },
    shape: {
        backgroundColor: theme.color.primary,
        padding: theme.shape.padding,
        margin: theme.shape.margin,
        borderRadius: theme.shape.borderRadius
    }
});

export default styles;