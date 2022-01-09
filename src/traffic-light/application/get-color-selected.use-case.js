import { TrafficLightModel } from '../domain/traffic-light.model';
import { TrafficLightColors } from '../domain/traffic-light.model';

export class GetColorSelectedUseCase {
  refInterval = null;

  run(colorSelected) {
    const trafficLightModel = new TrafficLightModel(TrafficLightColors.RED);

    this.refInterval = setInterval(() => {
      trafficLightModel.turnOnNextCircule();
      
      colorSelected(trafficLightModel.getColorSelected());
    }, 2000);
  }

  stop() {
    this.refInterval && clearInterval(this.refInterval);
  }
}
