import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Speedtyping
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.drawerHeader}></div>
    </>
  )
}

export default Header
