import React, {useContext, useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {PageHeader, Layout, Divider, Col, Row, Button} from 'antd';
import {
    LeftCircleTwoTone,
    RightCircleTwoTone,
    KeyOutlined,
} from '@ant-design/icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import EcoSubMenu from "./EcoSubMenu";
import CourseSkeleton from "./CourseSkeleton";
import Literature from "./Literature";
import Glossary from "./Glossary";
import Materials from "./Materials";

import {AuthContext} from "../../../context";
import Test from "../../../pages/Test";
import {getAllTests} from "../../../http/testChooseAPI";
import ResultsModal from "../../UI/resultsModal/ResultsModal";
import {getQuestions} from "../../../http/questionsAPI";
import {useDispatch} from "react-redux";
import {Actions} from "../../../redux/actions";
import {FirstChapter, SecondChapter, ThirdChapter} from "./nav/nav";
import Test_Main from "./tests/Test_Main";
import EcoBreadCrumbs from "./EcoBreadCrumbs";

const { Content, Footer, Sider } = Layout;

const EcoMain = () => {
    const dispatch = useDispatch();
    const {setTestName, setTestId, setTimeLimit} = useContext(AuthContext);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [collapsed, setCollapsed] = useState(true);

    const [currentChapter, setCurrentChapter] = useState(new FirstChapter());
    const [themes, setThemes] = useState(currentChapter.themes);
    const [titles, setTitles] = useState(currentChapter.titles);
    const [switchToChapterTesting, setSwitchToChapterTesting] = useState(false);
    const [chapterForTesting, setChapterForTesting] = useState(1);

    const [currentPage, setCurrentPage] = useState(themes[0][0]);
    const [currentTitle, setCurrentTitle] = useState(titles[0][0]);
    const [currentSubTitle, setCurrentSubTitle] = useState('');
    const [switchToGlossary, setSwitchToGlossary] = useState(false);
    const [switchToLiterature, setSwitchToLiterature] = useState(false);
    const [switchToMaterials, setSwitchToMaterials] = useState(false);
    const [switchToSkeleton, setSwitchToSkeleton] = useState(true);

    const [redirectToTest, setRedirectToTest] = useState(false);
    const [returnFromTest, setReturnFromTest] = useState(false);
    const [testResult, setTestResult] = useState([]);
    const [modal, setModal] = useState(false);

    const getCurrentTheme = () => {
        for(const theme of themes) {
            if(theme.indexOf(currentPage) !== -1) {
                return theme;
            }
        }
    }
    const isLastInThemePage = () => {
        const currentTheme = getCurrentTheme();
        return currentPage ===
            currentTheme[currentTheme.length - 1];
    }
    const isLastPage = () => {
        const currentTheme = getCurrentTheme();
        return currentTheme === themes[themes.length - 1]
            ? currentTheme[currentTheme.length - 1] === currentPage
            : false;
    }

    const changePage = isNext => {
        const currentTheme = getCurrentTheme();

        switch (isNext) {
            case true: {
                if(isLastInThemePage()) {
                    setCurrentPage(themes[themes.indexOf(currentTheme) + 1][0]);
                    break;
                } else {
                    setCurrentPage(currentTheme[currentTheme.indexOf(currentPage) + 1]);
                    break;
                }
            }
            case false: {
                if(currentTheme[0] === currentPage) {
                    setCurrentPage(themes[themes.indexOf(currentTheme) - 1][themes[themes.indexOf(currentTheme) - 1].length - 1]);
                } else {
                    setCurrentPage(currentTheme[currentTheme.indexOf(currentPage) - 1]);
                }
            }
        }
    }

    const changeCurrentTitle = () => {
        if(switchToGlossary) {
            setCurrentTitle('Глоссарий');
            return;
        }
        if(switchToLiterature) {
            setCurrentTitle('Литература');
            return;
        }
        if(switchToMaterials) {
            setCurrentTitle('Материалы');
            return;
        }
        if(switchToSkeleton) {
            setCurrentTitle('Структура курса');
            return;
        }
        if(switchToChapterTesting) {
            setCurrentTitle(`Тестирование по ${chapterForTesting} разделу`);
            return;
        }

        const currentTheme = getCurrentTheme();
        setCurrentTitle(titles[themes.indexOf(currentTheme)][currentTheme.indexOf(currentPage)]);
    }

    const changeCurrentSubTitle = () => {
        if(switchToGlossary || switchToLiterature || switchToMaterials || switchToSkeleton || switchToChapterTesting) {
            setCurrentSubTitle('');
        } else {
            setCurrentSubTitle(`Тема ${themes.indexOf(getCurrentTheme()) + 1}`);
        }
    }

    const fetchTests = async () => {
        const tests = await getAllTests();

        for (const test of tests) {
            if(test.name === 'Eco1') {
                setTestName('Eco1');
                setTestId(test.id);

                await calcTimeLimit(test.id);
            }
        }
    }

    const calcTimeLimit = async (id) => {
        setTimeLimit(Math.floor(Array.from(await getQuestions(id)).length * 1.25 * 60));
    }

    const changeChapter = (isNext) => {
        let chap = null;
        if(isNext) {
            chap = currentChapter.id === 1 ? new SecondChapter() : new ThirdChapter();
        } else {
            chap = currentChapter.id === 3 ? new SecondChapter() : new FirstChapter();
        }

        setCurrentChapter(chap);
        setThemes(chap.themes);
        setTitles(chap.titles);
        setCurrentPage(chap.themes[0][0]);
        setCurrentTitle(chap.titles[0][0]);
    }

    const setChapter = (chapter, page, title) => {
        setCurrentChapter(chapter);
        setThemes(chapter.themes);
        setTitles(chapter.titles);
        setCurrentPage(page);
        setCurrentTitle(title);
    }

    useEffect(() => {
        fetchTests();

        return () => {
    //         setTestId('');
    //         setTestName('');
    //         setTimeLimit(0);
            dispatch(Actions.clearAnswers());
        }
    }, [currentChapter]);

    useEffect(() => {
        window.scrollTo(0,0);

        changeCurrentTitle();
        changeCurrentSubTitle();

        if(switchToChapterTesting) {
            setSelectedKeys([`test-${chapterForTesting}`]);
        } else {
            setSelectedKeys([currentChapter.getSelectedMenuItem(themes, currentPage, switchToGlossary, switchToLiterature, switchToMaterials, switchToSkeleton)]);
        }
    }, [currentPage, switchToGlossary, switchToLiterature, switchToMaterials, switchToSkeleton, switchToChapterTesting, chapterForTesting]);

    useEffect(() => {
        if(testResult.length !== 0) {
            setModal(true);
        }

        if(returnFromTest) {
            setRedirectToTest(false);
            setSwitchToSkeleton(true);
            setTestResult([]);
            dispatch(Actions.clearAnswers());
        }
    }, [testResult, modal]);

    return (
        <Layout style={{ minHeight: '100vh', marginTop: '-92px' }}>

            <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} style={{width: '600px'}}>
                <div className="logo" />
                <EcoSubMenu
                    currentChapter={currentChapter}
                    selectedKeys={selectedKeys}
                    setCurrentPage={setCurrentPage}
                    setSwitchToGlossary={setSwitchToGlossary}
                    setSwitchToLiterature={setSwitchToLiterature}
                    setSwitchToMaterials={setSwitchToMaterials}
                    setSwitchToSkeleton={setSwitchToSkeleton}
                    setSwitchToChapterTesting={setSwitchToChapterTesting}
                    setChapterForTesting={setChapterForTesting}
                    themes={themes}
                    collapsed={collapsed}
                />
            </Sider>

            <Layout className="site-layout">
                <PageHeader
                    style={{background: 'rgb(0,21,41)', color: 'white !important', borderLeft: '1px solid rgb(0,33,64)'}}
                    className="site-page-header"
                    onBack={() => {setSwitchToGlossary(false); setSwitchToLiterature(false); setSwitchToMaterials(false); setSwitchToSkeleton(true)}}
                    title={<span style={{color: 'floralwhite'}}>{currentTitle}</span>}
                    subTitle={<span style={{color: 'floralwhite'}}>{currentSubTitle}</span>}
                />

                {!(switchToGlossary || switchToLiterature || switchToMaterials || switchToSkeleton || redirectToTest || switchToChapterTesting) &&
                    <EcoBreadCrumbs
                        themes={themes}
                        currentChapter={currentChapter}
                        currentTheme={(themes.indexOf(getCurrentTheme()) + 1)}
                        currentTitle={currentTitle}
                        setChapter={setChapter}
                    />
                }

                <Content className='course_content'>
                    <div className="site-layout-background" style={{ padding: 10, minHeight: 360 }}>
                        {switchToGlossary
                            ? <Glossary setSwitchToGlossary={setSwitchToGlossary}/>
                            : switchToLiterature
                                ? <Literature setSwitchToLiterature={setSwitchToLiterature}/>
                                : switchToMaterials
                                    ? <Materials setSwitchToMaterials={setSwitchToMaterials}/>
                                    : switchToSkeleton
                                        ? <CourseSkeleton
                                            currentChapter={currentChapter}
                                            themes={themes}
                                            setCurrentPage={setCurrentPage}
                                            setSwitchToGlossary={setSwitchToGlossary}
                                            setSwitchToLiterature={setSwitchToLiterature}
                                            setSwitchToMaterials={setSwitchToMaterials}
                                            setSwitchToSkeleton={setSwitchToSkeleton}
                                            setSwitchToChapterTesting={setSwitchToChapterTesting}
                                            setChapterForTesting={setChapterForTesting}
                                            setChapter={setChapter}
                                        />
                                        : redirectToTest
                                            ? <Test setTestResult={setTestResult}/>
                                            : switchToChapterTesting
                                                ? <Test_Main
                                                    chapter={chapterForTesting}
                                                    setSwitchToChapterTesting={setSwitchToChapterTesting}
                                                />
                                                : currentPage
                        }

                        {modal
                            ? <ResultsModal setModal={setModal} setReturnFromTest={setReturnFromTest}/>
                            : void(0)
                        }
                    </div>
                </Content>

                {(switchToGlossary || switchToLiterature || switchToMaterials || switchToSkeleton || redirectToTest || switchToChapterTesting)
                    ? void(0)
                    :
                    <Row className='eco-pagination-row'>
                        <Col span={20} offset={2}>
                            <div className='eco-pagination'>
                                <Button
                                    onClick={() => {
                                        if(currentPage===themes[0][0]) {
                                            changeChapter(false)
                                        } else {
                                            changePage(false);
                                        }
                                    }}
                                    icon={<LeftCircleTwoTone/>}
                                    className='eco-pagination-but'
                                    size="large"
                                    disabled={currentPage===themes[0][0] && currentChapter.id === 1}
                                >
                                    {currentPage===themes[0][0] ? 'Предыдущий раздел' : 'Назад'}
                                </Button>

                                {isLastPage() &&
                                <Button
                                    onClick={() => {
                                        setChapterForTesting(currentChapter.id);
                                        setSwitchToChapterTesting(true);
                                    }}
                                    icon={<KeyOutlined  style={{color: 'brown', fontSize: '18px'}}/>}
                                    className='eco-pagination-but'
                                    size="large"
                                >
                                    Проверь себя!
                                </Button>
                                }

                                <Button
                                    onClick={() => {
                                        if(!isLastPage())
                                            changePage(true)
                                        else {
                                            changeChapter(true)
                                            // setRedirectToTest(true);
                                        }
                                    }}
                                    className='eco-pagination-but'
                                    size="large"
                                    disabled={isLastPage() && currentChapter.id === 3}
                                >
                                    {isLastPage() ? 'Следующий раздел' : 'Далее'}
                                    <RightCircleTwoTone />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                }


                <Divider className='footer_divider'/>
                <Footer style={{ textAlign: 'center' }}>НОЦ ООО «Газпром межрегионгаз инжиниринг», 2021.</Footer>
            </Layout>

        </Layout>
    );
};

export default EcoMain;