import AboutPC from './AboutPC'
import AboutMobile from './AboutMobile';

const About = () => {

    const isMobile = window.innerWidth < 768;

    return (
        <div>
        {isMobile ? (
            <AboutMobile /> 
        ) : (
            <AboutPC/>
        )}
    </div>
    )
}

export default About;