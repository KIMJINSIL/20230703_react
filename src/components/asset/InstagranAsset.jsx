import Instagram from '../png/SNS_instagram.png';

export default function InstagranAsset() {
  return (
    <div>
        <img src={Instagram} alt="instagram logo" 
            className="w-6 h-6 
                    group-hover:w-10 
                    group-hover:h-10 
                    transition-all 
                    duration-200 " />
    </div>
  )
}