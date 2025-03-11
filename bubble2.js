function bubbleSort(array) {
    const arrayLenght = array.length;
   
    for (let i = 0; i < arrayLenght; i++) {
   
      for (let j = 0; j < (arrayLenght - i - 1); j++) {
   
        if (array[j] > array[j + 1]) {
          let tmp = array[j];
   
          array[j] = array[j + 1];
          array[j + 1] = tmp;
          console.log("Verbleibende Durchläufe: " + (arrayLenght - i - 1))
          console.log(array)
        }
   
      }
    }
   
    return array;
  }
   
  const arr = [123, 12345, 989, 2, 312, 12, 77];
   
  const sortedArray = bubbleSort(arr);
  console.log("Sorted Array:", sortedArray);
   
   