 var i, flag = true;
           var a=prompt("Enter a number");
          
            for(i = 2; i <= n - 1; i++)
                if (n % i == 0) {
                    flag = false;
                    break;
                }
        if (flag == true)
                alert(a + " is prime");
            else
                alert(a + " is not prime");