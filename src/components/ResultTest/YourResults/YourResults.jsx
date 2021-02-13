import React from 'react'
import PropTypes from 'prop-types'
import SpeedIcon from '@material-ui/icons/Speed'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import connect from './YourResults.connect'
import { Button, makeStyles, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  param: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '5px'
  }
}))

const YourResults = ({ speed, accuracy, isFinished }) => {
  const classes = useStyles()

  const history = useHistory()

  const clickHandler = () => {
    history.push('/test')
  }

  return (
    <div>
      {
        isFinished &&
        <>
          <Typography variant="h5" color="primary">Ваши результаты:</Typography>
          <Typography className={classes.param} variant="h6"><SpeedIcon /> Скорость: {speed} зн/мин</Typography>
          <Typography className={classes.param} variant="h6"><CheckCircleOutlineIcon /> Точность: {accuracy}%</Typography>
        </>
      }

      {
        !isFinished &&
        <Typography variant="h5" color="primary">Пройдите тестирование</Typography>
      }

      <Button variant="outlined" color="secondary" style={{ marginTop: '15px' }} onClick={clickHandler}>
        {
          isFinished
            ? 'Повторить тестирование'
            : 'Пройти тестирование'
        }
      </Button>
    </div>
  )
}

YourResults.propTypes = {
  speed: PropTypes.number,
  accuracy: PropTypes.number,
  isFinished: PropTypes.bool.isRequired
}

export default connect(YourResults)
