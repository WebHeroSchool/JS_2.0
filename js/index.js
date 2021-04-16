const DATA = [
  {
    question: 'Кто создал автомобиль TESLA?',
    answers: [
      {
        id: '1',
        value: 'Стив Джобс',
        correct: false
      },
      {
        id: '2',
        value: 'Илон Маск',
        correct: true
      },
      {
        id: '3',
        value: 'Никола Тесла',
        correct: false
      }
    ]
  },
  {
    question: 'Дата основания YouTube?',
    answers: [
      {
        id: '4',
        value: '14.02.2005',
        correct: true
      },
      {
        id: '5',
        value: '19.07.2004',
        correct: false
      },
      {
        id: '6',
        value: '01.01.2006',
        correct: false
      }
    ]
  },
  {
    question: 'Кто является создателем ROBLOX?',
    answers: [
      {
        id: '7',
        value: 'Стив Возняк',
        correct: false
      },
      {
        id: '8',
        value: 'Дэвид Басзуки',
        correct: true
      },
      {
        id: '9',
        value: 'Илон Маск',
        correct: false
      }
    ]
  },
  {
    question: 'Какой фреймворк не относится к JavaScript?',
    answers: [
      {
        id: '10',
        value: 'React',
        correct: false
      },
      {
        id: '11',
        value: 'Polymer',
        correct: false
      },
      {
        id: '12',
        value: 'Flack',
        correct: true
      }
    ]
  }
]

// Переменные
const quizContainer = document.querySelector('.quiz__container')
const quizTime = quizContainer.querySelector('.quiz__time')
const quizItem = quizContainer.querySelector('.quiz__item')
const quizTitle = quizItem.querySelector('.quiz__title')
const quizAnswers = quizItem.querySelector('.quiz__answers')
const btnPrev = quizContainer.querySelector('.btn__previous')
const btnNext = quizContainer.querySelector('.btn__next')
const btnShowResult = quizContainer.querySelector('.btn__show-result')
const showResult = quizContainer.querySelector('.show-result')

let countSlide = 1
let countResult = 0
let result = {}

const showSlide = () => {
  renderQuestion(countSlide - 1)

  if (countSlide > 1 && countSlide < DATA.length) {
    btnNext.classList.remove('btn__disabled')
    btnPrev.classList.remove('btn__disabled')
    btnShowResult.classList.add('btn__disabled')
    return
  }

  if (countSlide == DATA.length) {
    btnNext.classList.add('btn__disabled')
    btnShowResult.classList.remove('btn__disabled')
    return
  }

  if (countSlide <= 1) {
    btnPrev.classList.add('btn__disabled')
    return
  }
}

// Функция занимается рендером каждого слайда
const renderQuestion = (index) => {
  // Функция для рендера списка ответов
  const renderAnswers = () => DATA[index].answers
    .map((answer) => `
        <li class="quiz__answer-item">
          <label class="quiz__answer__text ${result[index] == answer.id ? 'active' : ''}">
            <input class='answer__input' type="radio" name="${index}" value="${answer.id}">
            ${answer.value}
          </label>
        </li>
      `)
      .join('')

  quizItem.innerHTML = `
  <div class="quiz__item">
    <h1 class="quiz__title">${DATA[index].question}</h1>
    <ul class="quiz__answers">${renderAnswers()}</ul>
  </div>
  `
}

// Фиксируем нажатие на ответ и его корректность
quizContainer.addEventListener('change', (event) => {
  const item = event.target
  if (item.classList.contains('answer__input')){
    if (!result[item.name]) {
      // Добавляем в обьект result номер слайда и ответ который выбрал пользователь и запрещаем выбор другого варианта
      result[item.name] = item.value
      item.parentNode.classList.add('active')
      // Проверяем на корректность ответ
      checkResult(item.value)
    }
  }
  
})

btnPrev.addEventListener('click', () => {
  countSlide--
  showSlide()
})

btnNext.addEventListener('click', ()=> {
  countSlide++
  showSlide()
})

// Функция проверки результатов принимает id выбранного ответа
const checkResult = (value) => {
  DATA[countSlide-1].answers
    .map((answer) => {  
      // Проходимся по ответам текущего слайда и смотрим правильный ответ или нет
      if(answer.id === value && answer.correct) {
        countResult++
      }
    })
}

btnShowResult.addEventListener('click', () => {
  showResult.innerHTML = `Правильных ответов ${countResult}/${DATA.length}`
})

renderQuestion(0)