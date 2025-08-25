/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

*
*
* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
    const isAdmin = Math.random() ;

const isVerifiedUser = Math.random()   ;
const hasSpecialPermission = Math.random() ;
const hasTemporaryPass = Math.random() ;

let isAccess = false;

while (!isAccess) {
  if  (((isAdmin <0.5) || (isVerifiedUser <0.5)) &&((hasSpecialPermission <0.5)||(hasTemporaryPass <0.5))) {

    console.log("Проход разрешён")
    isAccess = true;

  }  else {
    isAccess = true;


    console.log("Проход запрещен");

  }
}


