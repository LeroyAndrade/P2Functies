let menuKaart =["Lasagne en macaroni", "Spaghetti met ham en kaas","Macaroni met ham en kaas",
"Tagliatelli met ham en kaas","Spaghetti met spinazie en room",
"Macaroni met spinazie en room","Tagliatelli met spinazie en room",
"Spaghetti met gehakt-tomatensaus en kaas *","Macaroni met gehakt-tomatensaus en kaas *",
"Tagliatelli met gehakt-tomatensaus en kaas *"];

//Defineer menuKaart zonder waarde
let menuKaartKopie2Up =[], menuKaartKopieUn =[];

for (let a=0; a<menuKaart.length; a++)
{
menuKaartKopieUn.unshift(menuKaart[a]);
menuKaartKopie2Up.push(menuKaart[a]);
}
/*

//opdracht 1 - 1/4
function gerechten01()
{
  for(let i=0; i<= menuKaart.length; i++)
  {
  console.log(menuKaart[i]);
  }
}
//opdracht 1 - 2/4

function gerechten02(number2)
{
return menuKaart[number2];
}

//opdracht 1 - 3/4

function gerechten03(number3)
{
return menuKaart[number3] = menukaartdrie[number3];
}

/*
//opdracht 1 - 4/4
function gerechten04(number4)
{

}

function gerechten04(number)
{

}
*/
