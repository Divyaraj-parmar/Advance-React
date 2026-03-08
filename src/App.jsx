import Button from './components/CustomButton'
import Marquee from './components/Marquee'

function App() {

  return (
    <>
      <Marquee >Advance React Learning</Marquee> {/* <- children in react JSX or native html tag inside components are considered as children of that component*/}
      {/* <Button text="Click"> </Button> */}
    </>
  )
}

export default App
