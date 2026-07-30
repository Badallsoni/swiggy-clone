export default function DineCard({RestData}){

  return(
    <div className="max-w-sm flex-none">
      <a target="_blank"  href={RestData.cta.link}>
      <div className="relative">
        <img className="w-80 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+RestData?.info?.mediaFiles[0]?.url}></img>
        <p className="absolute bottom-2 left-42text-2xl text-white font-bold">{RestData.info.name}</p>
        <p className="absolute bottom-2 right-2 text-2xl text-white font-bold ">{RestData.info.rating.value}</p>
         <div className="absolute bottom-0 left-0 right-0 h-3
                bg-gradient-to-t from-black via-black/50 to-transparent">
</div>
      </div></a>

    </div>
  )
}