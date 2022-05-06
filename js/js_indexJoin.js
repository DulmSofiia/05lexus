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
//JOIN js event
const joinOkBtn=document.querySelector('#joinOkBtn');
const joinForm=document.querySelector('#joinForm');
const pChecked=document.querySelector('p.checked');

const userName=joinForm.userName;
const userId=joinForm.userId;
const userPw=joinForm.userPw;
const userPwCheck=joinForm.userPwCheck;
const userEmail=joinForm.userEmail;
const userPhone=joinForm.userPhone;
const gender=joinForm.gender;
const residence=joinForm.residence;
const city=joinForm.city;
/* const userName=document.querySelector('#userName');
const userId=document.querySelector('#userId');
const userPw=document.querySelector('#userPw');
const userPwCheck=document.querySelector('#userPwCheck');
const userEmail=document.querySelector('#userEmail');
const userPhone=document.querySelector('#userPhone');
const gender=document.querySelector('#gender');
const residence=document.querySelector('#residence');
const city=document.querySelector('#city'); */

userName.addEventListener('change',(e)=>{
  console.log(e.type, e.target.value);
});
userId.addEventListener('change',(e)=>{
  console.log(e.type, e.target.value);
});
userPw.addEventListener('change',(e)=>{
  console.log(e.type, e.target.value);
});
userPwCheck.addEventListener('keyup',(e)=>{
  console.log(e.type, e.target.value);
  const pwVal=userPw.value;
  const pwChVal=e.target.value;

  if(pwChVal === pwVal){
    console.log(e.target.value);
    pChecked.innerText='비밀번호가 같습니다!';
    pChecked.style.color='#555555';
    pChecked.style.fontSize='10px';
  }else{
    console.log(e.target.value);
    pChecked.innerText='비밀번호가 틀립니다! 다시 비밀번호 확인해주세요';
    pChecked.style.color='#ff0000';
    pChecked.style.fontSize='8px';
  }
});
residence.addEventListener('change', (e)=>{
  console.log(e.target.value);
});
city.addEventListener('change', (e)=>{
  console.log(e.target.value);
});

joinOkBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  //공백, 체크 안되어 있으며 팝법창 -> 다 작ㅇ, 체를 하고 완료가 되면 서버에 전송 하도록
  if(userName.value === '' || userName.value.length<=0){
    alert('회원 이름 입력해주세요');
    userName.focus();
    return false;
  } 
  if(userId.value === '' || userId.value.length<=0){
    alert('회원 아이디 입력해주세요');
    userId.focus();
    return false;
  } 
  if(userId.value<=4 || userId.value.length>8){
    alert('아이디를 5글자 이상 8글자 이하로 입력해주세요');
    userId.focus();
    return false;
  }
  if(userPw.value === '' || userPw.value.length<=0){
    alert('회원 비밀번호 입력해주세요');
    userPw.focus();
    return false;
  } 
  if(userPwCheck.value === '' || userPwCheck.value.length<=0){
    alert('회원 비밀번호확안 해주세요');
    userPwCheck.focus();
    return false;
  } 
  if(userEmail.value === '' || userEmail.value.length<=0){
    alert('회원 이메일 입력해주세요');
    userEmail.focus();
    return false;
  } 
  if(userPhone.value === '' || userPhone.value.length<=0){
    alert('회원전화번호 입력해주세요');
    userPhone.focus();
    return false;
  }
  if(gender.value === '' || gender.value.length<=0){
    alert('회원 성별 선택해주세요');
    gender.focus();
    return false;
  } 
  if(gender.value == 'null'){
    alert('회원 성별 선택해주세요');
    gender.focus();
    return false;
  } 
  if(residence.value === '' || residence.value.length<=0){
    alert('회원 사는 거주지 선택해주세요');
    residence.focus();
    return false;
  } 
  if(city.value === '' || city.value.length<=0){
    alert('회원 사는 구역 선택해주세요');
    city.focus();
    return false;
  } 
  alert('가입완료 하기.');
  joinForm.submit();
});

