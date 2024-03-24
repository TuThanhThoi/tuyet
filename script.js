const addSnowflakeButton = document.getElementById('addSnowflake');
const snowContainer = document.body;

addSnowflakeButton.addEventListener('click', function() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snow');
    snowflake.textContent = '❄'; // Ký tự tuyết mới
    const leftPosition = Math.random() * 100; // Vị trí ngẫu nhiên
    snowflake.style.left = `${leftPosition}%`;
    const randomSize = Math.random() * (3 - 1) + 1;
    snowflake.style.fontSize = `${randomSize}em`;
    snowContainer.appendChild(snowflake);
    
});