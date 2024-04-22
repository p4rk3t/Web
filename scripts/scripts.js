// Получаем ссылки на кнопку и элемент счетчика
const btn = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');

// Получаем значение из localStorage или устанавливаем 0
let storage = localStorage.getItem('likeCount');
if (storage === null || storage === undefined) {
    storage = 0;
}

// Устанавливаем текст счетчика равным значению из localStorage
likeCount.textContent = storage;

// Добавляем слушатель клика на кнопку
btn.addEventListener('click', () => {
    // Увеличиваем значение и обновляем текст счетчика
    storage++;
    likeCount.textContent = storage;
    
    // Сохраняем новое значение в localStorage
    localStorage.setItem('likeCount', storage);
});