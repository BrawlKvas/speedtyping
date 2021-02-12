import Accuracy from "./Accuracy/Accuracy"
import Speed from "./Speed/Speed"

const Statistics = () => {
  return (
    <div style={{ display: 'flex', columnGap: '40px' }}>
      <Accuracy />
      <Speed />
    </div>
  )
}

export default Statistics
