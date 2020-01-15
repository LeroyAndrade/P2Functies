let menuKaart = ["Lasagne en macaroni", "Spaghetti met ham en kaas", "Macaroni met ham en kaas",
  "Tagliatelli met ham en kaas", "Spaghetti met spinazie en room",
  "Macaroni met spinazie en room", "Tagliatelli met spinazie en room",
  "Spaghetti met gehakt-tomatensaus en kaas *", "Macaroni met gehakt-tomatensaus en kaas *",
  "Tagliatelli met gehakt-tomatensaus en kaas *"
];

//Defineer array zonder waarde
let menuKaartKopieUn =[],menuKaartKopieUp =[];
//opdracht 1 - 1/4
function gerechten01() {
  for (let i = 0; i <= menuKaart.length; i++) {
    console.log(menuKaart[i]);
  }
}
//opdracht 1 - 2/4

function gerechten02(number2) {
  return menuKaart[number2];
}

//opdracht 1 - 3/4 en opdracht 4/4

function gerechten03(xy){
return menuKaartKopieUn = (menuKaart[xy]);
}

function gerechten031(xy){
return gerechten03(xy);
}
