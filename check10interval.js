const num = 200;

function findGap(num) {
  const mod = num % 100;

  if (mod === 0) {
    return true;
  }
  return mod >= 90 || mod <= 10;
}

function loop() {
  for (let i = 1; i <= num; i++) {
    console.log(i + "-" + findGap(i));
  }
}

loop();
