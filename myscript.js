$(function(){
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        '(min-width: 1024px)':function(){ //1024px 까지만 적용
            
            //가로스크롤
            let list = gsap.utils.toArray('.work ul li'); //li를 배열로 만들어서 list에 저장
            let scrollTween = gsap.to(list, {
                xPercent: -100 * (list.length - 1), //원래 리스트의 개수보다 1을 빼서 길이를 구한 후에 가로(-100 곱해서)로 이동
                ease:'none', //가속도
                scrollTrigger: {
                    trigger:'.work',
                    pin: true, //활성 상태에서 트리거 요소 고정
                    pinSpacing: false,
                    scrub:1,
                    start:'center, center',
                    end: '300%', //뷰포트높이의 300%이며, 숫자가 클수록 느려짐
                    markers:true
                }
            })
        }

    })

})