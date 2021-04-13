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
        id: '1',
        value: '14.02.2005',
        correct: true
      },
      {
        id: '2',
        value: '19.07.2004',
        correct: false
      },
      {
        id: '3',
        value: '01.01.2006',
        correct: false
      }
    ]
  },
  {
    question: 'Кто является создателем ROBLOX?',
    answers: [
      {
        id: '1',
        value: 'Стив Возняк',
        correct: false
      },
      {
        id: '2',
        value: 'Дэвид Басзуки',
        correct: true
      },
      {
        id: '3',
        value: 'Илон Маск',
        correct: false
      }
    ]
  },
  {
    question: 'Какой фреймворк не относится к JavaScript?',
    answers: [
      {
        id: '1',
        value: 'React',
        correct: false
      },
      {
        id: '2',
        value: 'Polymer',
        correct: false
      },
      {
        id: '3',
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
const btnShow = quizContainer.querySelector('.btn__showResult')

let countSlide = 1

const showSlide = (flag) => {
  if (flag === 'prev') {
    return countSlide <= 1 ? countSlide = DATA.length : --countSlide
  }

  if (flag === 'next') {
    return countSlide >= DATA.length ? countSlide = 1 : ++countSlide
  }
}

btnPrev.addEventListener('click', () => {
  const slide = showSlide('prev')
  quizTitle.innerHTML = `Номер слайда ${slide}`
  console.log(slide)
})

btnNext.addEventListener('click', ()=> {
  const slide = showSlide('next')
  quizTitle.innerHTML = `Номер слайда ${slide}`
  console.log(slide)
})

