import { Button, makeStyles, Paper, Typography } from "@material-ui/core"
import TypingText from "./TypingText"
import Statistics from './Statistics'

const useStyles = makeStyles(() => ({
  root: {
    width: 900,
    margin: '0 auto',
    marginTop: '65px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '15px',
    alignItems: 'flex-end'
  },

  paper: {
    width: '100%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '30px'
  }
}))

const TypingTest = () => {

  const classes = useStyles()

  return (

    <div className={classes.root}>

      <Statistics />

      <TypingText />

      <Button variant="outlined" color="secondary">Заново</Button>

    </div>
  )
}

export default TypingTest
