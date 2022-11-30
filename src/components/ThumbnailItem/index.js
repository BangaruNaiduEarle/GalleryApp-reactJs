// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {eachImgEle, onClickThumbnailImgEle} = props

  const {id, thumbnailUrl, thumbnailAltText} = eachImgEle

  const onclickThumbnail = () => {
    onClickThumbnailImgEle(id)
  }

  return (
    <li className="list-items">
      <button type="button" className="button" onClick={onclickThumbnail}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className="list-imgs" />
      </button>
    </li>
  )
}

export default ThumbnailItem
