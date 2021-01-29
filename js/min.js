'use sctrict';

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

let AUDIO;
let audioPlay = false;
let FORM = document.forms['form'];

// (function () {
//   let newSong = document.querySelector('.title__music');
//   newSong.addEventListener('click', () => {
//     addSong();
//   });

//   let saveBtn = document.querySelector('.save__button');
//   saveBtn.addEventListener('click', saveWindow);

//   let closeBtn = document.querySelector('.icon-close');
//   closeBtn.addEventListener('click', closeWindow);
// });

let existedList = localStorage.getItem('localList') ? localStorage.getItem('localList') : [];
let PARSET = JSON.parse(localStorage.getItem('localList'));

if (existedList.length > 0) {
  PARSET.forEach((item, i) => {
    let items = document.querySelector('.items'),
      list = document.createElement('li'),
      itemList = document.createElement('div'),
      groupList = document.createElement('div'),
      numberList = document.createElement('span'),
      nameAuthor = document.createElement('h3'),
      songAuthor = document.createElement('p'),
      buttons = document.createElement('div'),
      playBtn = document.createElement('div'),
      addBtn = document.createElement('div'),
      closeBtn = document.createElement('div');
  
    list.className = 'list';
    itemList.className = 'item';
    nameAuthor.className = 'title__list';
    songAuthor.className = 'song__list';
    numberList.className = 'number';
    buttons.className = 'buttons';
    groupList.className = 'group';
    playBtn.className = 'icon-play btn';
    addBtn.className = 'icon-add btn';
    closeBtn.className = 'icon-close btn';
  
    nameAuthor.innerHTML += `${item.author}`;
    songAuthor.innerHTML += `${item.song}`;
  
    items.append(list);
    list.append(itemList, buttons);
    itemList.append(numberList, groupList);
    groupList.append(nameAuthor, songAuthor)
    buttons.append(playBtn, addBtn, closeBtn);
  
  });
} else {
  // PARSET.forEach((item) => {
  //   items.append(render(item.author, item.song, item.id))
  // })
  PLAYLIST.forEach((item, i) => {
    let items = document.querySelector('.items'),
      list = document.createElement('li'),
      itemList = document.createElement('div'),
      groupList = document.createElement('div'),
      numberList = document.createElement('span'),
      nameAuthor = document.createElement('h3'),
      songAuthor = document.createElement('p'),
      buttons = document.createElement('div'),
      playBtn = document.createElement('div'),
      addBtn = document.createElement('div'),
      closeBtn = document.createElement('div');
  
    list.className = 'list';
    itemList.className = 'item';
    nameAuthor.className = 'title__list';
    songAuthor.className = 'song__list';
    numberList.className = 'number';
    buttons.className = 'buttons';
    groupList.className = 'group';
    playBtn.className = 'icon-play btn';
    addBtn.className = 'icon-add btn';
    closeBtn.className = 'icon-close btn';
  
    nameAuthor.innerHTML += `${item.author}`;
    songAuthor.innerHTML += `${item.song}`;
  
    items.append(list);
    list.append(itemList, buttons);
    itemList.append(numberList, groupList);
    groupList.append(nameAuthor, songAuthor)
    buttons.append(playBtn, addBtn, closeBtn);
  
  });

  localStorage.setItem('localList', JSON.stringify(PLAYLIST));
}



class List {
  constructor(
    author,
    song,
    id
  ) {
    this.author = author;
    this.song = song;
    this.id = id;
  }

  getFull() {
    return `${this.author} ${this.song}`;
  }
}

// Open and Cloe my Window
class Window {
  constructor(localList) {
    this.localList = localList;

    this.window = document.querySelector('.window__wrapper');

    // this.closeWindow();
  }

  // closeWindow() {
  //   let closeBtn = document.querySelector('.window__title');
  //   closeBtn.addEventListener('click', () => {
  //     this.close();
  //   });

  //   let saveBtn = document.querySelector('.save__button');
  //   saveBtn.addEventListener('click', () => {
  //     this.save();
  //   });
  // }

  // Method show
  show() {
    if (this.localList) {
      author.value = this.localList.author;
      song.value = this.localList.song;
      this.window.dataset.id = this.localList.id;
    }

    this.window.classList.add('show');
  }

