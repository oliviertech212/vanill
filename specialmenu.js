
//menu content
const arr=[
    {
        id:1,
        title:"soup",
        category:"breakfast",
        price:15,
        img:"photo/A.jpg",
        description:"our soup is better produced in rwanda"
    },
    {
        id:2,
        title:"soup",
        category:"breakfast",
        price:15,
        img:"photo/A3.jpg",
        description:"our soup is better produced in rwanda"
    },
    {
        id:3,
        title:"soup",
        category:"breakfast",
        price:15,
        img:"photo/A1.jpg",
        description:"our soup is better produced in rwanda"
    },
    {
        id:4,
        title:"supperghett",
        category:"lunch",
        price:15,
        img:"photo/break1.jpg",
        description:"special superghehtti produced in rwanda"
    },
    {
        id:5,
        title:"supperghett",
        category:"lunch",
        price:15,
        img:"photo/break2.jpg",
        description:"special superghehtti produced in rwanda"
    },
    {
        id:6,
        title:"vsegetable",
        category:"dinner",
        price:15,
        img:"photo/s4.jpg",
        description:"our vevgetable is better produced in rwanda"
    },

];


const btncontainer=document.querySelector(".btn-container");
const sectioncenter=document.querySelector(".section-center");
//load item whe loaded

window.addEventListener("DOMContentLoaded",()=>{
    displaymenuitems(arr);
    displaymenubuttons();

});
function displaymenuitems(menuitems){

    const diplaymenu= menuitems.map(function(arrayitems){
        return `<article class="mneu-item">
                 <img src="${arrayitems.img}" class="photo" alt="${arrayitems.title}"> 
                <dv class="item-info">
                    <header>
                        <h4>${arrayitems.title}</h4>
                        <h4 class="price">$${arrayitems.price}</h4>
                    </header>
                    <p class="item-text">
                        ${arrayitems.description}
                    </p>
                </dv>
            </article>`;
    }).join("");
 // diplaymenu=diplaymenu.join("");

    sectioncenter.innerHTML=diplaymenu;


}

function displaymenubuttons(){
    var categories=arr.reduce((values,arrayitems)=>{
        if (!values .includes(arrayitems.category)) {
            values.push(arrayitems.category);
            
        }
        return values;
    },["all"]);



    const categoriesbtn= categories.map((category)=>{
        return` <button class="filter-btn hover" type="button" data-id=${category}><h1>${category}</h1></button>`

    }).join("");

    btncontainer.innerHTML=categoriesbtn;

    const filterBtns=btncontainer.querySelectorAll(".filter-btn");
    //filter items
    filterBtns.forEach((button)=>{
        button.addEventListener("click",(event)=>{
            let element=event.currentTarget.dataset.id;
            let menuCategory=arr.filter((arrayitems)=>{
                if(arrayitems.category===element){
                    return arrayitems;
                }

            });
            if(element==="all"){
                displaymenuitems(arr);
                  }else{
                displaymenuitems(menuCategory);
            }
        });  
        //hovering the buttons
        button.addEventListener("mouseover",(e)=>{
            e.target.style.backgroundColor="sienna";

        }); 
        button.addEventListener("mouseleave",(e)=>{
            e.target.style.backgroundColor="";

        }); 
    });   
}


//button hovering
// const butto=btncontainer.querySelectorAll(".hover");
// butto.forEach((butt)=>{
//     butt.addEventListener("click",(e)=>{
//         e.target.style.backgroundColor="blue";
//         // e.target.style.backgroundColor = 'pink';

//     })

// });
const activebtn=document.querySelector(".toggle");
activebtn.addEventListener("click",()=>{
    btncontainer.classList.toggle("display")
});

