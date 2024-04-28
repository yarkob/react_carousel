import React, { ChangeEvent, useState } from 'react';
import './App.scss';
import Carousel from './components/Carousel';
import { Input } from './components/Input';

const App: React.FC = () => {
  const images = [
    './img/1.png',
    './img/2.png',
    './img/3.png',
    './img/4.png',
    './img/5.png',
    './img/6.png',
    './img/7.png',
    './img/8.png',
    './img/9.png',
    './img/10.png',
  ];

  const [inputs, setInputs] = useState({
    itemWidth: 130,
    frameSize: 3,
    step: 3,
    animationDuration: 1000,
    infinite: false,
  });

  const inputHandler = (
    event: ChangeEvent<HTMLInputElement>,
  ): void | undefined => {
    const { name, value, checked, type } = event.target;

    setInputs(prevState => {
      return { ...prevState, [name]: type === 'checkbox' ? checked : +value };
    });
  };

  return (
    <div className="App">
      {/* eslint-disable-next-line */}
      <h1 data-cy="title">Carousel with {images.length} images</h1>

      <form className="form">
        <Input
          label="itemId"
          name="itemWidth"
          type="number"
          value={inputs.itemWidth}
          handler={inputHandler}
          text="Item Width"
          min={10}
          max={800}
        />
        <Input
          label="frameId"
          name="frameSize"
          type="number"
          value={inputs.frameSize}
          handler={inputHandler}
          text="Frame Size"
          min={1}
          max={images.length}
        />
        <Input
          label="stepId"
          name="step"
          type="number"
          value={inputs.step}
          handler={inputHandler}
          text="Step"
          min={1}
          max={images.length}
        />
        <Input
          name="animationDuration"
          type="number"
          value={inputs.animationDuration}
          handler={inputHandler}
          text="Animation Duration"
          min={1000}
          step={100}
        />
        <Input
          name="infinite"
          type="checkbox"
          checked={inputs.infinite}
          handler={inputHandler}
          text="Infinite"
        />
      </form>

      <Carousel images={images} {...inputs} />
    </div>
  );
};

export default App;
