// GET data fetch method ------------------------
let data = document.querySelector('.data-search');
let temp = document.querySelector('.data-temp');
let wind = document.querySelector('.data-wind');
let search = document.getElementById('search');

let body = document.querySelector('body');


search.addEventListener('click', ()=>{
    
    let names = document.getElementById('city').value;
    
    
    let p = fetch(`https://goweather.herokuapp.com/weather/${names}` );
    
    p.then((response)=>{
        // console.log(response.status)
        console.log(response.ok)
        // console.log(response.headers)
        return response.json()
    }).then((value2)=>{
        console.log(value2);
        data.innerHTML=value2.description;
        temp.innerHTML=value2.temperature;
        wind.innerHTML=value2.wind;

        if(data.innerHTML === 'undefined'){
            // alert('Oops Please Enter Valid City ');
            body.style.backgroundColor="#F18972";
        }
       
        else{
            body.style.backgroundColor="#AFE1AF";
        
        }
    })
} ) ;
 