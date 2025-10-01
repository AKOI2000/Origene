import Carousel from '../components/Carousel'

function SectionCarousel({isLoading}) {
    return (
        <div id="section-carousel">
             <Carousel img1={`/image/HASSAN-GALLERY.webp`} img2={`/image/CASSI-GALLERY.webp`} img3={`/image/IREMIDE-WHITE-GALLERY.webp`} img4={`/image/IREMIDE-GALLERY.webp`} isLoading={isLoading}/>
             {/* ${import.meta.env.BASE_URL} */}
        </div>
    )
}

export default SectionCarousel
// img1={"./image/_HQ_0521 copy 2 1 (4).png"} img2={"./image/_HQ_0521 copy 2 1 (3).png"} img3={'./image/_HQ_0542 2 copy 2 1.png'} img4={'./image/_HQ_0521 copy 2 1 (5).png'}