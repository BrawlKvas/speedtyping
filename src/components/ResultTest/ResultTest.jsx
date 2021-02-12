import { makeStyles } from "@material-ui/core"
import EvaluationTable from "./EvaluationTable"
import YourResults from "./YourResults"

const useStyles = makeStyles(() => ({
  root: {
    width: '900px',
    margin: '0 auto',
    marginTop: '65px',
    display: 'flex',
    justifyContent: 'space-around'
  },
}))

const ResultTest = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <YourResults />
      <EvaluationTable />
    </div>
  )
}

export default ResultTest
