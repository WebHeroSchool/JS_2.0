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


// Функция сравнения ответов
const trueAnswer = (item) => { 
 return questions[item].currectAnswer === answers[item] ? 'Ответ верный': 'Ответ неверный'
}

const questions = [question_1, question_2, question_3, question_4]

const answers = ['a', 'c', 'b', 'a']

for (let i = 0; i < questions.length; i++) {
  console.log(trueAnswer(i))
}


