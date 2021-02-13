import Parameter from './../Parameter'
import SpeedIcon from '@material-ui/icons/Speed'
import { useEffect } from "react"
import PropTypes from 'prop-types'
import connect from "./Speed.connect"

const Speed = ({ launchPoint, position, speed, setSpeed}) => {

  useEffect(() => {
    setSpeed(Math.round(position / ((new Date() - launchPoint) / 60000)))

    const loop = setInterval(() => {
      setSpeed(Math.round(position / ((new Date() - launchPoint) / 60000)))
    }, 1000)

    return () => clearInterval(loop)
  }, [launchPoint, position])

  return (
    <Parameter title="Скорость" unit="зн/мин" Icon={SpeedIcon} value={speed} />
  )
}

Speed.propTypes = {
  launchPoint: PropTypes.instanceOf(Date),
  position: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  setSpeed: PropTypes.func.isRequired
}

export default connect(Speed)
