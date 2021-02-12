import { connect } from "react-redux"
import { startTest } from './../../redux/typingTestSlice'

const mapStateToProps = ({ typingTest }) => ({
  text: typingTest.text,
  isFinished: typingTest.isFinished
})

const mapDispatchToProps = {
  startTest,
}

export default connect(mapStateToProps, mapDispatchToProps)