import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Box1 from "./Box/Box1";
import Box2 from "./Box/Box2";
import Box3 from "./Box/Box3";
import Box5 from "./Box/Box5";
import Top from './Box/Top';
import End from './Box/End';
import Footer from "../Homepage/Footer";
import { dataInfo } from '../../Data';
import Soon from "./Box/Soon"

const componentMap = {
    Box1: Box1,
    Box2: Box2,
    Box3: Box3,
    Box5: Box5,
};

const Allboxes = () => {
    const { section, pageName } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [section, pageName]);

    const currentIndex = dataInfo.findIndex(page =>
        page.section.replace(/\s+/g, '').toLowerCase() === section &&
        page.page_name.replace(/\s+/g, '').toLowerCase() === pageName
    );

    const nextPage = dataInfo[currentIndex + 1];
    const prevPage = dataInfo[currentIndex - 1];

    if (currentIndex === -1)
        return <Soon />

    const handleNextClick = () => {
        if (nextPage) {
            navigate(`/${nextPage.section.replace(/\s+/g, '').toLowerCase()}/${nextPage.page_name.replace(/\s+/g, '').toLowerCase()}`);
        }
    };

    const handlePrevClick = () => {
        if (prevPage) {
            navigate(`/${prevPage.section.replace(/\s+/g, '').toLowerCase()}/${prevPage.page_name.replace(/\s+/g, '').toLowerCase()}`);
        }
    };

    const currentPageData = dataInfo[currentIndex];

    return (
        <div className='ml-[14%] flex-col'>
            <div className='w-[100%]'>
                <div className='mt-[97px] border-r-2 border-grey-100'>
                    <Top head={currentPageData ? currentPageData.components[0].props.head : ""} onNextClick={handleNextClick} onPrevClick={handlePrevClick} />
                    {currentPageData && currentPageData.components.map((component, index) => {
                        const ComponentToRender = componentMap[component.name];
                        return ComponentToRender ? <ComponentToRender key={index} {...component.props} /> : null;
                    })}
                    <End onNextClick={handleNextClick} onPrevClick={handlePrevClick} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Allboxes;
