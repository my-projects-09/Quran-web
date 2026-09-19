import { ReaderData, short_category, advice_category } from './Array';

import './Style.css'

import Header from './Component/Header/Header'
import ReaderInfo from './Component/ReaderInfo/ReaderInfo'


import { best_videos,long_category } from './Array';



function Line() {
  return (
    <div className='dev_line'>
      <div className='line'></div>
    </div>
  )
}


function ShowVideos({ videos, titleAr, titleEn, layout = 'default' }) {
  const isLongVideos = videos.some((video) => video.length === 'long');
  const gridClass = isLongVideos
    ? 'long_videos_box'
    : layout === 'best'
      ? 'best_videos_box'
      : 'short_videos_box';

  return (
    <div className='short_videos_container'>

      <div className='short_videos_title'>
        <h1>{titleAr}</h1>
        <h4>{titleEn}</h4>
      </div>

      <div className={`video_grid ${gridClass}`}>
        {videos.map((video) => (
          <div className={`video_card ${video.length === 'short' ? 'short_video_card' : 'long_video_card'}`} key={video.id}>
            <h3>{video.title}</h3>
            <iframe
              className={video.length === 'short' ? 'short_video_size' : 'long_video_size'}
              src={`https://www.youtube.com/embed/${video.url}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

    </div>
  );
}




function App() {
  return (
    <div>
      <Header />
      <ReaderInfo reader={ReaderData[0]} />
      <Line />

      <ShowVideos  videos={best_videos}  titleAr="أفضل الفيديوهات"  titleEn="The Best Videos" layout="best"/>
      <ShowVideos  videos={short_category}  titleAr="الفيديوهات القصيرة"  titleEn="The Short Videos"/>
      <ShowVideos  videos={advice_category}  titleAr="بعض النصائح المفيدة"  titleEn="advices"/>
      <ShowVideos  videos={long_category}  titleAr="الفيديوهات الطويلة"  titleEn="The Long Videos"/>
      

    </div>
  );
}

export default App;
