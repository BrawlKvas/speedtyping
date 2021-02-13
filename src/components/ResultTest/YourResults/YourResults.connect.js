import { connect } from "react-redux"

const mapStateToProps = ({ typingTest }) => {
  const { speed, text, wrongCounter, isFinished } = typingTest

  if (!isFinished)
    return { isFinished }

  return {
    speed,
    isFinished,
    accuracy: +(((text.length) - wrongCounter) * 100 / (text.length)).toFixed(1)
  }
}

export default connect(mapStateToProps, null)