enum Direction {
  Nord,
  Sud,
  Est,
  Ouest,
}

const vecteurDirection = (direction: Direction): [number, number] => {
  console.log([direction, direction + 1]);
  return [direction, direction + 1];
};

// vecteurDirection(Direction.Nord);
// vecteurDirection(Direction.Sud);
// vecteurDirection(Direction.Est);
// vecteurDirection(Direction.Ouest);

const deplacer = (point: [number, number],direction: Direction): [number, number] => {
  const [dx, dy] = vecteurDirection(direction);
  return [point[0] + dx, point[1] + dy];
};

deplacer([-15,15],Direction.Nord)
deplacer([-15,15],Direction.Sud)
deplacer([-15,15],Direction.Est)
deplacer([-15,15],Direction.Ouest)
