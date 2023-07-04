import { Link } from "react-router-dom"
import BlogAsset from "./asset/BlogAsset"
import FacebookAsset from "./asset/FacebookAsset"
import InstagranAsset from "./asset/InstagranAsset"
import KakaoAsset from "./asset/KakaoAsset"

export default function LeftSide() {
    const SNS_ITEMS = [
        {icon:<BlogAsset />, link: "https://www.naver.com/"},
        {icon:<FacebookAsset/>, link: "https://www.facebook.com/"},
        {icon:<InstagranAsset/>, link: "https://www.instagram.com/"},
        {icon:<KakaoAsset/> , link: "https://www.kakao.com/"},
    ]
  return (
    <div className="flex flex-col w-full space-y-6 items-center">
        {SNS_ITEMS.map(({icon, link})=> (
            <Link to={link} key={link}>
                <div className="w-10 h-10 border border-neutral-300 rounded-full flex justify-center items-center group overflow-hidden">
                    {icon}
                </div>
            </Link>
        ))}
    </div>
  )
}