import React, { ChangeEvent } from 'react';
import './Input.scss';

interface Props {
  name: string;
  type: string;
  value?: string | number;
  handler: (event: ChangeEvent<HTMLInputElement>) => void | undefined;
  text: string;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  checked?: boolean;
}

export const Input: React.FC<Props> = ({
  label,
  name,
  type,
  value,
  handler,
  text,
  checked,
  min,
  max,
  step,
}) => {
  return (
    <label htmlFor={label || name} className="label">
      {text}:
      <input
        id={label || name}
        type={type}
        name={name}
        value={value}
        onChange={handler}
        min={min}
        max={max}
        step={step}
        checked={checked}
      />
    </label>
  );
};
