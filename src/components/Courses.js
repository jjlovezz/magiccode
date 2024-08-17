import React from 'react'
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
//import 'swiper/swiper.scss';
// import Swiper styles
import 'swiper/swiper-bundle.min.css';
import { useTranslation } from 'react-i18next';

function Courses() {
    SwiperCore.use([Autoplay])
    const { t } = useTranslation();

    return (
        <>
            <Container fluid className='coursesBlock'>

                <Container id='cours'>
                    <h2 data-aos="fade-right" className='courses-title-h2 h2pad'>Our courses</h2>
                    <Row className='coursesRow'>

                        <Swiper
                            spaceBetween={40}
                            slidesPerView={3}
                            breakpoints={{

                                0: {
                                    // width: 340,
                                    slidesPerView: 1,
                                },
                                768: {
                                    //   width: 768,
                                    slidesPerView: 2,
                                },
                                1140: {
                                    // width: 1140,
                                    slidesPerView: 3,
                                },

                            }}
                            autoplay={{ delay: 3000 }}

                        >
                            <SwiperSlide>

                                <div className='coursesCard'>
                                    <div className='coursesCardImg coursesScratchJr'>

                                    </div>
                                    <div className='coursesCardContent'>
                                        <div className='CardHeader'>
                                            ScratchJr
                                        </div>

                                        <div className='CardText'>
                                            {t('scratchjr_intro')}
                                        </div>

                                        <div className='CardYears'>5 - 7 years</div>

                                        <div className='CardButton'>
                                            <Link to='/scratchjr'>
                                                <Button className='bigBtn'>Start course</Button>
                                            </Link>
                                        </div>
                                    </div>

                                </div>

                            </SwiperSlide>

                            <SwiperSlide>

                                <div className='coursesCard'>
                                    <div className='coursesCardImg coursesScratch'>

                                    </div>
                                    <div className='coursesCardContent'>
                                        <div className='CardHeader'>
                                            Scratch
                                        </div>
                                        <div className='CardText'>
                                            {t('scratch_intro')}
                                        </div>
                                        <div className='CardYears'>8 - 12 years</div>

                                        <div className='CardButton'>
                                            <Link to='/scratch'>
                                                <Button className='bigBtn'>Start course</Button>
                                            </Link>
                                        </div>
                                    </div>

                                </div>

                            </SwiperSlide>

                            <SwiperSlide>

                                <div className='coursesCard'>
                                    <div className='coursesCardImg coursesPython'>

                                    </div>
                                    <div className='coursesCardContent'>
                                        <div className='CardHeader'>
                                            Python
                                        </div>
                                        <div className='CardText'>
                                            {t('python_intro')}
                                        </div>
                                        <div className='CardYears'>10 - 15 years</div>
                                        <div className='CardButton'>
                                            <Link to='/python'>
                                                <Button className='bigBtn'>Start course</Button>
                                            </Link>
                                        </div>
                                    </div>

                                </div>

                            </SwiperSlide>

                            <SwiperSlide>

                                <div className='coursesCard'>
                                    <div className='coursesCardImg coursesSummer'>

                                    </div>
                                    <div className='coursesCardContent'>
                                        <div className='CardHeader'>
                                            Robotics
                                        </div>
                                        <div className='CardText'>
                                            {/*For two weeks in the summer we will teach children how to create websites and 3D-models, shoot video for a blog and create virtual worlds.*/}
                                            {t('robotics_intro')}
                                        </div>
                                        <div className='CardYears'>8 - 15 years</div>
                                        <div className='CardButton'>
                                            <Link to='/summercamp'>
                                                <Button className='bigBtn'>Start course</Button>
                                            </Link>
                                        </div>
                                    </div>

                                </div>

                            </SwiperSlide>


                        </Swiper>

                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Courses