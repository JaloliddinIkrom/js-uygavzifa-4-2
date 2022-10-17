 
 let elList = document.querySelector('.js-list');  
 let elList2 = document.querySelector('.js-list2'); 
 let elSel = document.querySelector('.js-select');  
 let elSelec2 = document.querySelector('.js-select2'); 
 let elList3 = document.querySelector('.js-list3'); 
  

 const bookmarkList = []; 
//  const MadalList = [];


 function getTime (format){ 

  let date = new Date(format);
   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

};  

//===========================================================================================================


const Domgachiqar = (array, node) => {  
 
    node.innerHTML = '';
  array.forEach((film) => { 

    elItim = document.createElement('li');
  
    
    elTitle = document.createElement('h2');
    elTitle.textContent = film.title; 
    elItim.appendChild(elTitle); 

      
    elSrto = document.createElement('strong');
    elSrto.textContent = film.genres; 
    elItim.appendChild(elSrto); 
    
    elImg = document.createElement('img');  
    elImg.src = film.poster;   
    elItim.appendChild(elImg); 
    

    nowBookmarkBtn = document.createElement('button'); 
    nowBookmarkBtn.textContent = 'Bookmark' 
    nowBookmarkBtn.setAttribute('class', 'bookmarc-btn btn-js')
    elItim.appendChild(nowBookmarkBtn);  
    nowBookmarkBtn.dataset.BookIde = film.id;



    noModalBtn = document.createElement('button'); 
    noModalBtn.textContent = 'Modal' 
    noModalBtn.setAttribute('class', 'modal-btn btn-js'); 
    elItim.appendChild(noModalBtn);



    node.appendChild(elItim);

  })
 
};
     
const renderBuuten = (array, node) =>{ 
   node.innerHTML = '';
  array.forEach((el) => { 

    const newItem = document.createElement('li');
    const newBuuten = document.createElement('button'); 
    
    newItem.setAttribute('class', 'js-item2') 
    newBuuten.setAttribute('class', 'js-butten2') 
    newBuuten.dataset.BookIde = el.id;
    newItem.textContent = el.title; 
    newBuuten.textContent = 'x'; 

    newItem.appendChild(newBuuten);
    node.appendChild(newItem);
  });

};  

// const renderBuuten2 = (array, node) => { 

// node.innerHTML = "";
// array.forEach((item) => {  

//   const newItem2 = document.createElement('li');
//   const newBuuten2 = document.createElement('button');  
//   newBuuten2.dataset.BookIde = item.id; 
//   newBuuten2.textContent = 'x'; 
  
//   newItem2.setAttribute('class', 'js-item3') 
//   newBuuten2.setAttribute('class', 'js-bun2')

//    elIdy = document.createElement('span'); 
//     elIdy.textContent = item.id;
//     newItem2.appendChild(elIdy); 

//      elText = document.createElement('p'); 
//     elText.textContent = item.overview;
//     newItem2.appendChild(elText);  
    
//     elVremya = document.createElement('data'); 
//     elVremya.textContent = getTime(item.release_date); 
//     newItem2.appendChild(elVremya);
    
//     newItem2.appendChild(newBuuten2);
//     node.appendChild(newItem2);
// })

// };
    Domgachiqar(films, elList);
  
 
//==========================================================================================================
const opList = new Set();


films.forEach((item) => { 

  item.genres.forEach((genre) => { 

 opList.add(genre); 


  });

}); 

opList.forEach((item) => { 

   let newOption = document.createElement('option');
   newOption.value = item;
   newOption.textContent = item;

   elSel.appendChild(newOption);
}); 
 
//=============================================================================================================

elSel.addEventListener('change', function(evt){
  evt.preventDefault() 

  var elSelVal = elSel.value;
  var filteredArr = [];

  elList.innerHTML = ''; 

  films.forEach((el) =>{ 
    
     if(el.genres.includes(elSelVal)){
       filteredArr.push(el);
     } 

  });
 
  Domgachiqar(filteredArr, elList);
 
    });


elSelec2.addEventListener('change', function() { 

  let warArray = [];
  elList.innerHTML = ''; 

  if(elSelec2.value == 'Aa-Zz'){ 

 let Aa = films.sort((a, b) => { 

  let texA = a.title.toUpperCase().charCodeAt(0);
  let texB = b.title.toUpperCase().charCodeAt(0); 

  if(texA < texB){ 

    return -1;
  }else if(texA > texB){ 

    return 1;
  }else{ 

    return 0;
  } 


 }); 

  warArray = Aa;

  } 

  if(elSelec2.value == 'Zz-Aa'){ 

    let Aa = films.sort((a, b) => { 
   
     let texA = a.title.toUpperCase().charCodeAt(0);
     let texB = b.title.toUpperCase().charCodeAt(0); 
   
     if(texA > texB){ 
   
       return -1;
     }else if(texA < texB){ 
   
       return 1;
     }else{ 
   
       return 0;
     } 
   
   
    }); 
   
     warArray = Aa;
   
     } 

    
     Domgachiqar(warArray, elList); 
}); 
//================================================================================================================
  
elList.addEventListener('click', function(evt){ 

if(evt.target.matches('.bookmarc-btn')){ 

  const cliscetId = evt.target.dataset.BookIde;

  const finItim = films.find((el) => el.id == cliscetId);  
  

  if(!bookmarkList.includes(finItim)){ 

    bookmarkList.push(finItim); 

    renderBuuten(bookmarkList, elList2);

  }
 
}  

// if(evt.target.matches('.modal-btn')){ 

//   const modalIde = evt.target.dataset.BookIde;
//   const modalFindItem = films.find((el) => el.id == modalIde); 

//   if(!MadalList.includes(modalFindItem)){ 

//    MadalList.push(modalFindItem);
    
//    renderBuuten2(MadalList, elList3);
//   }
// }
 

}) 
//=========================================================================================================================
 
elList2.addEventListener('click', function(evt){ 
  if(evt.target.matches('.js-butten2')){ 
    const daleteItemId = evt.target.dataset.BookIde;
    const daleteItem = bookmarkList.findIndex((el) => el.id == daleteItemId);
      
    bookmarkList.splice(daleteItem, 1);
    renderBuuten(bookmarkList, elList2);
  }
}) 

elList3.addEventListener('click', function(evt){ 

  if(evt.target.matches('.js-bun2')){ 

    const dataMoadalItemIndex = evt.target.dataset.BookIde;
    const dataModItem = MadalList.findIndex((el) => el.id == dataMoadalItemIndex);
    MadalList.splice(dataModItem, 1);
    renderBuuten2(MadalList, elList3);
  } 

    
  
})

//------------------------------------------------------------------------------------------------------------ 



  let elBten = document.querySelector('.js-btn');

  var elTem = false;

  elBten.addEventListener('click', function(){ 

   elTem = !elTem; 

   var elCol = elTem ? 'dark' : 'light';
    
   window.localStorage.setItem('elTem', elCol);  

   domgachiqaratir();
  })


  function domgachiqaratir(){ 

  if(window.localStorage.getItem('elTem') == 'dark'){ 

    document.body.classList.add('dark'); 

  }else{ 

   document.body.classList.remove('dark');
  }
  }
  domgachiqaratir(); 
 
  

 


