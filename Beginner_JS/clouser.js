//  clouser example -> in simple the child can access the paramenter of the parent function
const func1 = (a, b) => {
  const sum = a + b;
  console.log(sum);
  //    here with the clouser the child can access the parent func arguments
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
