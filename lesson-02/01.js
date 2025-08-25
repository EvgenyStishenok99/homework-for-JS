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
let isAdmin = false   ;
let isVerifiedUser = false    ;
let hasSpecialPermission = false  ;
let hasTemporaryPass = false  ;

let isAccess = false;

while (!isAccess) {
  if  (((isAdmin = true) || (isVerifiedUser = true)) &&((hasSpecialPermission = true)||(hasTemporaryPass = true))) {
    let inAccess = true


  }  else {

  }
}


