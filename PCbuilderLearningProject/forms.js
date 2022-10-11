const ShowMenuButt = document.getElementsByClassName('registButt')[0];
let menuIsShow = false;
function ShowRegistMenu(){
		let RegistMenu = document.getElementsByClassName('registWindow')[0];
		RegistMenu.classList.remove('remove');
		menuIsShow = true;
}
ShowMenuButt.addEventListener('click', ShowRegistMenu);

const RemoveMenuButt = document.getElementsByClassName('X')[0];
function RemoveMenu(){
		let RegistMenu = document.getElementsByClassName('registWindow')[0];
		RegistMenu.classList.add('remove');
		menuIsShow = false;
}
RemoveMenuButt.addEventListener('click', RemoveMenu);
//^^^^^^^^^^^^^^^^^^^^Отображение меню регистраций и его скрытие^^^^^^^^^^^^^^^^^^^^

function chekInput(regular, str, erorTagID, erorStr){
		let bool = regular.test(str);
		let massageTag = document.getElementById(erorTagID);
		if (bool == false){
				massageTag.innerHTML = erorStr;
				return false;
		}else{
				massageTag.innerHTML = "";
				return true;
		}
}

let formRegist = document.forms.Registration;
let name = formRegist.name;
let secondName = formRegist.secondName;
let sex = formRegist.elements.pol;
let email = formRegist.email;

let reNames = /^\S[a-z]+\S$|^\S[а-яё]+\S$/;
let reEmail = /^\S\w+@\w+\.\w+\S$/;

let nameIsCorrect = false;
name.addEventListener('blur', ()=>{
		nameIsCorrect = chekInput(reNames, name.value.toLowerCase(), "ErorName", 'Введенно не верное имя');
});

let secondNameIsCorrect = false;
secondName.addEventListener('blur', ()=>{
		secondNameIsCorrect = chekInput(reNames, secondName.value.toLowerCase(), "ErorSecondName", 'Введенна не верная фамилия');
});

let emailIsCorrect = false;
email.addEventListener('blur', ()=>{
		emailIsCorrect = chekInput(reEmail, email.value.toLowerCase(), "ErorEmail", 'Почта введена не верно');
});

let userName ='null';
let subButton = formRegist.sandButt;
subButton.addEventListener('click', ()=>{
		let eror = document.getElementById('eror');
		if(nameIsCorrect && secondNameIsCorrect && emailIsCorrect){
				eror.innerHTML = "Вы успешно зарегистрированы";
				setTimeout(() =>{RemoveMenu();}, 1000);
				eror.classList.remove('erorMassege');
				
				userName = name.value + ' ' + secondName.value ;
				let nameOnSite = document.getElementById('UserName');
				nameOnSite.innerHTML = userName;
				let emailOnSite = document.getElementById('UserEmail');
				emailOnSite.innerHTML = email.value;
				
				ShowMenuButt.remove();
				let userData = document.getElementById('UserData');
				userData.style.opacity = '1';
				userData.style.zIndex = '0';
				userData.style.position = 'static';
		}else{
				eror.classList.add('erorMassege');
				eror.innerHTML = "Введены не верные даные";
		}
});
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^оброботка регистраций^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

let formComent = document.forms.coments;

let sendButt = formComent.sendComent;

let comentCount = 1;
sendButt.addEventListener('click', ()=>{
		let userComentText = formComent.comentsArea.value;
		if(userName == 'null'){
				let erorArea = document.getElementById('comentEror');
				erorArea.innerHTML = "Коментарии доступны только зарегистрированым пользователям!";
		}else if(userComentText == null || userComentText == ""){
				let erorArea = document.getElementById('comentEror');
				erorArea.innerHTML = "Коментарий пуст";
		}else{
				let erorArea = document.getElementById('comentEror');
				erorArea.innerHTML = "";
				let areaCom = document.getElementsByClassName('areaComents')[0];
				let comentBox = "<div class='comentBox'><p class='userName comentN"+String(comentCount)+"'></p><p class='commentText comentT"+String(comentCount)+"'></p></div>";
				areaCom.insertAdjacentHTML("beforeend", comentBox);
				
				let usersNameC = document.getElementsByClassName("comentN"+String(comentCount))[0];
				usersNameC.insertAdjacentText("afterbegin", userName);
				
				let usersTextC = document.getElementsByClassName("comentT"+String(comentCount))[0];
				usersTextC.insertAdjacentText("afterbegin", userComentText);

				comentCount = comentCount + 1;
		}
})

document.addEventListener('keydown', function(event){
  if(menuIsShow == true && event.key == "Escape"){
    RemoveMenu();
  }
});

let scrollB = document.getElementById("TopButton");
scrollB.addEventListener('click', ()=>{
  document.documentElement.scrollTop = 0;
})