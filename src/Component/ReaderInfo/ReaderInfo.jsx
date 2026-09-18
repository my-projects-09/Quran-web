
import './ReaderInfo.css'

function ReaderInfo({reader}){

    return(

        <div className='info_container'>

            <div className='info_box'>
                <img className='reader_img' src={reader.img} alt={reader.arabic_name} />
            
                <h2 className='reader_name'>{reader.arabic_name}</h2>

                <p className='footer_info'>{reader.des}</p>

                <p className='footer_info'>{reader.english_name}</p>
            </div>

        </div>
    );
}

export default ReaderInfo;