
/**
 * Challenge: 
 * 
 * Build a Button component in a separate file.
 * (For styling purposes, make sure it renders an HTML <button> element)
 * Your button component should take a `text` prop
 */
function CustomButton({text}) { // props.text
  return (
    <main>
      <button>{text}</button>
      {/* <input type="submit" value={text} /> */}
    </main>
  )
}

export default CustomButton
