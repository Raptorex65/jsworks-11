let carBrand = prompt ("What is the brand of the car?")
input
let carColor = prompt ("What is the brand of the car?")

let carYear = prompt ("What is the brand of the car?")

let carTypes = ['BMW', 'Audi', 'VW'];
let carColor = ['Red', 'Black'];
let carYear =[2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,]

if ((carBrand == 'BMW') && (carColor == 'Red') && (2010 >=carYear<=2019)) || ((carBrand == 'BMW') && (carColor == 'Black') && (carYear == 2020)){
    console.log("BMWyi İceri Al Cırak");
}   else if ((carBrand == 'Audi') && (carColor == 'Black') && (2001 >= carYear <=2018)){
    console.log("Audiyi İceri Al Cırak");
}   else if ((carBrand == 'VW') && (2005 >= carYear <=2010 ) && (2014 >= carYear <=2020)){
    document.getElementById("test").innerHTML = "Audiyi İceri Al Cırak";
}

    