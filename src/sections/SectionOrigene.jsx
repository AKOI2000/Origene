import Overflowspread from '../components/Overflowspread';
function SectionOrigene() {
    return (
        <div id="section-origene">
            <div className='img-box'>
                <img src={`${import.meta.env.BASE_URL}image/Oriegene_Mark_Black.webp`}/>
            </div>
            <Overflowspread>BESPOKE PIECES. MADE TO ALWAYS FIT.</Overflowspread>
        </div>
    )
}

export default SectionOrigene
