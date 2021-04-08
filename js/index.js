const question_1 = {
  question: 'Кто создал автомобиль TESLA?',
  answers: {
    a: 'Стив Джобс',
    b: 'Илон Маск',
    c: 'Никола Тесла'  
  },
  currectAnswer: 'b'
}

const question_2 = {
  question: 'Дата основания YouTube?',
  answers: {
    a: '14.02.2005',
    b: '19.07.2004',
    c: '01.01.2006'  
  },
  currectAnswer: 'a'
}

const question_3 = {
  question: 'Кто является создателем ROBLOX?',
  answers: {
    a: 'Стив Возняк',
    b: 'Дэвид Басзуки',
    c: 'Илон Маск'  
  },
  currectAnswer: 'b'
}

const question_4 = {
  question: 'Какой фреймворк не относится к JavaScript?',
  answers: {
    a: 'React',
    b: 'Polymer',
    c: 'Flack'  
  },
  currectAnswer: 'c'
}

// Массив с вопросами и массив с ответами
const questions = [question_1, question_2, question_3, question_4]
const answers = ['b', 'a', 'b', 'a']

// Переменная подсчета правильных ответов
let countAswer = 0

// Ищем параграф 
const text = document.querySelector('.question')

// Функция подсчета правильных ответов
const trueAnswer = (item) => { 
  if (questions[item].currectAnswer === answers[item]) {
    countAswer++
  }
}

for (let i = 0; i < questions.length; i++) {
  trueAnswer(i)
}

text.innerHTML = `Количество правильных ответов: ${countAswer}`




