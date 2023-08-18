//  clouser example
const func1 = (a, b) => {
  const sum = a + b;
  console.log(sum);
  return {
    func2: (num) => {
      console.log(a + b + num);
    },
  };
};

const call = func1(2, 3);
call.func2(5);

const call1 = func1(5, 5);
call1.func2(5);