  close() {
    author.value = '';
    song.value = '';
    this.window.dataset.id = '';

    this.window.classList.remove('show');
  }

  save() {

    if (FORM.author.value === '' || FORM.song.value === '') {
      warning('Please, fill all fields!');
      return;
    }

    let elem = localStorage.getItem('localList'),
      list = elem ? JSON.parse(elem) : [],
      parameter = new Parameter(author.value, song.value);

      parameter.id = this.window.dataset.id ||  parameter.id;

      let i = list.findIndex(elem => elem.id === parameter.id);

      if (i !== -1) {
        list[i] = parameter;
      } else {
        list.push(parameter);
      }


    localStorage.setItem('localList', JSON.stringify(list));

    this.close();
    showList();
  }
};

class Parameter {
  constructor(author,
    song) {
    this.author = author;
    this.song = song;
    this.id = `${song.toLowerCase()}-${(Math.random() * 1000).toFixed()}`;
  }
}

class Draw {
  constructor() {

  }

  render(localList, counter) {
    let list = document.createElement('li'),
      itemList = document.createElement('div'),
      groupList = document.createElement('div'),
      numberList = document.createElement('span'),
      nameAuthor = document.createElement('h3'),
      songAuthor = document.createElement('p'),
      buttons = document.querySelector('.buttons').cloneNode(true);
    // playBtn = document.createElement('div'),
    // addBtn = document.createElement('div'),
    // closeBtn = document.createElement('div');

    list.className = 'list';
    itemList.className = 'item';
    nameAuthor.className = 'title__list';
    songAuthor.className = 'song__list';
    numberList.className = 'number';
    groupList.className = 'group';
    // playBtn.className = 'icon-play btn';
    // addBtn.className = 'icon-add btn';
    // closeBtn.className = 'icon-close btn';

    numberList.innerText = counter;
    nameAuthor.innerText = `${localList.author}`;
    songAuthor.innerText = `${localList.song}`;

    buttons.querySelector('.icon-play').addEventListener('click', () => {
      this.play(localList);
    });

    buttons.querySelector('.icon-add').addEventListener('click', () => {
      this.add(localList);
    });

    buttons.querySelector('.icon-close').addEventListener('click', () => {
      this.close(localList);
    });

    list.append(itemList, buttons);
    itemList.append(numberList, groupList);
    groupList.append(nameAuthor, songAuthor)


    return list;
  }

  // play(localList) {
  //   let 
  // }

  add(localList) {
    let windowEdit = new Window(localList);
    windowEdit.show();
  }

  close(localList) {
    let accept = window.confirm(`Are you sure to delete ${localList.author} ${localList.song}?`);

    if (accept) {
      let listLocal = JSON.parse(localStorage.getItem('localList'));
      console.log(listLocal, localList.id);

      for (let i = listLocal.length - 1; i >= 0; i--) {
        if (listLocal[i].id === localList.id) {
          listLocal.splice(i, 1);
          break;
        }

      }
      localStorage.setItem('localList', JSON.stringify(listLocal));
      showList();
    }
  }


}

let employeeWindow = new Window();
titleMusic.addEventListener('click', () => {
  employeeWindow.show();
});

let closeBtn = document.querySelector('.window__title');
closeBtn.addEventListener('click', () => {
  employeeWindow.close();
});

let saveBtn = document.querySelector('.save__button');
saveBtn.addEventListener('click', () => {
  employeeWindow.save();
});

let showMyList = document.querySelector('.save__button');
showMyList.addEventListener('click', showList);

function showList() {
  let localList = JSON.parse(localStorage.getItem('localList')),
    list = document.querySelector('.items'),
    listItems = document.querySelectorAll('.list');

  if (localList === null) {
    warning('Add Local first!');
    return;
  }

  listItems.forEach(item => {
    item.remove();
  });

  localList.forEach((item, i) => {
    list.append(new Draw().render(item, i + 1));
  });
}

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

function play(play, btn) {
  if (!audioPlay) {
    let url = play.song.toLowerCase().split(' ').join('-');

    AUDIO = new Song(`media/${url}.mp3`);
    AUDIO.load();
    CURRENT_AUDIO.volume = .4;
    AUDIO.play();

    audioPlay = true;
    btn.classList.add('.icon-play');
  }
}