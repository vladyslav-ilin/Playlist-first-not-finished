'use strict';



const PLAYLIST = [
  {
    author: "Linkin Park",
    song: "Numb"
  },
  {
    author: "Imagine Dragons",
    song: "Believer"
  },
  {
    author: "Queen",
    song: "We will rock you"
  },
  {
    author: "Nirvana",
    song: "Smells Like Teen Spirit"
  },
  {
    author: "Sam Cooke",
    song: "A Change Is Gonna Come"
  },
  {
    author: "Rammstein",
    song: "Du Hast"
  },
  {
    author: "Limp Bizkit",
    song: "Behind Blue Eyes"
  }
];

let MY_FORM = document.forms['form'];

// function addItem(author, song, id) {
let sectionItem = document.createElement('section'),
  playListItem = document.createElement('div'),
  addItem = document.createElement('div'),
  titleItem = document.createElement('h1'),
  addBtn = document.createElement('i'),
  listItem = document.createElement('ul');

sectionItem.className = ('music'),
  addItem.id = ('openmusic'),
  playListItem.className = ('playlist'),
  addBtn.className = ('icon-music'),
  titleItem.className = ('title'),
  listItem.className = ('item');

titleItem.appendChild(document.createTextNode('Music Player'));

document.body.append(sectionItem),
  sectionItem.append(playListItem),
  playListItem.append(addItem, listItem),
  addItem.append(titleItem, addBtn);

// let title = {
//   author: author,
//   song: song,
//   id: id
// }
// };

// function addWindow() {
//   let window = document.querySelector('.window__wrapper');

//   if (window.classList.contains('show')) {
//     window.classList.remove('show');

//     MY_FORM.author.value === '';
//     MY_FORM.song.value === '';
//     MY_FORM.id.value === '';
//   } else {
//     window.classList.add('show');
//   }
// }















PLAYLIST.forEach((name, i) => {

  listItem.innerHTML += `<li class="list">
                                <div class="number">${i + 1}.</div> 
                                <div class="my-list">
                                    <div class="author">${name.author}</div> 
                                    <div class="song">${name.song}</div>
                                </div>
                          </li>`;
});

class Window {
  constructor() {
    this.window = document.querySelector('.window__wrapper');
    this.closeWindow();
  }

  // Для закрытия окна
  closeWindow() {
    let closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
      this.close();
    });

    let saveBtn = document.querySelector('.save__button');
    saveBtn.addEventListener('click', () => {
      this.save();
      // Благоданя () => this это не кнопка, а класс!
    });
  }

  show() {
    author.value = '';
    song.value = '';
    this.window.classList.add('show');
  }

  save() {

    if (author.value === '' || song.value === '') {
      warning('Please, fill all fields!');
      return;
    }
    //Будем хранить нашие данные на сервере, бо он не один
    // list = item ? JSON.parse(item) : [];

    let musician = new Musician(author.value, song.value);
    // parse - распарсили, что бы видеть нормальный масив, с которым мы можем работать
    console.log(musician);
    // list.push(musician);
    // localStorage.setItem('misicianList', JSON.stringify(list));

    // this.show();
  }

  close(button = this.window) {
    button.classList.remove('show');
  }

  let newSong = new Window();
openmusic.addEventListener('click', () => {
  newSong.show();
});
}

class Musician {
  constructor(
    author,
    song,
  ) {
    this.author = author;
    this.song = song;
  }
}



// Обьект, в котором храним данные-когда вводим значение, оно передается 




function warning(msg) {
  let dialog = document.createElement('div'),
    dialogWatch = document.createElement('div');

  dialog.className = 'dialog';
  dialogWatch.className = 'dialog-watch';

  dialog.innerHTML = `<p>${msg}</p>`;
  document.body.append(dialogWatch, dialog);

  setTimeout(() => {
    dialogWatch.remove();
    dialog.remove();

  }, 2000);
}
