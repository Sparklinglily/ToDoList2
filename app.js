
// Lejend Ekpaton
// 09027453509
// Lincense:  [for educational use only]
// _____________________________________


var container= document.querySelector('#container');
var bodi= document.querySelector('[name=bodi]')[0];
var lists= document.querySelector('#lists').firstElementChild;

var btn = document.querySelector('#plus');
var box = document.querySelector('#new_item');

var saveBtn = document.querySelector('#save');


saveBtn.addEventListener('click', ()=> {
    var input = document.querySelector('#input').value;

    // alert(input);

    // CREATING  EACH LIST ITEM

    var new_item = document.createElement('li');

    new_item.innerHTML= ` 

    <div class="circle"></div>
    <p>   ${input}    </p>

`;

    lists.appendChild(new_item);


});



// INPUT BOX

btn.addEventListener('click', function(){
    // var xx =prompt('Enter title');
    box.style.display = 'block';
}); 

window.onclick= function(event){
    if (event.target == container){
        box.style.display = 'none';
    }

}









// DATABASE

function toDo(title, status=0){
    this.title = title;
    this.done =  status;
} 

 


var toDos = [];
toDos[toDos.length] = new toDo('Go Swimming', 1); 



if(toDos.length == 0){
    lists.innerHTML = `
    
    <p>No data found</p>
        <li class="checked">
    </li>
`;
}

else {
    for(var data of toDos) {
        var status =  (data.done) ? 'checked': '';
        lists.innerHTML =`
            <li class="${status}">
                <div class="circle"></div>
            <p> ${data.title} </p>
        </li>

        
        `; 
    }    
}






// MARKING ITEMS
{

    let lists= document.querySelector('#lists').firstElementChild.children;
    
        // Load Event Listeners
        for(item of lists){
            item.addEventListener('click', function(){
                alert('hi');
                // console.log(e);
            })
        }

        function checked(x){    
            if(x.classList=='checked'){
                x.classList = '';
                return;
            }
            x.classList = 'checked';
            // x.firstElementChild.classList +=' checked';
        }
    


}


