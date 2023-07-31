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

//main-swiper-slide
// const 변수명 = new Swiper('적용대상');
// const 변수명 = new Swiper('적용대상',{속성:값,속성:값});
const pawin_slide = new Swiper('#pawin_slide',{
    
    autoplay:{
        delay:10000, // 슬라이드 간격(밀리초) 기본3초
        disableOnInteraction:false, //버튼 클릭 후 자동재생 유지
    },  //자동재생
    loop:true, //마지막슬라이드 -> 첫번째슬라이드 자연스러운 변경
    direction:'horizontal',
    // effect: 'fade',//재자리 변경 슬라이드효과
    navigation: { //이전, 다음 내비게이션 연결
        //next.prev 객체 연결 시 부모를 안적으면
        //body 안에 있는 모든 swiper-next,prev를 인식하기 때문에
        //개별인식 가능한 부모 이름을 반드시 앞에 먼저 작성한다
        nextEl: '#pawin_slide .swiper-button-next',
        prevEl: '#pawin_slide .swiper-button-prev',
    },
    /* direction:'vertical'  *///슬라이드 수직 이동
}) 
const my_slide = new Swiper('#my_slide',{
    autoplay:{
        delay:1500,
        disableOnInteraction:false,
    },
    loop:true,
    navigation: {
        nextEl: '#my_slide .swiper-button-next',
        prevEl: '#my_slide .swiper-button-prev',
    }
})