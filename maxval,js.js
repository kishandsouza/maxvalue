function Maximum(arr) {

    let maxValue = arr[0]; 
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i]; 
      }
    }
    console.log(maxValue);
  }
  
  const numbers = [12, 45, 6, 71, 23, 56];
  Maximum(numbers);