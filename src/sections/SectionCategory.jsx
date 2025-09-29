import Button from "../components/Button"
import CategoryCard from "../components/CategoryCard"
import SectionHeading from "../components/SectionHeading"

function SectionCategory() {
    return (
        <div id="section-categories">
            <SectionHeading sectionHeadingMain={'Dress the origene way'} sectionHeadingSub={'From casual ease to tailored tradition, Origene dresses men who lead with style, every day.'}/>

            <div className="grid grid-3-by-1 column-gap-3">
                <CategoryCard src={'./image/Frame_1321321150.webp'} text={'Explore Casual'}/>
                <CategoryCard src={'./image/Frame_1321321151_(1).webp'} text={'Step Into Tradition'}/>
                <CategoryCard src={'./image/Frame_1321321152_copy_1.webp'} text={'Command The Room'}/>
            </div>

            <div className="center margin-top-md">
            <Button styles={'btn-black'} direction={'#'}>Shop now</Button>
            </div>
        </div>
    )
}

export default SectionCategory
