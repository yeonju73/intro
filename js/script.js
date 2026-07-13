// 1. 햄버거 메뉴 및 네비게이션 활성화 스크립트
document.addEventListener('DOMContentLoaded', () => {
    // 햄버거 메뉴 토글
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 네비게이션 활성화 표시
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '') || 'about';
    
    document.querySelectorAll('.nav-link, #mobile-menu a').forEach(link => {
        if (link.getAttribute('data-page') === page) {
            link.classList.add('text-primary', 'dark:text-secondary', 'font-semibold', 'border-b-2', 'border-primary', 'dark:border-secondary');
            link.classList.remove('text-[#5D7A55]/70', 'dark:text-[#A8C69F]/70');
        } else {
            link.classList.remove('text-primary', 'dark:text-secondary', 'font-semibold', 'border-b-2', 'border-primary', 'dark:border-secondary');
            link.classList.add('text-[#5D7A55]/70', 'dark:text-[#A8C69F]/70');
        }
    });
    // 테마 토글
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });
    }

    // 커스텀 커서 움직임 로직
    const cursor = document.getElementById('custom-cursor');

    // 커서 내부에 이모지 삽입
    cursor.innerHTML = '🐻‍❄️'; 
    cursor.style.fontSize = '30px';
    cursor.style.display = 'flex';
    cursor.style.alignItems = 'center';
    cursor.style.justifyContent = 'center';
    cursor.style.background = 'transparent'; // 배경색 제거

    window.addEventListener('mousemove', (e) => {
        // 커서 위치를 마우스 중심에 맞춤
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

});

// 2. 요소 등장 애니메이션 (IntersectionObserver)
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// 모든 fade-in 요소를 관찰
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// script.js에 추가할 내용
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }
});

// 테마 토글
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});
