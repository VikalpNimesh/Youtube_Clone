
import PropTypes from 'prop-types';

const VideoBox = ({ info }) => {

  const {snippet,statistics} = info
  const {title,thumbnails} = snippet
  const {viewCount} = statistics

  // const snippet = info?.snippet;
  // const count = info?.statistics?.viewCount;
  // const title = snippet?.title;
  // const channel = snippet?.channelId;
  // const thumbnails = snippet?.thumbnails?.medium?.url;


  return (
    
   <div className=' w-72  p-2 pt-0 ml-2 mb-6 shadow-md cursor-pointer'>
   <img src={thumbnails?.medium?.url} alt=""  className=' mt-0 rounded-lg'/>
    <h1 className=' font-bold  py-2'>{title}</h1>
    <h1 className=' font-semibold '>Views-{viewCount} views</h1>
   </div>
  );
};





// VideoBox.propTypes = {
//   info: PropTypes.shape({
//     snippet: PropTypes.shape({
//       title: PropTypes.string,
//       thumbnails: PropTypes.string,
//     })
//   })
// };

export default VideoBox;
