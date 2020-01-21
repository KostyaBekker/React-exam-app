
# TODO:
<!-- 1) Add column Actions for Users -->
<!-- 2) Move Edit to Actions -->
<!-- 3) Add Dlete button -->
<!-- 4) Empty password for new user -->
<!-- 5) Add Generate Password button -->
<!-- 6) Close rename to Cancel -->
<!-- 7) Add 'Users' title and move Add to the right -->
8) Add 'DElete' to questions
9) 
ВОПРОС
тип:
 - текст
 - фото
 - видео
раздел:
 - спорт ушу
 группа:
  - А
  - B
  - C
 - традиционное ушу
 группа:
  - А
  - B
 - саньшоу
 группа:
  - саньда
  - циньда
  - туйшоу
  - винчун


var sportG = [a, b, c]
var tradG = [a, b]
var syanshowG = ['SangDa', 'XingDa', 'TuiShow', 'VingChung']

var category = "sport"

switch category
case 'sport': return sportG

{
  "type": "text",
  "question":"qoiweyqioeyioqeyioqowie qioeyq e"
  "type":"sport",
  "group":"a",
  "answers": [
    {"text":"asdasda","correct":"false"},
    {"text":"asdasda","correct":"true"},
    {"text":"asdasda","correct":"false"},
    {"text":"asdasda","correct":"false"},
  ]
}

--> guid

GET /questions ==> 
POST /questions
PUT /questions/{id}
DELETE /questions/{id}

POST /users --> create user
PUT /users/{id} --> update user
GET /users --> get all users
DELETE /users/{id} -> delete user


POST /sessions



