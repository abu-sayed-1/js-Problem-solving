function feetTomile(feet){
    var mile = feet / 5280;

    return mile;
}

var mileFeet = feetTomile (52800);
console.log(mileFeet,"mile");




function woodCalculator(chair,table,bed ){
     var chairCount = chair * 1;
     var tableCount = table * 3;
     var bedCount= bed * 5;
     var totalWood = chairCount + tableCount + bedCount ;
     return totalWood;
}
 var woodResult = woodCalculator(14, 5, 12);
 console.log( woodResult); 
 var woodResul = woodCalculator(2,2,1);
  console.log(woodResul);
 