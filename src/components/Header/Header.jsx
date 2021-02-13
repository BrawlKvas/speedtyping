import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

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
          <Typography variant="h6" noWrap style={{ flexGrow: 1 }}>
            Speedtyping
          </Typography>

          <Button variant="outlined" color="inherit" style={{ marginRight: '15px' }}>
            <NavLink to="/test">Тестирование</NavLink>
          </Button>

          <Button variant="outlined" color="inherit">
            <NavLink to="/test/completed">Информация о результатах</NavLink>
          </Button>
        </Toolbar>
      </AppBar>

      <div className={classes.drawerHeader}></div>
    </>
  )
}

export default Header
