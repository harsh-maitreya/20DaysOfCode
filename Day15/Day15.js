//JavaScript program to check two given integers have opposite signs or not.
const opposite_Signs = (x, y) => {
    if ((typeof x!= "number") || (typeof y!= "number"))
    {
      return 'Parameters value must be number!'
    }
     if ((x ^ y) < 0)
       return true;
     else
       return false;
     }
x = 576
y = -293
result = opposite_Signs(x, y)
if (result === true)
  console.log("Signs are opposite");
else if (result === false)
  console.log("Signs are not opposite");
else console.log(result);
x = 300
y = 900
result = opposite_Signs(x, y)

if (result === true)
  console.log("Signs are opposite");
else if (result === false)
  console.log("Signs are not opposite");
else console.log(result);
x = '357'
y = 401
result = opposite_Signs(x, y)
if (result === true)
  console.log("Signs are opposite");
else if (result === false)
  console.log("Signs are not opposite");
else console.log(result);
