import Kakao from '../png/SNS_kakaotalk.png';

export default function KakaoAsset() {
    return (
        <div>
            <img src={Kakao} alt="kakao logo" 
                className="w-6 h-6 
                        group-hover:w-10 
                        group-hover:h-10 
                        transition-all 
                        duration-200 " />
        </div>
  )
}