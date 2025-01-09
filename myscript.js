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
                    //pinSpacing: false,
                    scrub:1,
                    start:'center center',
                    end: '300%', //뷰포트높이의 300%이며, 숫자가 클수록 느려짐
                    markers:true
                }
            });

            //.imgBox 모션
            gsap.utils.toArray('.imgBox').forEach(function(imgBox){
                //imgBox 커지는 애니메이션 - 화면 오른쪽에서 커지기 시작>중앙에서 종료
                gsap.timeline({
                    scrollTrigger: {
                        trigger: imgBox,
                        containerAnimation: scrollTween, //가로스크롤에서 트리거시점을 잡아주는 옵션
                        start: 'center right', //가로스크롤이라 right=bottom
                        end: 'center center',
                        scrub:true,
                        markers: true
                    }
                })
                //to애니메이션 지정
                .to(imgBox, {'clip-path':'inset(0%)',ease:'none', duration:1}, 0)
                

                //imgBox 작아지는 애니메이션 - 화면 중앙에서 작아지기 시작>왼쪽에서 종료
                gsap.timeline({
                    scrollTrigger: {
                        trigger: imgBox,
                        containerAnimation: scrollTween, //가로스크롤에서 트리거시점을 잡아주는 옵션
                        start: 'center center',
                        end: 'center left',
                        scrub:true,
                        markers: true
                    }
                })
                .to(imgBox, {'clip-path':'inset(30%)',ease:'none', duration:1}, 0)
            }); //.imgBox 모션 end


            //.textBox 모션
            gsap.utils.toArray('.textBox').forEach(function(textBox){
                //textBox 커지는 애니메이션 - 화면 오른쪽에서 커지기 시작>중앙에서 종료
                gsap.timeline({
                    scrollTrigger: {
                        trigger: textBox,
                        containerAnimation: scrollTween,
                        start: 'center 70%', //imgbox보다 늦게 시작?
                        end: 'center 40%',
                        scrub:true,
                        markers: true
                    }
                })
                .to(textBox, {'opacity':'1','x':-100,}, 0)

                //textBox 작아지는 애니메이션 - 화면 중앙에서 작아지기 시작>왼쪽에서 종료
                gsap.timeline({
                    scrollTrigger: {
                        trigger: textBox,
                        containerAnimation: scrollTween,
                        start: 'center 30%',
                        end: 'center 20%',
                        scrub:true,
                        markers: true
                    }
                })
                .to(textBox, {'opacity':'0'}, 0)
            }); //.textBox 모션 end
        }
    })
})