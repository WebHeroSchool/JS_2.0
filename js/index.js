const question_1 = {
  question: 'Кто создал автомобиль TESLA?',
  answer: 'Никола',
  currectAnswer: 'Илон Маск'
}

const question_2 = {
  question: 'Дата основания YouTube?',
  answer: '',
  currectAnswer: '14 февраля 2005 г.'
}

const question_3 = {
  question: 'Кто является создателем ROBLOX?',
  answer: 'Дэвид Басзуки',
  currectAnswer: 'Дэвид Басзуки'
}

const question_4 = {
  question: 'Кем был создан Интернет?',
  answer: 'Мной)',
  currectAnswer: 'Тим Бернерс-Ли'
}

// Функция сравнения ответов
const trueAnswer = (aswer, currectAnswer) => { 
  aswer === currectAnswer ? 'Правильный ответ' : 'Ответ неверный'
}

const data = [question_1, question_2, question_3, question_4]

data.forEach(item => {
  console.log(trueAnswer(item.answer, item.currectAnswer))
})