
let sectionSemana1 = document.querySelector('#sem1');
let sectionSemana2 = document.querySelector('#sem2');
let sectionSemana3 = document.querySelector('#sem3');
let menuSemana1 = document.querySelector('#LSem1');
let menuSemana2 = document.querySelector('#LSem2');
let menuSemana3 = document.querySelector('#LSem3');

let callback = (entries, observer) => {
    entries.forEach(entry => {
        let lastSeen = entry.target.id;
      if(!entry.isIntersecting) {
          if(lastSeen == 'sem1')
            menuSemana1.classList.remove('active');

          if(lastSeen == 'sem2')
            menuSemana2.classList.remove('active');

          if(lastSeen == 'sem3')
            menuSemana3.classList.remove('active');
      return;
      }
        if(lastSeen == 'sem1')
            menuSemana1.classList.add('active');

        if(lastSeen == 'sem2')
            menuSemana2.classList.add('active');

        if(lastSeen == 'sem3')
            menuSemana3.classList.add('active');
    });
  }; 

  let observer = new IntersectionObserver(callback);
  observer.observe(sectionSemana1);
  observer.observe(sectionSemana2);
  observer.observe(sectionSemana3);