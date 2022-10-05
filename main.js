 
 let elList = document.querySelector('.js-list'); 
 let elSel = document.querySelector('.js-select');  
 let elSelec2 = document.querySelector('.js-select2'); 


 function getTime (format){ 

  let date = new Date(format);
   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

};  


films.forEach( function(film){ 

    
  elItim = document.createElement('li');
  
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
  
  
  elList.appendChild(elItim);
    }); 

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


elSel.addEventListener('change', function(evt){
  evt.preventDefault() 

  var elSelVal = elSel.value;
  var filteredArr = [];

  elList.innerHTML = '';
  films.forEach((el) =>{
     if(el.genres.includes(elSelVal)){
       filteredArr.push(el)
     }
  });
 

    filteredArr.forEach((film) =>{ 
 
    
      elItim = document.createElement('li');
      
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
      
      
      elList.appendChild(elItim);
    }); 
 
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

    
    warArray.forEach((film) =>{ 
 
    
      elItim = document.createElement('li');
      
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
      
      
      elList.appendChild(elItim);
    }); 
});






 


