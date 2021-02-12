import { connect } from "react-redux"
import { setSpeed } from './../../../../redux/typingTestSlice'

const mapStateToProps = ({ typingTest }) => ({
  launchPoint: typingTest.launchPoint,
  position: typingTest.position,
  speed: typingTest.speed
})

const mapDispatchToProps = {
  setSpeed
}

export default connect(mapStateToProps, mapDispatchToProps)