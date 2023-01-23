//Find the second lowest and second greatest numbers from an array
function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];

  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));
console.log(Second_Greatest_Lowest([25,62,89,110,55]));
console.log(Second_Greatest_Lowest([37,20,99,82,41]));
console.log(Second_Greatest_Lowest([110,625,842,351,596,547,111]));
