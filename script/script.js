// 1. 모바일 메뉴 숨기기
// 객체 = m_nav_open 
// 객체.속성 = 값 -> 객체.style.display = 'none'
// 2. 햄버거 메뉴 클릭시 모바일 메뉴 보이기
// 객체 = m_nav , m_nav_open
// 객체.이벤트 (햄버거 메뉴 클릭 시)
// 3. X버튼 클릭시 모바일 메뉴 숨기기
// 객체 = close , m_nav_open
//변수생성
const m_nav_open = document.querySelector('.m_nav_open');
const m_nav = document.querySelector('.m_nav');
const close = document.querySelector('#close');
//출력확인
console.log(m_nav, m_nav_open, close)
//1. 모바일 메뉴 숨기기
m_nav_open.style.display = 'none'
//2. 햄버거 메뉴 클릭시 모바일 메뉴 보이기
m_nav.addEventListener('click',function(){
    //모바일 메뉴 보이기 
    m_nav_open.style.display = 'block'
})
close.addEventListener('click',function(){
    m_nav_open.style.display = 'none'
})