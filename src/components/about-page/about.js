import background from '../../assets/background-1.png';

import imageOne from '../../assets/photo-1.jpg';
import imageTwo from '../../assets/photo-2.jpg';
import imageThree from '../../assets/photo-3.jpg';
import imageFour from '../../assets/photo-4.jpg';
import imageFive from '../../assets/photo-5.jpg';
import imageSix from '../../assets/photo-6.jpg';
import imageSeven from '../../assets/photo-7.jpg';
import imageEight from '../../assets/photo-8.jpg';
import imageNine from '../../assets/photo-9.jpg';

import './about.css';
import './responsive.css';

export default function About() {
    function playVideo() {
        const videoIframe = document.getElementById('videoIframe');
        const thumbnail = document.getElementById('thumbnail');

        thumbnail.style.display = 'none';
    }

    return <div className='about-container'> 
        <div className="introduction-screen">
            <div className="background-container">
                <h1 className='title'>Ableton</h1>
                <img src={background} alt='background' className='background'/>
            </div>
        </div> 

        <div className='text-block-container'>
            <div className='block-one text-block'>
                <h1 className='text-body-1'>We make <span>Live</span>, <span>Push</span>, <span>Note</span> and <span>Link</span> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h1>
                <p className='text-body-2'>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>                
            </div>    
        </div>

        <div className='block-two-college'>

            <div className='image-two-background'></div>

            <div className='image-one'>
                <img src={imageOne}></img>
            </div>

            <div className='image-two'>
                <img src={imageTwo}></img>
            </div>

        </div>

        <div className='text-block-container'>
            <div className='block-three text-block'>
                <h1 className='text-body-1'>Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.</h1>
                <p className='text-body-2'>We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>                
            </div>
        </div>

        <div className='block-four'>
            <div className='thumbnail' onClick={playVideo} id='thumbnail'>
                <div className='play-button'>
                    <div className='triangle'></div>
                </div>
            </div>
            <iframe className='video' id="videoIframe" width="1264" height="711" src="https://www.youtube.com/embed/9SbnhgjeyXA" title="Why Ableton - Juanpe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
            <p className='video-title'>Why Ableton - Juanpe Bolivar</p>
        </div>

        <div className='text-block-container'>
            <div className='block-four text-block'>
                <h1 className='text-body-1'>We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.</h1>
                <p className='text-body-2'>
                    Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.
                </p>       
            </div>
        </div>

        <div className='block-five-college'>
            <div className='block-five-background'></div>
            <div className='block-five-image-container'>
                <div className='image-one'>
                    <img src={imageThree}></img>
                </div>
                <div className='image-two'>
                    <img src={imageFour}></img>
                </div>
            </div>
            <div className='image-three'>
                <img src={imageFive}></img>
            </div>
        </div>

        <div className='text-block-container'>
            <div className='block-five text-block'>
                <h1 className='text-body-1'>We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.</h1>
                <p className='text-body-2'>
                Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.
                </p>       
            </div>
        </div>

        <div className='block-six-college'>
            <div className='block-six-image-container'>
                <div className='image-one'>
                    <img src={imageSix}></img>
                </div>
            </div>
        </div>

        <div className='text-block-container'>
            <div className='block-six text-block'>
                <h1 className='text-body-1'>We’re passionate about what we do, but we’re equally passionate about improving who we are.</h1>
                <p className='text-body-2'>
                We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other. 
                <br/> <br/>Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.
                </p>       
            </div>
        </div>

        <div className='block-seven-college'>
            
            <div className='block-seven-image-background'></div>

            <div className='image-one'>
                <img src={imageSeven}></img>
            </div>

            <div className='image-two'>
                <img src={imageEight}></img>
            </div>

        </div>

        <div className='text-block-container'>
            <div className='block-eight text-block'>
                <h1 className='text-body-1'>We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.</h1>
                <p className='text-body-2'>
                If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.
                </p>       
            </div>
        </div>

        <div className='block-nine-college'>
            
            <div className='image-one'>
                <img src={imageNine}></img>
            </div>

            <div className='info-container'>
                <div className='wrapper'>
                    <h1>We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us. </h1>
                    <a href='#jobs'>See latest jobs &#x3e;</a>                    
                </div>

            </div>

        </div>

    </div>
}