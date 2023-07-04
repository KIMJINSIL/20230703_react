import Blog from "../png/SNS_blog.png";

export default function BlogAsset() {
  return (
    <div>
        <img src={Blog} alt="blog logo" 
            className="w-6 h-6 
                    group-hover:w-10 
                    group-hover:h-10 
                    transition-all 
                    duration-200 " />
    </div>
  )
}