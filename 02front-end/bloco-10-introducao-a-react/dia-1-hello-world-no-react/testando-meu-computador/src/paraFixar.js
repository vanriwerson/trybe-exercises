function paraFixar() {
  const textJSX = 'JSX';
  const helloWorld = (text) => {
    return <h1>Hello, {text}!</h1>;
  }
  return helloWorld(textJSX);
}

export default paraFixar;
