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
//pawin_slide2
const pawin_slide2 = new Swiper('#pawin_slide2',{
    autoplay:{delay:3000},
    loop:true,
    effect:'fade'
})
//입양정보 슬라이드
const dog_info_slide = new Swiper('#dog_info_slide',{
    slidesPerView: 'auto', //한번에 슬라이드가 4개 보이게 하겠다/ breakpoints추가시 auto로 바꾼다
    spaceBetween:20, //여백 20px주겠다
    autoplay:{delay:1000},
    loop:true,
    //swiper-slide 반응형웹 옵션
    breakpoints:{
        //해상도:{옵션:값}
        //해상도 순서는 작은 해상도 -> 큰 해상도 순이다
        700:{slidesPerView:2},//700이상
        900:{slidesPerView:3},//900이상
        1160:{slidesPerView:4}//1160이상일 경우 슬라이드4개 보인다
    },
})