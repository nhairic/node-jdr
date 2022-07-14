import Dice from "../Dice";

test('should roll some dice', () => {

  const result = Dice.d10();
  expect(result).toBeGreaterThan(0);
  expect(result).toBeLessThan(11);
});

test('should test random split', () => {

  const data:number[] = [0, 0, 0, 0, 0, 0, 0];
  for(let i = 0; i < 1000000; i++){
    const roll = Dice.d6();
    data[roll] = data[roll] + 1;
  }

  const result = data.filter(x => x > 0);

  // print the result
  for(let i = 0; i < result.length; i++){
    console.log(`[${i}] : ${result[i]}`);
  }


  const sum = result.reduce((x, y) => x + y, 0);
  const mean = 1000000 / 6;

  const variance = result.map(x => x - mean);

  console.log("sum", sum);
  console.log("mean", mean);
  console.log("variance", variance);

  const v_max = variance.reduce((x, y) => Math.max(x, y), 0);
  const v_min = variance.reduce((x, y) => Math.min(x, y), v_max);

  const error_margin = 1000;
  // A very basic test to check random is random enougth
  expect(v_max).toBeLessThan(error_margin);
  expect(v_min).toBeLessThan(error_margin);
});
