import React, { useEffect, useState } from 'react';
import './traffic-light.css';
import { GetColorSelectedUseCase } from './application/get-color-selected.use-case';
import { TrafficLightColors } from './domain/traffic-light.model';

export const TrafficLight = () => {
  const [ color, setColor ] = useState();

  useEffect(() => {
    const getColorSelectedUseCase = new GetColorSelectedUseCase();
    getColorSelectedUseCase.run(setColor);

    return () => {
      getColorSelectedUseCase.stop();
    };
  }, []);

  return <div className='tf-container'>
    <div className='tf-box'>
      <div className={`tf-circule tf-color-red ${TrafficLightColors.RED === color && 'tf-turn-on'}`}></div>
      <div className={`tf-circule tf-color-orange ${TrafficLightColors.ORANGE === color && 'tf-turn-on'}`}></div>
      <div className={`tf-circule tf-color-green ${TrafficLightColors.GREEN === color && 'tf-turn-on'}`}></div>
    </div>
  </div>
};
