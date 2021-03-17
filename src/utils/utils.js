export const MAIN_URL = "https://api.slen1337.students.nomoredomains.monster";
// export const MAIN_URL = 'http://localhost:3002';
export const MOVIES_URL = "https://api.nomoreparties.co";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
}

export function errors(err) {
  if (err.status === 400) {
    return `Ошибка ${err.status}. Не верно заполнено одно из полей.`;
  } else if (err.status === 401) {
    return `Ошибка ${err.status}. Неправильные логин или пароль.`;
  } else if (err.status === 403) {
    return `Ошибка ${err.status}. Токен невалидный.`;
  } else if (err.status === 404) {
    return `Ошибка ${err.status}. Данные не найдены.`;
  } else if (err.status === 409) {
    return `Ошибка ${err.status}. Пользователь с таким-же email уже существует.`;
  } else if (err.status === 429) {
    return `Ошибка ${err.status}. Чумба, ты совсем? 250 запросов, куда столько. Погоди часик..`;
  } else if (err.status === 500) {
    return `Ошибка ${err.status}. На сервере произошла ошибка.`;
  } else {
    return `Ошибка ${err.status}. Ошибка сервера.`;
  }
}
