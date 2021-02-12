import { connect } from "react-redux"

const mapStateToProps = ({ typingTest }) => {
  const { position, wrongCounter } = typingTest

  return {
    accuracy: +(((position) - wrongCounter) * 100 / (position)).toFixed(1) || 0
  }
}

export default connect(mapStateToProps, null)