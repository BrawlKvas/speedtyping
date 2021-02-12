import { Redirect, Route, Switch } from "react-router-dom"
import TypingTestContainer from './components/TypingTest'
import ResultTest from './components/ResultTest'

export default () => (
  <Switch>
    <Route path="/test" exact component={TypingTestContainer} />

    <Route path="/test/completed" exact component={ResultTest} />

    <Redirect to="/test" />
  </Switch>
)