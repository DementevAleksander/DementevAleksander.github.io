const quizData = [
    {
        question: "В каком году основали Москву?",
        a: "354",
        b: "2025",
        c: "-3544",
        d: "1147",
        correct: "d",
    },
    {
        question: "Какого цвета небо днём, когда нет облаков?",
        a: "Чёрное",
        b: "Голубое",
        c: "Жёлтое",
        d: "Зелёное",
        correct: "b",
    },
    {
        question: "Расстояние между Москвой и Смоленском 380км. Какое расстояние проедет мотоциклист двигаясь из Смоленска в Москву, если будет ехать со скоростью 100км/ч?",
        a: "380 км",
        b: "760 км",
        c: "100 км",
        d: "100 км/ч",
        correct: "a",
    },
    {
        question: "Змой и летом одним цветом?",
        a: "Пальма",
        b: "Ёлка",
        c: "Берёза",
        d: "Липа",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const error = document.getElementById('error')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers() //очищаем ответ

    const currentQuizData = quizData[currentQuiz] //при первом запуске получили данные первого объекта массива

    questionEl.innerText = currentQuizData.question //Вопрос
    //Ответы
    a_text.innerText = currentQuizData.a 
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    //получаем ответ пользователя
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
            error.innerHTML = ''
        } else {
            error.innerHTML = 'Выберите один из вариантов ответа!'
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++ //увеличиваем счётчик для перехода к следующему вопросу

        if(currentQuiz < quizData.length) {
            loadQuiz() //переходим к следующему вопросу
        } else {
            quiz.innerHTML = `
                <h2>Вы ответили корректно на ${score} из ${quizData.length} вопросов!</h2>
                <button onclick="location.reload()">Заново</button>
            `
        }
    }
})