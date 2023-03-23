export {};

function onlyTheAces(arr: string[]) {
  const newArr: string[] = [];
  arr.forEach((element: string) => {
    if (element === "Ace") {
      newArr.push(element);
    }
  });
  return newArr;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
