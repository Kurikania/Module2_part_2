const colors = document.getElementsByClassName("colorBox")

Array.from(colors).forEach(function(color) {
    color.addEventListener('click', changeColor);
  });

function changeColor(e) {
    e.target.classList.toggle("green")    
}

const counter = document.getElementById("counter");
i = 0;
counter.addEventListener("click", function() {
    i++;
    counter.innerHTML = `Вы нажали ${i} раз(а)`
})

const commentForm = document.getElementById("commentForm");
const input = document.getElementById("input");
const commentsList = document.getElementById("commentsList")

commentForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let comment = new Comment(input.value);
    input.value = ""; 
    let li = document.createElement("li");
    li.classList.add("list-group-item")
    li.innerHTML = `
                       <div class="row">
                           <div class="col-sm-3">
                               <img src="${comment.userpic}" class="rounded-circle img-responsive border border-secondary" alt="" />
                            </div>
                           <div class="col-sm-9">
                               <div>
                                  ${comment.text}
                               </div>
                               <div class="mic-info">
                                   Автор:  ${comment.author} <br> 
                                   Дата публикации: ${comment.date}
                               </div>
                           </div>
                       </div>
                    
                    `
    commentsList.appendChild(li)
})

function Comment (text) {
    this.author = "John Doe", 
    this.userpic = "765-default-avatar.png",
    this.text = text
    this.date = new Date().toLocaleString("ru")
}

let books = [
    {
        author: "Карлос Руис Сафон",
        title: "Тень ветра",
        titleOrig: "La sombra del viento",
        year: 2001,
        description: "Однажды утром 1945 года отец приводит своего сына в таинственное скрытое место в самом сердце Старого города: Кладбище забытых книг. Там Даниэль Семпере находит проклятую книгу, которая изменит всю его жизнь и погрузит в лабиринт интриг и секретов, скрытых в темной душе города."
    },
    {
        author: "Федери́ко Гарси́а Ло́рка",
        title: "Ода Сальвадору Дали",
        titleOrig: "Oda a Salvador Dalí",
        year: 1926,
        description: "В 1926 году Лорка публикует «Оду Сальвадору Дали», в которой он захвачен волшебными днями и ночами, проведенными в Кадакесе. Ода была написана двенадцатисложным стихом с парной рифмой и рассказывает не только о дружбе поэта с художником, но и о разделяемой ими обоими любви к гармонии, симметрии и ясности."
    },
    {
        author: "Миге́ль де Серва́нтес",
        title: "Хитроу́мный ида́льго Дон Кихо́т Лама́нчский",
        titleOrig: "El ingenioso hidalgo Don Quijote de la Mancha",
        year: 1605,
        description: "Обедневший дворянин из Ла-Манчи, немолодой Алонсо Кихано, сойдя с ума от круглосуточного чтения рыцарских романов и отсутствия свежего воздуха, возжелал стать странствующим рыцарем. Он берёт себе новое имя — Дон Кихот (в ранних русских переводах встречалась вариант Дон Кишот). Дон Кихот наивен и великодушен, пребывает в убеждении, что рыцари жили исключительно для помощи слабым и обездоленным, и мечтает повторить подвиги литературных героев, но попадает в нелепые приключения."
    },
    {
        author: "Мария Дуэ́ньяс Винуэ́са",
        title: "Нити судьбы",
        titleOrig: "El tiempo entre costuras",
        year: 2009,
        description: "Исторический шпионский роман повествует о жизни молодой модистки Сиры Кироги, покинувшей родной Мадрид накануне Гражданской войны 1936 года вместе со своим женихом Рамиро и волею судеб оказавшейся брошенной в одиночестве в Тетуане, столице Испанского Марокко."
    },
]

let booksTable = document.getElementById("booksTable")

function booksTableBuild(books) {
    let table = `<table class="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Название</th>
                                <th scope="col">Автор</th>
                                <th scope="col">Год публикации</th>
                                <th scope="col">Краткое описание</th>
                            </tr>
                            </thead>
                            <tbody> `
    const tableEnd =  ` </tbody>
                         </table>`

    
    
    for ( let i = 0 ; i < books.length ; i++) {
        table += `<tr>
                    <th scope="row">${i+1}</th>
                    <td><strong>${books[i].title}</strong> <br>${books[i].titleOrig}</td>
                    <td>${books[i].author}</td>
                    <td>${books[i].year}</td>
                    <td>${books[i].description}</td>
                </tr>`
    }

table += tableEnd
booksTable.insertAdjacentHTML('afterbegin', table)
}

booksTableBuild(books)