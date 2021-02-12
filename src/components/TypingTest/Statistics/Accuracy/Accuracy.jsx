import Parameter from '../Parameter'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import PropTypes from 'prop-types'
import connect from './Accuracy.connect'

const Accuracy = ({ accuracy }) => {
  return (
    <Parameter title="Точность" unit="%" Icon={CheckCircleOutlineIcon} value={accuracy} />
  )
}

Accuracy.propTypes = {
  accuracy: PropTypes.number.isRequired
}

export default connect(Accuracy)
