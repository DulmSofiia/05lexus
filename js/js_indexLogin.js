'use strict';
//HEADER -> side-menu
const sideMenu=document.querySelector('.side-menu');
const menu=sideMenu.querySelector('span.menu');
const sideGnb=document.querySelector('.side-menu .side-gnb');
const sideGnbUl=document.querySelector('.side-menu .side-gnb>ul');
const sideP=document.querySelector('.side-menu .side-gnb> p');
const sideGnbLi=document.querySelectorAll('.side-menu .side-gnb>ul>li');

const sideGnbUlLiSub=document.querySelector('.side-menu .side-gnb>ul>li>ul.sub');
const sideGnbUlLiSubLi=document.querySelectorAll('.side-menu .side-gnb>ul>li>ul.sub>li');

menu.addEventListener('click', (e)=>{
  sideGnb.style.right='0';
});
sideP.addEventListener('click',  (e)=>{
  sideGnb.style.right='-100%';
});
//LOGIN form Event
let loginForm=document.querySelector('#loginForm');
let loginOk=document.querySelector('.loginOk');
let userId=document.querySelector('#userId');
let userPw=document.querySelector('#userPw');

loginOk.addEventListener('click', (e)=>{
  //submit 기본 이벤트 중지
  e.preventDefault();
  //form 요소를 요호설 검사
  if(userId.value<=0){
    alert("본인 아이디 입력하세요");
    userId.focus();
    return;
  }
  if(userPw.value<=0){
    alert("본인 비밀번호를 입력하세요");
    userPw.focus();
    return;
  }
  alert('로그인 실행');
  loginForm.submit();
});