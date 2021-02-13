import { connect } from "react-redux"

const mapStateToProps = ({ typingTest }) => {
  const { text, wrongCounter } = typingTest

  return {
    accuracy: +(((text.length) - wrongCounter) * 100 / (text.length)).toFixed(1)
  }
}

export default connect(mapStateToProps, null)