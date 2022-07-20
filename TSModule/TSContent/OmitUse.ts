// Omit use
interface Robot {
  ID: number;
  name: string;
  coinageDate: Date;
  productionSeries: 'Special';
}

interface SpecialRobot extends Omit<Robot, 'productionSeries'> {}

const SpecialModel01: SpecialRobot = {
  ID: 1,
  name: 'RW - 3000',
  coinageDate: new Date(),
};
