import { CircularProgress } from "@material-ui/core"

const backgroundStyle = {
  position: 'absolute',
  zIndex: '99',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.2)'
}

const AbsoluteLoader = () => {
  return (
    <div style={backgroundStyle}>
      <CircularProgress />
    </div>
  )
}

export default AbsoluteLoader