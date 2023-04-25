// curry function
name = "curry";
let name1 = (result) => {
  while (result > 0) {
    name1(result--);
  }
};

name1(10);

function getdate(a) {
  return (b) => {
    return (c) => {
      console.log(a + c + b);
    };
  };
}
console.log(getdate()());
