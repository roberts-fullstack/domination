//============= 1 ============================



function lineThrough(){
    const firstLi = document.querySelector('#arguments>li');
    firstLi.style.textDecoration = 'line-through';
    };
    
    
    
    // function lineThrough(){
    // document.querySelector('li')
    // .style.textDecoration = 'line-through';
    // };
    
    
    
    // const lineThrough = () => 
    // document.querySelector('li').style.textDecoration =
    // 'line-through';
    
    
    
    //============== 2 ===========================
    
    
    lineThrough();
    
    
    //============== 3 ===========================
    
    
    function setImg(id, url){
    document.getElementById(id).src = url;
    };
    
    // const setImg = (id,url) => document.getElementById(id).src = url;
    
    //============= 4 =============================
    
    
    setImg('image-1','https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60');
    
    
    
    setImg('image-2','https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60');
    
    
    
    setImg('image-3','https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60');
    
    
    
    //============== 5 ======================
    
    
    // function removeLastLi(){
    // const ul = document.querySelector('ul');
    // ul.removeChild(ul.lastElementChild);
    // }
    
    const removeLastLi = (ul = document.querySelector('ul')) =>
    ul.removeChild(ul.lastElementChild);
    
    //=============== 6 =====================
    
    removeLastLi();
    removeLastLi();
    
    
    //============== 7 =======================
    
    // function fontSize(id,numInPx){
    // document.getElementById(id).style.fontSize = fontSize;
    // }
    
    const fontSize = (id,numInPx) => document.getElementById(id)
    .style.fontSize = numInPx;
    
    
    
    //============= 8 ========================
    
    
    fontSize('heading', '150px');
    
    
    //======PART2============PART2============
    //================ 1 =====================
    
    
    // function append(domElement){
    //  const parent = document.querySelector('ul');
    //  parent.appendChild(domElement);
    // }
    
    const append = (domElement, parent = document.querySelector('ul')) => 
    parent.appendChild(domElement);
    
    //=============== 2 ======================
    
    
    const element = document.createElement('img');  
    append(element);
    
    
    //=================  3 ====================
    
    
    function imgSize(img){
        img.style.height = '30px';
    }
    
    
    //=============== 4 =======================
    
    const image = document.getElementById('image-2');
    
    imgSize(image);
    
    //================ 5 =====================
    
    
    function disappear(element){
    element.className = "invisible";
    }
    
    //================ 6 =======================
    
    const element2 = document.querySelector('ol > li');
    
    disappear(element2);
    
    
    //=========PART3=======PART3===============
    //================= 1 =====================
    
    function newText(text){
     const newLi = document.createElement('li');
     newLi.innerText = text;
     return newLi; 
    }
    
    
    
    //================= 2 =====================
    
    
    let li = newText('My little toe hurts today');
    // console.log(li);
    append(li);
    
    
    //================= 3 =====================
    
    function newHeader(headerSize, string){
        const newHeader = document.createElement(`h${headerSize}`);
        newHeader.innerText = string;
        return newHeader;
    }
    
    
    //================= 4 =====================
    
    const header = newHeader(2,'this is it');
    
    append(header);