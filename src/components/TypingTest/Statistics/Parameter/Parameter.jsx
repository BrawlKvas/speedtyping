import { makeStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  title: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '5px',
    color: '#5c5c5c'
  },

  value: {
    fontWeight: 'bold',
  },

  unit: {
    fontSize: '14px'
  }
}))

const Parameter = ({ title, Icon, unit, value }) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.title}>
        <Icon /> {title}
      </div>
      <Typography className={classes.value} color="primary" variant="h5">
        {value} <span className={classes.unit}>{unit}</span>
      </Typography>
    </div>
  )
}

Parameter.defaultProps = {
  value: 0
}

Parameter.propTypes = {
  title: PropTypes.string.isRequired,
  unit: PropTypes.string,
  value: PropTypes.number,
  Icon: PropTypes.object
}

export default Parameter
