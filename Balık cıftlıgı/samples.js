


  // COMPARING ELEMENTS IN TWO DIFFERENT ARRAYS AND GIVES INDEX NUMBER

  const euCountries = ["Austria", "Belgium", "Bulgaria", "Croatia", "Republic of Cyprus", "Czech Republic", 
  "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", 
  "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", 
  "Spain", "Sweden"];

  const other = ["Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia" ];
  function findMatch(array_1_small, array2_large) {
    var ary = new Array();
    for(i = 0;i < array2_large.length; i++)
    {
      for(z = 0; z < array_1_small.length; z++)
      {
        if(array2_large[i] == array_1_small[z])
        {
          ary.push(i);
        }
      }
    
    }
    return ary;
    }  
    
    const result = findMatch (euCountries, other);
    console.log(result);
