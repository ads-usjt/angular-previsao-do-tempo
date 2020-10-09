export class Previsao {
  dt: number;
  main: {
    temp_max: number,
    temp_min: number,
    humidity: number,
  };
  weather: {
    description: string,
    icon: string,
  }[];
}
