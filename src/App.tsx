import React from 'react';
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <Button type={ButtonType.Primary}>按钮</Button>
      <Button size={ButtonSize.Larger}>按钮</Button>
      <Button size={ButtonSize.Larger} disabled={true}>按钮</Button>
      <Button type={ButtonType.Link} disabled={true}>按钮</Button>
      <Button type={ButtonType.Link}>按钮</Button>
    </div>
  );
}

export default App;
