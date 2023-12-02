let input = [2, 7, 11, 15];
      console.log(input);
      var sum = 9;
      for (i = 0; i < input.length; i++) {
        for (j = i + 1; j <= input.length; j++) {
          if (input[i] + input[j] == sum) {
            console.log(i, j);
          }
        }
      }