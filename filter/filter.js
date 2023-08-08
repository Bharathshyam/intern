const buttons=document.querySelectorAll('.btn');
const boxes=document.querySelectorAll('.box');


buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        setActiveBtn(e);
        const btnfilter=e.target.dataset.filter;

        boxes.forEach((box=>{
            if(btnfilter=='all'){
                box.computedStyleMap.display="block";
            }else{
                const boxfilter=box.dataset.items;
                if(btnfilter==boxfilter){
                    box.style.display="block";
                }else{
                    box.style.display="none";
                }
            }
        }))
    })
})