import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselMain() {
  return (
    <Carousel 
        autoPlay={true} 
        showThumbs={false} 
        showIndicators={false} 
        infiniteLoop={true} 
        showStatus={false} 
        interval={5000}
        transitionTime={1500}
        stopOnHover={false}
        animationHandler="fade"
        >
            {/* 첫번째 캐러셀 */}
            <div className="w-full">
                <img src="https://images.unsplash.com/photo-1543158266-0066955047b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="main carousel 1"/>
            </div>
            {/* 두번째 캐러셀 */}
            <div className="w-full">
                <img src="https://images.unsplash.com/photo-1560625693-36619f571dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1330&q=80" alt="main carousel 2"/>
            </div>
    </Carousel>
  )
}