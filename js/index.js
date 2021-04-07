const question_1 = {
  question: 'Кто создал автомобиль TESLA?',
  answer: {
    a: 'Стив Джобс',
    b: 'Никола Тесла',
    c: 'Илон Маск'  
  },
  currectAnswer: 'c'
}

const question_2 = {
  question: 'Дата основания YouTube?',
  answer: {
    a: '14.02.2005',
    b: '19.07.2004',
    c: '01.01.2006'  
  },
  currectAnswer: 'a'
}

const question_3 = {
  question: 'Кто является создателем ROBLOX?',
  answer: {
    a: 'Стив Возняк',
    b: 'Дэвид Басзуки',
    c: 'Илон Маск'  
  },
  currectAnswer: 'b'
}

const question_4 = {
  question: 'Какой фреймворк не относится к JavaScript?',
  answer: {
    a: 'React',
    b: 'Polymer',
    c: 'Flack'  
  },
  currectAnswer: 'c'
}

const data = [question_1, question_2, question_3, question_4]

data.forEach(item => {
  if (item.currectAnswer === 'c'){
    console.log(item.answer.c)
  }
})