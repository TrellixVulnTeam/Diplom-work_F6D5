// JavaScript Document

let numb = document.getElementById('numb'),
	one = document.querySelector('.one'),
	two = document.querySelector('.two'),
	three = document.querySelector('.three'),
	four = document.querySelector('.four'),
	five = document.querySelector('.five'),
	six = document.querySelector('.six'),
	seven = document.querySelector('.seven'),
	eight = document.querySelector('.eight'),
	nine = document.querySelector('.nine'),
	zero = document.querySelector('.zero'),
	equals = document.querySelector('.equals'),
	plus = document.querySelector('.plus'),
	minus = document.querySelector('.minus'),
	multiply = document.querySelector('.multiply'),
	devide = document.querySelector('.devide'),
	comma = document.querySelector('.comma'),
	percent = document.querySelector('.percent'),
	discharge = document.querySelector('.discharge'),
	input1 = 0, //Переменная для сохранения складываемого числа первого со вторым
	operatorValue = '', //Переменная для сохранения знака для вычисления
	operatorCheck; //Переменная для проверки был ли только что нажат один из операторов

//Функция для добавления цифры в поле ввода
function addNumber(number){
	if (operatorCheck){ //Если только что был нажат какой-либо оператор, заменяем число в поле полностью
		numb.value = number;
		operatorCheck = false;
	} else if (numb.value == '0'){ //Если в поле ввода находится лишь ноль, то заменяем его на вводимое число
		numb.value = number;
	} else { //При всех остальных случаях далее вводим цифры
		numb.value += number;
	}
};

//Цифры от 0 до 9 при нажатии
one.addEventListener('click', function(){ addNumber(1) });
two.addEventListener('click', function(){ addNumber(2) });
three.addEventListener('click', function(){ addNumber(3) });
four.addEventListener('click', function(){ addNumber(4) });
five.addEventListener('click', function(){ addNumber(5) });
six.addEventListener('click', function(){ addNumber(6) });
seven.addEventListener('click', function(){ addNumber(7) });
eight.addEventListener('click', function(){ addNumber(8) });
nine.addEventListener('click', function(){ addNumber(9) });
zero.addEventListener('click', function(){ addNumber(0) });

//Функция для кнопки Сброс
function reset(){
	numb.value = '0';
	input1 = 0;
	operatorValue = '';
	operatorCheck = undefined;
};
//Функция для нажатия на операторы
function btn(operator){
	if (operatorCheck === undefined){ //При вводе после сброса, нажатия равно или первом вводе, сохраняем первое значение, сохраняем выбрайный оператор и переводим операторчек в положение тру
		input1 = numb.value;
		operatorValue = operator;
		operatorCheck = true;
	}else if (operatorCheck){ //Если до этого был нажат любой оператор, то просто заменяем его значение
		operatorValue = operator;
	} else { //Проводим вычисление предыдущего оператора и значений и сохраняем новый оператор и значение
		btnEquals();
		operatorValue = operator;
		operatorCheck = true;
	}
}
//Функция вычисления
function btnEquals(){
	switch(operatorValue){ //Проводим вычесление двух значений и после записываем все в поле и делаем сброс статутса и значения оператора
		case '+': 
			input1 = Number(input1) + Number(numb.value);
			numb.value = input1;
			operatorValue = '';
			operatorCheck = undefined;
			break;
		case '-':
			input1 = Number(input1) - Number(numb.value);
			numb.value = input1;
			operatorValue = '';
			operatorCheck = undefined;
			break;
		case '*':
			input1 = Number(input1) * Number(numb.value);
			numb.value = input1;
			operatorValue = '';
			operatorCheck = undefined;
			break;
		case '/':
			input1 = Number(input1) / Number(numb.value);
			numb.value = input1;
			operatorValue = '';
			operatorCheck = undefined;
			break;
	};
};
//Функция которая добавляет запятую и смотрит не поставлена ли она уже
function btnComma(){
	if (!operatorCheck && numb.value.indexOf('.') == -1){
		numb.value += '.';
	}
};
//Функция для вычесления процентов от первого значения
function btnPercent(){
	if (operatorValue == ''){
		numb.value = numb.value / 100;
	} else {
		numb.value = input1 / 100 * numb.value;
	}
};

discharge.addEventListener('click', reset);
plus.addEventListener('click', function(){ btn('+') });
minus.addEventListener('click', function(){ btn('-') });
devide.addEventListener('click', function(){ btn('/') });
multiply.addEventListener('click', function(){ btn('*') });
equals.addEventListener('click', btnEquals);
comma.addEventListener('click', btnComma);
percent.addEventListener('click', btnPercent);