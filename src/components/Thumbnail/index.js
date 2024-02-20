import './index.css'

const Thumbnail = props => {
  const {thumbnailDeatils, checkSelectedAns} = props
  const {thumbnailUrl, imageUrl} = thumbnailDeatils

  const onClickThumbnail = () => {
    checkSelectedAns(imageUrl)
  }

  return (
    <li className="thumbnail-item">
      <button className="button" type="submit" onClick={onClickThumbnail}>
        <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default Thumbnail
