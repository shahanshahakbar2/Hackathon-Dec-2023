let num = [1, 2, 4, 5];
      for (let i = 0; i <= num.length; i++) {
        for (let j = i + 1; j <= num.length; j++) {
          if (num[i] > num[j]) {
            let temp = num[i];
            num[i] = num[j];
            num[j] = temp;
          }
        }
      }
      let newnum = num;
      console.log(newnum);
      var k = 1;
      for (i = 0; i < num.length; i++) {
        if (newnum[i] == k) {
          k = k + 1;
        } else {
          console.log(k);
          break;
        }
      }