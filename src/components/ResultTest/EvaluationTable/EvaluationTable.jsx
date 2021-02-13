import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import SpeedIcon from '@material-ui/icons/Speed'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'

const useStyles = makeStyles(() => ({
  table: {
    width: '400px'
  },

  thContent: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '5px'
  }
}))

const rows = [
  { result: 'PLATINUM', speed: '350 зн/мин', accuracy: '99.5%' },
  { result: 'GOLD', speed: '250 зн/мин', accuracy: '98.7%' },
  { result: 'SILVER', speed: '200 зн/мин', accuracy: '96%' },
]

const EvaluationTable = () => {
  const classes = useStyles()

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><div className={classes.thContent}><EmojiEventsIcon /> Сертификат</div></TableCell>
            <TableCell><div className={classes.thContent}><SpeedIcon /> Скорость</div></TableCell>
            <TableCell><div className={classes.thContent}><CheckCircleOutlineIcon /> Точность</div></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.result}</TableCell>
              <TableCell>{row.speed}</TableCell>
              <TableCell>{row.accuracy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EvaluationTable
