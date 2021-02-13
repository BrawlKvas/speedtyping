import { makeStyles, Paper } from "@material-ui/core"
import classNames from 'classnames'
import { useMemo, useState } from "react"
import PropTypes from 'prop-types'
import connect from './TypingText.connect'
import { useSnackbar } from 'notistack'

const rusLower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'

const useStyles = makeStyles(() => ({
  paper: {
    position: 'relative',
    padding: '35px',
    fontSize: '21px',
    color: '#5c5c5c',
    lineHeight: '32px',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    WebkitUserSelect: 'none',
    userSelect: 'none',
  },

  input: {
    position: 'absolute',
    zIndex: '-99',
    height: '0px',
    top: '0',
    left: '0',
    overflow: 'hidden',
    border: 'none',
    outline: '0',
    opacity: 0,
  },

  completed: {
    color: '#5bc538'
  },

  current: {
    padding: '1px',
    backgroundColor: '#5bc538',
    color: 'white',
    borderRadius: '2px'
  },

  wrong: {
    backgroundColor: '#F36747',
  }
}))

const TypingText = ({ text, position, isWrong, enterChar, enterBackspace }) => {
  const classes = useStyles()

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const charArray = useMemo(() => { return Array.from(text) }, [text])

  const changeHandler = (e) => {
    if (rusLower.includes(e.target.value.toLocaleLowerCase()))
      enqueueSnackbar('Смените раскладку клавиатуры', {
        variant: 'warning', preventDuplicate: true,
      })
    else
      enterChar(e.target.value)
  }

  const keyDownHandler = (e) => {
    if (e.key === 'Backspace')
      enterBackspace()
  }

  const blurHandler = (e) => {
    const elem = e.currentTarget
    //MOZ
    setTimeout(() => { elem.focus() }, 0)
  }

  return (
    <Paper className={classes.paper}>
      <input
        type="text"
        className={classes.input}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        onBlur={blurHandler}
        autoFocus
        value=''
      />

      {
        charArray.map((item, i) => {
          const cls = classNames({
            [classes.completed]: i < position,
            [classes.current]: i === position,
            [classes.wrong]: isWrong && i === position //?
          })

          return <span key={i} className={cls}>{item}</span>
        })
      }
    </Paper>
  )
}

TypingText.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  isWrong: PropTypes.bool.isRequired,
  enterChar: PropTypes.func.isRequired,
  enterBackspace: PropTypes.func.isRequired
}

export default connect(TypingText)
