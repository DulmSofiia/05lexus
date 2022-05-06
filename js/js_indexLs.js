'use strict';
//SECTION 1
const gallery=document.querySelector('.gallery');
const galleryUl=document.querySelector('.gallery>ul');
const galleryUlLi=document.querySelectorAll('.gallery>ul>li');

const items=document.querySelector('.items');
const itemsUl=document.querySelector('.items>ul');
const itemsUlLi=document.querySelectorAll('.items>ul>li');
//section1-> gallery의 img 등록
//배열 이용해서  .gallery>ul>li에 배경 이미지 설정
const arrBg=[];
for(let i=0; i<galleryUlLi.length; i++){
  arrBg.push(`url(img/imgLs/Ls${i}.jpg) no-repeat 50%/cover`);
  galleryUlLi[i].style.background=arrBg[i];
}
let i=-1;
let setOut;
function fadeGallery(){
  if(i >= galleryUlLi.length -1) i= -1;
  i++;
  console.log(`i-> ${i}`);
  galleryUlLi.forEach((element, index)=>{
    if(i===index){
      element.classList.add('fadeLi');
    }else{
      element.classList.remove('fadeLi');
    }
  });
  //itemsUlLi
  itemsUlLi.forEach((element,index)=>{
    if(index===i){
      element.classList.add('on');
    }else{
      element.classList.remove('on');
    }
  });
  if(i>=galleryUlLi.length-1) i=-1;
}
let setIn=setInterval(fadeGallery,5000);
(()=>{
  fadeGallery();
})();
//items>ul>li의 function 이용해서 적용
itemsUl.addEventListener('mouseover', itemsUlFn);
itemsUl.addEventListener('mouseout', itemsUlFn);
function itemsUlFn(e){
  const eTarget = e.target;
  itemsUlLi.forEach((el,idx)=>{
    if(eTarget==el){
      if(e.type=="mouseover"){
        clearInterval(setIn);
      }else if(e.type=="mouseout"){
        setIn=setInterval(fadeGallery,5000);
      }
    }
  });
}
//클릭한 li가 items>ul>li의 인덱스를 콘솔에 출력
itemsUl.addEventListener('click', (e)=>{
  const eTarget = e.target;
  itemsUlLi.forEach((el,idx)=>{
    if(eTarget==el){
      el.classList.add('on');
      galleryUlLi.forEach((el2,idx2)=>{
        console.log(idx2);
        if(idx==idx2){
          el2.classList.add('fadeLi');
        }else{
          el2.classList.remove('fadeLi');
        }
      });
      i=idx;
    }else{
      el.classList.remove('on');
    }
  });
});
//center-btn span.arrow
const centerBtn=document.querySelector('.center-btn');
const arrows=document.querySelectorAll('.center-btn> span.arrow');
//이벤트 위임 이용해서 center-btn span mouseover setIn 중지
//center-btn span mouseout setIn 다시 시작
centerBtn.addEventListener('mouseover', itemsUlFn);
centerBtn.addEventListener('mouseout', itemsUlFn);
function itemsUlFn(e){
  const eTarget = e.target;
  arrows.forEach((el,idx)=>{
    if(eTarget==el){
      if(e.type=="mouseover"){
        clearInterval(setIn);
      }else if(e.type=="mouseout"){
        setIn=setInterval(fadeGallery,5000);
      }
    }
  });
}
//centerBtn click event
centerBtn.addEventListener('click', (e)=>{
  const eTarget=e.target;
  arrows.forEach((el,idx)=>{
      if(el===eTarget){
          if(idx==0){
              i--;
              if(i<0) i=galleryUlLi.length-1;
              galleryUlLi.forEach((element, index)=>{
                  if(i === index){
                      element.classList.add('fadeLi');
                  }else{
                      element.classList.remove('fadeLi');
                  }
              });
              itemsUlLi.forEach((element, index)=>{
                  if(i === index){
                      element.classList.add('on');
                  }else{
                      element.classList.remove('on');
                  }
              });

          }else if(idx==1){
              i++;
              if(i>galleryUlLi.length-1) i=0;
              galleryUlLi.forEach((el, idx)=>{
                  if(i === idx){
                      el.classList.add('fadeLi');
                  }else{
                      el.classList.remove('fadeLi');
                  }
              });
              itemsUlLi.forEach((el, idx)=>{
                  if(idx===i){
                      el.classList.add('on');
                  }else{
                      el.classList.remove('on');
                  }
              });
          }
      }
  });
});
//SECTION 3


//SECTION 4
const bottomUl=document.querySelector('.intColor-bottom>ul');
const bottomUlLi=document.querySelectorAll('.intColor-bottom>ul>li');
const bottomUlLiImg=document.querySelectorAll('.intColor-bottom>ul>li img');
const galleryTop=document.querySelector('.galleryInt-top');

//모든 bottomUlLi forEach click 이벤트 바인딩
bottomUlLi.forEach((el, idx)=>{
  el.addEventListener('click', (e)=>{
    const eTarget=e.target;
    const eCTarget=e.currentTarget;
    bottomUlLiImg.forEach((el2, idx2)=>{
      if(eTarget==el2){
        //css의 img의 선택객체의 src값 가져오기
        const imgSrc=el2.getAttribute('src');
        //css의 img의 선택객체의 alt값 가져오기
        const imgAlt=el2.getAttribute('alt');
        console.log(idx);
        const galleryTopImg=galleryTop.children[0]; //1번째 자식
        const galleryTopImgTxt=galleryTop.children[1]; //2번째 자식
        galleryTopImg.setAttribute('src', imgSrc)
        galleryTopImg.setAttribute('alt', imgAlt)
        galleryTopImgTxt.innerText=imgAlt;
        el2.classList.add('on');
      }else{
        el2.classList.remove('on');
      }
    });
  });
});
//HEADER -> sideMenu click event
const sideMenu=document.querySelector('.side-menu');
const menu=sideMenu.querySelector('span.menu');
const sideGnb=document.querySelector('.side-menu .side-gnb');
const sideP=document.querySelector('.side-menu .side-gnb>p');
const sideGnbUl=document.querySelector('.side-menu .side-gnb>ul');
const sideGnbLi=document.querySelectorAll('.side-menu .side-gnb>ul>li');

const sideGnbUlLiSub=document.querySelector('.side-menu .side-gnb>ul>li>ul.sub');
const sideGnbUlLiSubLi=document.querySelectorAll('.side-menu .side-gnb>ul>li>ul.sub>li');

menu.addEventListener('click', (e)=>{
  sideGnb.style.right='0';
});
sideP.addEventListener('click',  (e)=>{
  sideGnb.style.right='-100%';
});
//SECTION3
document.getElementById('right').addEventListener('click', rightFn, false);
document.getElementById('left').addEventListener('click', leftFn, false);
let key=0;
function rightFn(){
  if(key<12){
    key++;
  }else if(key=12){
    key=1;
  }
  document.getElementById('maini').src=`img/imgLs/${key}.png`;
}
function leftFn(){
  if(key>1){
    --key;
  }else if(key=1){
    key=12;
  }
  document.getElementById('maini').src=`img/imgLs/${key}.png`;
}