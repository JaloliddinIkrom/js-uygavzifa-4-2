 
 let elList = document.querySelector('.js-list'); 
  let elSel = document.querySelector('.js-select');  
 

 function getTime (format){ 

  let date = new Date(format);
   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

}; 

 function domfilm (array, node){  

array.forEach(function(film){ 

elItim = document.createElement('li');

node.appendChild(elItim);

elIdy = document.createElement('span'); 
elIdy.textContent = film.id;
elItim.appendChild(elIdy);


elTitle = document.createElement('h2');
elTitle.textContent = film.title; 
elItim.appendChild(elTitle);

elImg = document.createElement('img');  
elImg.src = film.poster;   
elItim.appendChild(elImg); 
 
elText = document.createElement('p'); 
elText.textContent = film.overview;
elItim.appendChild(elText);  

elVremya = document.createElement('data'); 
elVremya.textContent = getTime(film.release_date); 
elItim.appendChild(elVremya);


elSrto = document.createElement('strong');
elSrto.textContent = film.genres; 
elItim.appendChild(elSrto);

});

  }  
  domfilm(films, elList); 


  elSel.addEventListener('change', function(){ 
   

    let elSelectVelu = elSel.value;
    let filtr = [];
  elList.innerHTML = '';
  
    films.forEach((el) => { 
  
      if(el.genres.includes(elSelectVelu)){ 
  
          filtr.push(el);
      }
    });
  
      domfilm(filtr, elList);
   });  



 


