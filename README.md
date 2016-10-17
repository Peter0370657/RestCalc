Ga naar https://github.com/Peter0370657/ex-3-Leriche-Peter/tree/TestvanWibrencode



Als ik de opdracht goed begrijp is het de bedoeling iets te maken zoals op http://stackoverflow.com/questions/8275209/how-can-i-create-a-restful-calculator
dat je bijvoorbeeld localhost:3000/3/+5 kan ingeven als URL en dat je dan het antwoord van 3+5 te zien krijgt.

----------------------------------------------------------------------------------------------------------------

Ik twijfel een beetje of het de bedoeling is om een HTML calc te maken zoals je hier kan zien: http://i.imgur.com/0ar05kH.png
en dat je wanneer je op "=" klikt, dat het dan alles doorstuurd naar de API om daar te laten berekenen.

of, dat je bijvoorbeeld Localhost:3000/RealCalc/Som5+5/ ingeeft (of Localhost:3000/RealCalc/Som/5/5/) of iets dergelijks.
------- Zit kan al niet werken want een + kan niet in een url - dit word een %2B   dus vb: localhost:3456/calc/5%2b5


voor beiden heb ik geen enkel idee hoe ik er aan moet beginnen. ik heb hier niet genoeg javascript / html / node.js kennis voor.


Alles werkt nu via URL, geen inputs in de html.


2 + 5 is: /calc/2%2B5

5 - 2 is: /calc/2%2D5

5 * 2 is: /calc/5%2A2

10/2 is : /calc/10%2F2

