const styles = (theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
  header: {
    backgroundColor: theme.color.primary,
    color: theme.typography.color,
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: theme.typography.color,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  icon: {
    cursor: 'pointer',
    fontSize: 24,
  },
  content: {
    padding: theme.spacing(2),
  },
});

export default styles;
