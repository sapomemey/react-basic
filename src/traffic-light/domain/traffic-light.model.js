export const TrafficLightColors = {
  RED: 'red',
  ORANGE: 'orange',
  GREEN: 'green'
};

export class TrafficLightModel {
  circules = [
    { color: TrafficLightColors.RED, turnedOn: false },
    { color: TrafficLightColors.ORANGE, turnedOn: false },
    { color: TrafficLightColors.GREEN, turnedOn: false },
  ];

  constructor(colorTurnedOn) {
    this.selectColor(colorTurnedOn);
  }

  getColorSelected() {
    return this.circules.find(circule => circule.turnedOn).color;
  }

  turnOnNextCircule() {
    const indexCirculeSelected = this.circules.findIndex(circule => circule.turnedOn);

    this.circules = this.circules.map(({ color, turnedOn }, index) => {
      if (this.getSelectedPosition(indexCirculeSelected) === index) {
        return {
          color,
          turnedOn: true
        };
      }

      return { color, turnedOn: false };
    });
  }

  getSelectedPosition(index) {
    const newIndex = index + 1;
    return newIndex === 3 ? 0 : newIndex;
  }

  selectColor(colorSelected) {
    this.circules = this.circules.map(({ color, turnedOn }) => {
      if (color === colorSelected) {
        return { color, turnedOn: true };
      }

      return { color, turnedOn };
    });
  }
}
