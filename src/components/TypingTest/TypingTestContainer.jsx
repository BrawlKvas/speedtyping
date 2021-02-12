import { useEffect } from "react"
import { Redirect, useHistory } from "react-router-dom"
import AbsoluteLoader from "../common/AbsoluteLoader"
import TypingTest from "./TypingTest"
import connect from './TypingTestContainer.connect'

const TypingTestContainer = ({ text, startTest, isFinished }) => {
  const history = useHistory()

  useEffect(() => {
    startTest()
  }, [])

  if (isFinished) {
    return <Redirect to="/test/completed" />
  }

  if (text === null)
    return <AbsoluteLoader />

  return (
    <TypingTest />
  )
}

export default connect(TypingTestContainer)
