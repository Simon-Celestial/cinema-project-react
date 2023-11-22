import {Star,Play} from "@phosphor-icons/react";

const FilmItem = ({image,filmName,rating,releaseData}) => {
    return (
        <div className="film-item">
            <div className="film-image-block">
                <img src={image}
                     alt="Film image"/>
                <div className="read-more-block">
                    <div className="play-circle">
                        <Play size={16} weight="fill" color="white"/>
                    </div>
                    <p>READ MORE</p>
                    <span>{releaseData}</span>
                </div>
            </div>
            <div className="film-name-block">
                <p>{filmName}</p>
            </div>
            <div className="film-rating-block">
                <Star size={18} weight="fill" color={rating}/>
                <Star size={18} weight="fill" color={rating}/>
                <Star size={18} weight="fill" color={rating}/>
                <Star size={18} weight="fill" color={rating}/>
                <Star size={18} weight="fill" color={rating}/>
            </div>
        </div>
    )
}
export default FilmItem;