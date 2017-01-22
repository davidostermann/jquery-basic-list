// datas
// infos : il manquait des virgules dans la consigne

var books = [
  {
    title: 'CSS: The Definitive Guide',
    author: 'Eric Meyer',
    link: 'http://shop.oreilly.com/product/0636920012726.do',
    type: 'css'
  },
  {
    title: 'CSS Development with CSS3',
    author: 'Zachary Kingston',
    link: 'http://shop.oreilly.com/product/0636920057970.do',
    type: 'css'
  },
  {
    title: 'You Don\'t Know JS: Up & Going',
    author: 'Kyle Simpson',
    link: 'http://shop.oreilly.com/product/0636920039303.do',
    type: 'js'
  },
  {
    title: 'Programming JavaScript Applications',
    author: 'Eric Elliott',
    link: 'http://shop.oreilly.com/product/0636920033141.do',
    type: 'js'
  },
  {
    title: 'Modern JavaScript',
    author: 'unknown',
    link: 'http://www.oreilly.com/web-platform/free/modern-javascript.csp',
    type: 'js'
  }
] ;

// list //////////////////////////

var containerElement = document.getElementById('book-list');
//var bookElements = document.getElementsByClassName('book');
// info : getElementsByClassName method returns a living nodelist
// whereas querySelectorAll method return a static nodelist

var createTitleElement = function(title) {
  var t = document.createElement('h3');
  t.classList.add('title');
  t.textContent = title;
  return t;
};

var createAuthorElement = function(author) {
  var t = document.createElement('p');
  t.classList.add('author');
  t.textContent = author;
  return t;
};

var createButtonElement = function(link) {
  var t = document.createElement('a');
  t.classList.add('book-link', 'secondary-content');
  t.setAttribute('href', link);
  t.setAttribute('target', '_blank');
  t.innerHTML = '<i class="material-icons md-36">info</i>';
  return t;
};

var createBookElement = function(item) {
  var book = document.createElement('li');
  book.classList.add('collection-item', 'avatar', 'book', 'all', item.type);
  book.innerHTML = '<i class="material-icons circle">book</i>';
  book.appendChild(createTitleElement(item.title));
  book.appendChild(createAuthorElement(item.author));
  book.appendChild(createButtonElement(item.link));
  return book;
}

var listItem = books.forEach( function(item) {
  containerElement.appendChild( createBookElement(item));
});

// filters //////////////////////////

document.getElementById('filter-list').addEventListener('click', function(e) {
  if(e.target) {
    select(e.target.getAttribute('data-type'));
  }
});

// Problem : The list returnned by 'getElementsByClassName' method isn't an array, it's a nodeList
/** Solutions :
      - method forEach is not supported in ie
      - jquery
      - classic for loop
      - More infos on : https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
*/
var select = function(type) {

  $('.book.'+type).css('display', 'list-item');
  $('.book:not(.'+type+')').css('display', 'none');

  // switch (type) {
  //   case 'css':
  //   case 'js':
  //     for (var i = 0; i < bookElements.length; i++) {
  //       var b = bookElements[i];
  //       b.style.display = (b.classList.contains(type)) ? 'list-item' : 'none';
  //     }
  //     break;
  //   default :
  //     for (var i = 0; i < bookElements.length; i++) {
  //       bookElements[i].style.display = 'list-item';
  //     }
  //     break;
  // }
}
