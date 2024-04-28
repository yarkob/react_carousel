import React, { useEffect, useState } from 'react';
import './Carousel.scss';

interface Props {
  images: string[];
  itemWidth: number;
  frameSize: number;
  step: number;
  animationDuration: number;
  infinite: boolean;
}

const Carousel: React.FC<Props> = ({
  images,
  itemWidth,
  step,
  animationDuration,
  frameSize,
  infinite,
}) => {
  const [shift, setShift] = useState(0);

  const maxLength = (images.length - frameSize) * itemWidth;
  const isEnd = shift === -maxLength && !infinite;
  const isStart = shift === 0 && !infinite;

  useEffect(() => {
    if (shift < -maxLength) {
      setShift(-maxLength);
    }
  }, [maxLength, shift]);

  const handleNext = () => {
    setShift(prevShift => {
      if (infinite && shift === -maxLength) {
        setShift(0);
      }

      const newShift = prevShift - itemWidth * step;

      if (newShift < -maxLength) {
        return -maxLength;
      }

      return newShift;
    });
  };

  const handlePrev = () => {
    setShift(prevShift => {
      if (infinite && shift === 0) {
        setShift(-maxLength);
      }

      const newShift = prevShift + itemWidth * step;

      if (0 < newShift) {
        return 0;
      }

      return newShift;
    });
  };

  return (
    <div className="Carousel">
      <ul className="Carousel__list" style={{ width: frameSize * itemWidth }}>
        {images.map(image => (
          <li
            key={image}
            style={{
              transform: `translateX(${shift}px)`,
              transitionDuration: `${animationDuration}ms`,
            }}
          >
            <img src={image} alt={image} style={{ width: itemWidth }} />
          </li>
        ))}
      </ul>

      <button
        data-cy="next"
        type="button"
        onClick={handlePrev}
        disabled={isStart}
      >
        Prev
      </button>
      <button type="button" onClick={handleNext} disabled={isEnd}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
