import { applyMiddleware, createStore } from 'redux';

const initialState = {
    subjects: [
        { id: 1, name: 'Strukturno', semester: 1 },
        { id: 2, name: 'Algoritmi I Podatocni strukturi', semester: 3 },
        { id: 3, name: 'Objektno Orientirano Programiranje', semester: 2 },
        { id: 4, name: 'Kalkulus 1', semester: 1 },
        { id: 5, name: 'Diskretna Matematika 1', semester: 1 },
        { id: 6, name: 'Kalkulus 2', semester: 2 },
        { id: 7, name: 'Diskretna Matematika 2', semester: 2 },
        {
            id: 8,
            name: 'Arhitektura i Organizacija na Kompjuteri',
            semester: 3,
        },
    ],
    filtered: [
        { id: 1, name: 'Strukturno', semester: 1 },
        { id: 2, name: 'Algoritmi I Podatocni strukturi', semester: 3 },
        { id: 3, name: 'Objektno Orientirano Programiranje', semester: 2 },
        { id: 4, name: 'Kalkulus 1', semester: 1 },
        { id: 5, name: 'Diskretna Matematika 1', semester: 1 },
        { id: 6, name: 'Kalkulus 2', semester: 2 },
        { id: 7, name: 'Diskretna Matematika 2', semester: 2 },
        {
            id: 8,
            name: 'Arhitektura i Organizacija na Kompjuteri',
            semester: 3,
        },
    ],
    professors: [
        'д-р Љупчо Коцарев',
        'Марјан Гушев',
        'Катерина Здравкова',
        'Сузана Лошковска',
        'Жанета Попеска',
        'Коста Митрески',
        'Верица Бакева',
        'Владимир Трајковиќ',
        'Ана Мадевска Богданова',
        'Дејан Ѓорѓевиќ',
        'Димитар Трајанов',
        'Андреа Кулаков',
        'Љупчо Антовски',
        'Марија Михова',
        'Слободан Калајџиски',
        'Невена Ацковска',
        'Горан Велинов',
        'Анастас Мишев',
        'Соња Филипоска',
        'Иван Чорбев',
        'Ласко Баснарков',
        'Боро Јакимовски',
        'Весна Димитрова',
        'Гоце Арменски',
        'Данило Глигороски',
        'Ѓорѓи Филипов',
        'Стево Божиновски',
        'Соња Гиевска',
        'Дејан Спасов',
        'Ивица Димитровски',
        'Игор Мишковски',
        'Ѓорѓи Маџаров',
        'Смилка Јанеска-Саркањац',
        'Сашко Ристов',
        'Вангел Ајановски',
        'Весна Димитриевска Ристовска',
        'Миле Јованов',
        'Билјана Стојкоска',
        'Кире Триводалиев',
        'Сашо Граматиков',
        'Мирослав Мирчев',
        'Георгина Мирчева',
        'Магдалена Костоска',
        'Александра Поповска Митровиќ',
        'Билјана Тојтовска',
        'Наташа Илиевска',
        'Милош Јовановиќ',
        'Јасен Марковски',
        'Ана Соколова',
        'Андреја Наумоски',
        'Панче Рибарски',
        'Христина Михајлоска',
        'Иван Китановски',
        'Ефтим Здравевски',
        'Петре Ламески',
        'Катарина Тројачанец Динева',
        'Владимир Здравески',
        'Методија Јанчески',
        'Ристе Стојанов',
        'Емил Станков',
        'Бобан Јоксимоски',
        'Илинка Иваноска',
        ' Александар Тенев',
        'Весна Киранџиска',
        'Бојан Илијоски',
        'Костадин Мишев',
    ],
};

// we are not using thunk
const middlewares = [];

const FILTER_BY_NAME = 'FILTER_BY_NAME';

function networkCacheReducer(state = {}, action) {
    switch (action.type) {
        case FILTER_BY_NAME:
            return {
                ...state,
                filtered: state.subjects.filter(sub =>
                    sub.name.toLowerCase().includes(action.text)
                ),
            };
        default:
            return state;
    }
}

const subjects = createStore(
    networkCacheReducer,
    initialState,
    applyMiddleware(...middlewares)
);

export const filterByName = text => {
    // We are assuming that everything is valid, before we use readCache
    // elsewhere in the codebase
    // console.log('readCache fired')

    subjects.dispatch({ type: FILTER_BY_NAME, text });
    return;
};

export default subjects;
