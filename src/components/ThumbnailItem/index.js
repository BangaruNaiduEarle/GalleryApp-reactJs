// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {eachImgEle, onClickThumbnailImgEle, isActive} = props

  const {id, thumbnailUrl, thumbnailAltText} = eachImgEle

  const onclickThumbnail = () => {
    onClickThumbnailImgEle(id)
  }
  
  const ImageStyle = isActive ? 'thumbnail-img' : ''
  
  return (
       <li className={`list-items ${ImageStyle}`}>

        <button type="button" className="button" onClick={onclickThumbnail}>
          <img src={thumbnailUrl} alt={thumbnailAltText} className="list-imgs" />
        </button>
    </li>
  )
}

export default ThumbnailItem
