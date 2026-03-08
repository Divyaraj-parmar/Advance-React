import Button from './components/CustomButton'
import Marquee from './components/Marquee'

function App() {
 let btnText = "Buy Now!";
  return (
    <>
      <Marquee >Advance React Learning</Marquee> {/* <- children in react JSX or native html tag inside components are considered as children of that component*/}
      <Button> {btnText}</Button>{/* <- children in react JSX or native html tag inside components are considered as children of that component*/}
    </>
  )
}

export default App
