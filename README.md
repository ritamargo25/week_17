вопросы неделя 17

1. Какие кавычки можно использовать для создания строк в JS и в чем разница между ними?
"" 
''
`` отличаются от одинарных и двойных кавычек тем, что в такие кавычки мы можем вставлять разные выражения, персонализированные обращения с помощью знака ${…}

2. Какими методами можно найти подстроку в строке? Приведите пример.
с помощью 3 методов:
-slice (мы указываем 2 параметра части строки, которую хотим найти: индекс ее начала и конца)
-substring (то же самое что slice но не может принимать отрицательных значений)
-substr (мы указываем 2 параметра части строки, которую хотим найти: индекс ее начала и ее длину)

3. Самостоятельно разберитесь, зачем нужен специальный символ \\n?
\n означает перенос строки
а если писать этот символ с 2 знаками \\, то это будет означать 

4. Напишите код, который делает первый символ заглавным. Например, "настя" ⇒ "Настя"
let str= 'настя';
str = 'Н' + str[1]+str[2]+str[3]+str[4];
alert(str);


5. Как создать дату 24 января 2021 года, 22 часа 51 минута? Временная зона – местная.
let date = new Date(2021, 0, 24, 22, 51, 0, 0); 
alert( date );

6. Как посчитать, сколько секунд осталось до завтра?



7. Как выделить из строки с денежной суммой (например, 120р. или 99€) только цифры, т.е. 120 и 99?ƒ
let str = "120p";
let res = str.slice(0,3);
alert(res);

8. Зачем нужны функции join и split?
с помощью функции split мы можем отделить элементы строки друг от друга, преобразовав их в отдельные элементы массива, чтобы мы потом могли использовать эти элементы по-отдельности.
А с помощью функции join мы можем их обратно склеить в строку

9. Какой из вариантов округления делает это по математическим правилам?
Math.round

10. Как сгенерировать случайное число от 1 до 100?
c помощью функции Math.random
она всегда возвращает число ниже 1
и с помощью умножения мы можем вызвать рандомно уже числа больше 1

11. Зачем нужна функция str.trim() ?
эта функция убирает пробелы в начале и конце строки

12. Что такое флаг?
это такая переменная, которая позволяет изменить поведение регулярных выражений и правила поиска совпадений в строке
