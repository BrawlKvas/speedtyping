import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import PropTypes from 'prop-types'
import AbsoluteLoader from "../common/AbsoluteLoader"
import InitialDialogue from "./InitialDialogue"
import TypingTest from "./TypingTest"
import connect from './TypingTestContainer.connect'

const TypingTestContainer = ({ text, startTest, isFinished }) => {
  const history = useHistory()
  const [isFirstRender, setIsFirstRender] = useState(true)

  useEffect(() => {
    startTest()
    setIsFirstRender(false)
  }, [])

  useEffect(() => {
    if (isFinished && !isFirstRender) {
      history.push('/test/completed')
    }
  }, [isFinished])

  if (text === null)
    return <AbsoluteLoader />

  return (
    <>
      <InitialDialogue />
      <TypingTest startTest={startTest} />
    </>
  )
}

TypingTestContainer.propsTypes = {
  text: PropTypes.string,
  startTest: PropTypes.func.isRequired,
  isFinished: PropTypes.bool.isRequired
}

export default connect(TypingTestContainer)
