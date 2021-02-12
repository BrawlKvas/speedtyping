import { connect } from "react-redux"
import { enterChar, enterBackspace } from './../../../redux/typingTestSlice'

const mapStateToProps = ({ typingTest }) => ({
  text: typingTest.text,
  position: typingTest.position,
  isWrong: typingTest.isWrong
})

const mapDispatchToProps = {
  enterChar,
  enterBackspace
}

export default connect(mapStateToProps, mapDispatchToProps)