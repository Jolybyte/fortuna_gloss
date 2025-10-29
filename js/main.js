// Основной JavaScript файл
document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Заполнение таблицы характеристик
    const featuresData = [
        { parameter: 'Модель', method: 'FL75', value: '/' },
        { parameter: 'Общая толщина', method: 'Микрон', value: '190 нм' },
        { parameter: 'Толщина основы TPU', method: 'Секционный микроскоп', value: '150 нм' },
        { parameter: 'Прочность на растяжение', method: 'ASTM D882', value: '>28 МПа' },
        { parameter: 'Удлинение при разрыве', method: 'ASTM D882', value: '≥450%' },
        { parameter: 'Удлинение покрытия', method: '90-120 (%)', value: '>100%' },
        { parameter: 'Прочность сцепления 2мин', method: 'GB2792-1998', value: '>6N' },
        { parameter: 'Прочность сцепления 20мин', method: 'GB2792-1998', value: '>12N' },
        { parameter: 'QUV2000H', method: 'Тест на устойчивость к старению', value: 'Пожелтение ΔE <1.1' },
        { parameter: 'Глянец', method: 'Глянцемер (угол 60°)', value: '95GU' },
        { parameter: 'Анти-граффити', method: 'Красные, синие, черные маркеры', value: 'Без следов' },
        { parameter: 'Гидрофобность', method: 'Тест с водой', value: 'Гидрофобный' },
        { parameter: 'Химическая стойкость', method: 'Очиститель асфальта', value: 'Не влияет на внешний вид' },
        { parameter: 'Устойчивость к погодным условиям', method: '8 лет', value: '' }
    ];
    
    const featuresTable = document.querySelector('.features-table');
    featuresData.forEach(item => {
        const row = document.createElement('div');
        row.className = 'table-row fade-in';
        row.innerHTML = `
            <div>${item.parameter}</div>
            <div>${item.method}</div>
            <div>${item.value}</div>
        `;
        featuresTable.appendChild(row);
    });
    
    // Изменение навигации при скролле
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
            nav.style.padding = '1rem 5%';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.8)';
            nav.style.padding = '1.5rem 5%';
        }
    });
    
    // Обработка формы
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Здесь должна быть логика отправки формы
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        this.reset();
    });
});