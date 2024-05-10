
const difficulty= document.querySelectorAll('.difficulty');



difficulty.forEach(function (node,i) {

  node.addEventListener('click',(a)=>{
    if(i==0){
      
      a.target.parentNode.nextElementSibling.classList.add('disabled');

      a.target.parentNode.nextElementSibling.nextElementSibling.classList.add('disabled');

      a.target.parentNode.nextElementSibling.classList.remove('d-hover');

      a.target.parentNode.nextElementSibling.nextElementSibling.classList.remove('d-hover');

      a.target.parentNode.classList.remove('d-hover');

      document.getElementById("description").innerHTML = "Hadi başlayalım!";

      document.querySelector('.start').classList.add('s-hover');

      document.querySelector('.start').classList.remove('disabled');

      sessionStorage.setItem('diffic',10);

      document.querySelector('#chance span').innerText = 5

      document.querySelector('#intro').innerText = `Sayı Tahmini(1 -  ${sessionStorage.getItem('diffic')})`
      document.querySelector('.start').disabled = false;
      a.target.parentNode.disabled =true; 
      a.target.parentNode.nextElementSibling.disabled =true; 
      a.target.parentNode.nextElementSibling.nextElementSibling.disabled =true;
      document.getElementById('change-dif').style.display = 'block'
      
    }if(i==1){
      a.target.parentNode.nextElementSibling.classList.add('disabled');
      a.target.parentNode.previousElementSibling.classList.add('disabled');
      a.target.parentNode.nextElementSibling.classList.remove('d-hover');
      a.target.parentNode.previousElementSibling.classList.remove('d-hover');
      document.getElementById('change-dif').style.display = 'block'

      a.target.parentNode.classList.remove('d-hover');
      document.querySelector('#chance span').innerText = 7

      document.getElementById("description").innerHTML = "Haydi başlayalım!";

      document.querySelector('.start').classList.add('s-hover');

      document.querySelector('.start').classList.remove('disabled');

      sessionStorage.setItem('diffic',100);

      document.querySelector('#intro').innerText = `Sayı Tahmini (1 -  ${sessionStorage.getItem('diffic')})`
      document.querySelector('.start').disabled = false;
      a.target.parentNode.disabled =true;
      a.target.parentNode.nextElementSibling.disabled =true;
      a.target.parentNode.previousElementSibling.disabled =true;
      
      
      
      
      
     
    }if(i==2){
      a.target.parentNode.previousElementSibling.classList.add('disabled');
      document.getElementById('change-dif').style.display = 'block'
      a.target.parentNode.previousElementSibling.previousElementSibling.classList.add('disabled');
      a.target.parentNode.previousElementSibling.classList.remove('d-hover');
      a.target.parentNode.previousElementSibling.previousElementSibling.classList.remove('d-hover');

      a.target.parentNode.classList.remove('d-hover');
      document.querySelector('#chance span').innerText = 10

      document.getElementById("description").innerHTML = "Haydi başlayalım!";

      document.querySelector('.start').classList.add('s-hover');

      document.querySelector('.start').classList.remove('disabled');

      sessionStorage.setItem('diffic',1000);

      document.querySelector('#intro').innerText = `Sayı Tahmini (1 -  ${sessionStorage.getItem('diffic')})`;
      document.querySelector('.start').disabled = false;
      a.target.parentNode.disabled =true;
      a.target.parentNode.previousElementSibling.previousElementSibling.disabled =true;
      a.target.parentNode.previousElementSibling.disabled =true;
    }
    
  })
  
  
  
})



const start = document.getElementById('start');


start.addEventListener('click', () =>{
  if(document.getElementById('start').disabled==false){

    document.getElementById("intro-page").style.display="none";

    document.querySelector(".guess").max =`${sessionStorage.getItem('diffic')}`;
    localStorage.setItem('min',0);
    localStorage.setItem('max',sessionStorage.getItem('diffic'));

   
    
    

    document.querySelector('#intro').innerText = `Sayı Tahmini `;

    document.querySelector("#between").innerText = `Lütfen 1 ve ${sessionStorage.getItem('diffic')} arasında bir sayı giriniz.`;

    const randomNum =Math.floor(Math.random()*sessionStorage.getItem('diffic')+1);

    console.log(randomNum);

    document.querySelector('.guess-page').style.display="flex";
    document.querySelector('.guess.form-control').focus();

    //*********************  CHECK  *********************************/ 
    document.getElementById('check').addEventListener('click', guessTheNumber);
    document.querySelector('.guess').addEventListener('keydown',(event)=>{
      if (event.key == 'Enter'){
          guessTheNumber();
      }
  })
  

    function guessTheNumber(){
      if(parseInt(document.querySelector('#chance span').innerText)>0 ){
        
        
        
        if(parseInt(document.querySelector('.guess').value) < +(sessionStorage.getItem('diffic'))+1 && parseInt(document.querySelector('.guess').value) >0){
        
          
          
          if(document.querySelector('.guess').value==randomNum){
            document.getElementById("result").innerText = "Tebrikler.. Kazandınız..";
            document.querySelector('.input-page').style.display="none";
            document.querySelector('.conres').style.display="flex";
          
          }
          if(document.querySelector('.guess').value<randomNum){
            document.getElementById("result").innerText = "Daha yüksek bir sayı deneyin.";
            localStorage.setItem('min',document.querySelector('.guess').value);
            document.querySelector("#between").innerText = `Sayımız ${localStorage.getItem('min')} ve ${localStorage.getItem('max')} arasında. `;

            
            document.querySelector('.guess').value="";
            document.querySelector('.guess').focus();
            document.querySelector('#chance span').innerText -= 1
            
          }
          if(document.querySelector('.guess').value>randomNum){
            document.getElementById("result").innerText = "Daha düşük bir sayı deneyin.";
            localStorage.setItem('max',document.querySelector('.guess').value);
            
            document.querySelector("#between").innerText = `Sayımız${localStorage.getItem('min')} ve ${localStorage.getItem('max')} arasında`; 
            
            document.querySelector('.guess').value="";
            document.querySelector('.guess').focus();
            document.querySelector('#chance span').innerText -= 1
            
          }
          
          
       }else {
         
         
         
         document.querySelector('#top-info').innerText=`Sayımız 1 ve ${sessionStorage.getItem('diffic')} arasında.`;
         document.querySelector('#top-info').style.visibility="visible";
         
         function delayVisible(){
           document.querySelector('#top-info').style.visibility="hidden";
           
          }
          setTimeout(delayVisible,3000);
          document.querySelector('.guess').value="";
          document.querySelector('.guess').focus();
          
          
          
          
          
        }
      }
      if(parseInt(document.querySelector('#chance span').innerText) == 0){
        document.getElementById("result").innerText = "Kaybettiniz..";
        document.querySelector('.input-page').style.display="none";
        document.querySelector('.conres').style.display="flex";
      }
    }
    
   
  }
  
  
  
})


document.getElementById('restart').addEventListener('click', restart)

function restart() {
  window.location.reload(false);
  
}

document.getElementById('change-dif').addEventListener('click',restart)