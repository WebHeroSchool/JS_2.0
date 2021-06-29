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
const regForm = quizContainer.querySelector('.form__reg')
const nameInput = regForm.querySelector('.form__reg-name')
const errorMsg = regForm.querySelector('.form__reg-error')
const quizTime = quizContainer.querySelector('.quiz__time')
const quizItem = quizContainer.querySelector('.quiz__item')
const btnContainer = quizContainer.querySelector('.btn__container')
const btnSub = quizContainer.querySelector('.btn__submit')
const btnPrev = quizContainer.querySelector('.btn__previous')
const btnNext = quizContainer.querySelector('.btn__next')
const btnShowResult = quizContainer.querySelector('.btn__show-result')
const btnRestart = quizContainer.querySelector('.btn__restart')

const showResult = document.createElement('div')
showResult.className = 'show-result'

let countSlide = 1
let countResult = 0
let result = {}
let time = 10



const showSlide = () => {
  renderQuestion(countSlide - 1)

  if (countSlide > 1 && countSlide < DATA.length) {
    btnNext.classList.remove('disabled')
    btnPrev.classList.remove('disabled')
    btnShowResult.classList.add('disabled')
    return
  }

  if (countSlide == DATA.length) {
    btnNext.classList.add('disabled')
    btnShowResult.classList.remove('disabled')
    return
  }

  if (countSlide <= 1) {
    
    btnPrev.classList.add('disabled')
    return
  }
}

// Функция занимается рендером каждого слайда
const renderQuestion = (index) => {
  regForm.classList.add('disabled')
  quizTime.classList.remove('disabled')
  

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

  // Проверка нажатия на вариант ответа
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

// Нажатие на кнопку старта игры
btnSub.addEventListener('click', (event) => {
  event.preventDefault()
  
  setTime(time)
  setInterval(decreaseTime, 1000)
  
  const reg = new RegExp('^[А-Я]{1}[а-яё]{1,9}')
  if (reg.test(nameInput.value)) {
    renderQuestion(0)

    quizItem.classList.remove('disabled')
    btnContainer.classList.remove('disabled')
    btnNext.classList.remove('disabled')
    return
  } 
  errorMsg.classList.remove('disabled')
  return 
})

// Фиксация ввода пользователя
nameInput.oninput = () => { errorMsg.classList.add('disabled') }

btnPrev.addEventListener('click', () => {
  countSlide--
  console.log(DATA[countSlide].time)
  showSlide()
})

btnNext.addEventListener('click', ()=> {
  countSlide++
  showSlide()
})

// Функция отсчета времени
function decreaseTime() {
  if (time === 0) {
    blockQuiz()
  }else {
    let current = --time
    if (current < 10) {
      current = `0${current}`
    }
    setTime(current)
  }
}

// Функция установки времени
function setTime(value) {
  quizTime.innerHTML = `00:${value}`
}


// Функция блокировки квиза
function blockQuiz() {

}

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
  btnPrev.classList.add('disabled')
  btnRestart.classList.remove('disabled')
  showResult.innerHTML = `${nameInput.value} вы ответили на ${countResult}/${DATA.length}`
  quizContainer.append(showResult)
})

// Начать игру с начала
btnRestart.addEventListener('click', () => {
  countSlide = 1
  countResult = 0
  result = {}
  showResult.remove()
  nameInput.value = ''
  regForm.classList.remove('disabled')
  quizItem.classList.add('disabled')
  btnShowResult.classList.add('disabled')
  btnRestart.classList.add('disabled')
  quizTime.classList.add('disabled')
})


