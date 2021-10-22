import React, {useContext, useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {PageHeader, Layout, Divider, Col, Row, Button} from 'antd';
import {
    LeftCircleTwoTone,
    RightCircleTwoTone,
} from '@ant-design/icons';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import EcoSubMenu from "./EcoSubMenu";
import Eco_chap1_theme1_1 from "./chapter1/theme1/Eco_chap1_theme1_1";
import Eco_chap1_theme1_2 from "./chapter1/theme1/Eco_chap1_theme1_2";
import Eco_chap1_theme1_2_1 from "./chapter1/theme1/Eco_chap1_theme1_2_1";
import Eco_chap1_theme1_3 from "./chapter1/theme1/Eco_chap1_theme1_3";
import Eco_chap1_theme1_4 from "./chapter1/theme1/Eco_chap1_theme1_4";
import Eco_chap1_theme1_5 from "./chapter1/theme1/Eco_chap1_theme1_5";
import Eco_chap1_theme1_5_1 from "./chapter1/theme1/Eco_chap1_theme1_5_1";
import Eco_chap1_theme1_5_2 from "./chapter1/theme1/Eco_chap1_theme1_5_2";
import EcoChap1Theme2_1 from "./chapter1/theme2/Eco_chap1_theme2_1";
import EcoChap1Theme3_1 from "./chapter1/theme3/EcoChap1Theme3_1";
import EcoChap1Theme3_2 from "./chapter1/theme3/EcoChap1Theme3_2";
import EcoChap1Theme3_3 from "./chapter1/theme3/EcoChap1Theme3_3";
import EcoChap1Theme3_4 from "./chapter1/theme3/EcoChap1Theme3_4";
import EcoChap1Theme3_5 from "./chapter1/theme3/EcoChap1Theme3_5";
import EcoChap1Theme3_6 from "./chapter1/theme3/EcoChap1Theme3_6";
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

const { Content, Footer, Sider } = Layout;

const EcoMain = () => {
    const dispatch = useDispatch();
    const {setTestName, setTestId, setTimeLimit} = useContext(AuthContext);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [collapsed, setCollapsed] = useState(true);
    const [themes, setThemes] = useState([
        [
            <Eco_chap1_theme1_1/>,   <Eco_chap1_theme1_2/>,
            <Eco_chap1_theme1_2_1/>, <Eco_chap1_theme1_3/>,
            <Eco_chap1_theme1_4/>,   <Eco_chap1_theme1_5/>,
            <Eco_chap1_theme1_5_1/>, <Eco_chap1_theme1_5_2/>,
        ],
        [
            <EcoChap1Theme2_1/>,
        ],
        [
            <EcoChap1Theme3_1/>, <EcoChap1Theme3_2/>,
            <EcoChap1Theme3_3/>, <EcoChap1Theme3_4/>,
            <EcoChap1Theme3_5/>, <EcoChap1Theme3_6/>,
        ],
    ]);
    const [titles, setTitles] = useState([
        [
            '1.1 Федеральный закон от 10.01.2002 N 7-ФЗ "Об охране окружающей среды"',
            '1.2 Федеральный закон от 04.05.1999 N 96-ФЗ "Об охране атмосферного воздуха"',
            '1.3 Федеральный закон от 04.05.1999 N 96-ФЗ "Об охране атмосферного воздуха"',
            '1.4 Федеральный закон от 30.03.1999 N 52-ФЗ (ред. от 02.07.2021) "О санитарно-эпидемиологическом благополучии населения"',
            '1.5 Права и обязанности граждан, индивидуальных предпринимателей и юридических лиц',
            '1.6 Категорийность объектов по степени негативного воздействия на окружающую среду',
            '1.7 Категорийность объектов по степени негативного воздействия на окружающую среду',
            '1.8 Категорийность объектов по степени негативного воздействия на окружающую среду',
        ],
        [
            '2.1 Система государственного управления в области охраны окружающей среды',
        ],
        [
            '3.1 Организационно-распорядительные документы',
            '3.2 Документация по охране атмосферного воздуха',
            '3.3 Документация по охране водных объектов',
            '3.4 Документация по обращению с отходами',
            '3.5 Государственная статистическая отчетность',
            '3.6 Статистическая отчетность предприятия',
        ],
    ]);
    const [subTitles, setSubTitles] = useState([
        'Раздел 1',
    ]);

    const [currentPage, setCurrentPage] = useState(themes[0][0]);
    const [currentTitle, setCurrentTitle] = useState(titles[0][0]);
    const [currentSubTitle, setCurrentSubTitle] = useState(subTitles[0]);
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

    const getSelectedMenuItem = () => {
        if(!switchToGlossary && !switchToLiterature && !switchToMaterials && !switchToSkeleton) {
            switch (currentPage) {
                case themes[0][0]: return('11');
                case themes[0][1]: return('12');
                case themes[0][2]: return('12');
                case themes[0][3]: return('13');
                case themes[0][4]: return('14');
                case themes[0][5]: return('15');
                case themes[0][6]: return('15');
                case themes[0][7]: return('15');

                case themes[1][0]: return('111');

                case themes[2][0]: return('121');
                case themes[2][1]: return('122');
                case themes[2][2]: return('123');
                case themes[2][3]: return('124');
                case themes[2][4]: return('125');
                case themes[2][5]: return('126');
            }
        } else {
            if (switchToGlossary) return '4';
            if (switchToLiterature) return '5';
            if (switchToMaterials) return '6';
            if (switchToSkeleton) return '7';
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

        const currentTheme = getCurrentTheme();
        setCurrentTitle(titles[themes.indexOf(currentTheme)][currentTheme.indexOf(currentPage)]);
    }

    const changeCurrentSubTitle = () => {
        if(switchToGlossary || switchToLiterature || switchToMaterials || switchToSkeleton) {
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

    useEffect(() => {
        fetchTests();

        return () => {
    //         setTestId('');
    //         setTestName('');
    //         setTimeLimit(0);
            dispatch(Actions.clearAnswers());
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0,0);

        changeCurrentTitle();
        changeCurrentSubTitle();
        setSelectedKeys([getSelectedMenuItem()]);
    }, [currentPage, switchToGlossary, switchToLiterature, switchToMaterials, switchToSkeleton]);

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
                <EcoSubMenu selectedKeys={selectedKeys}
                            setCurrentPage={setCurrentPage}
                            setSwitchToGlossary={setSwitchToGlossary}
                            setSwitchToLiterature={setSwitchToLiterature}
                            setSwitchToMaterials={setSwitchToMaterials}
                            setSwitchToSkeleton={setSwitchToSkeleton}
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
                                            themes={themes}
                                            setCurrentPage={setCurrentPage}
                                            setSwitchToGlossary={setSwitchToGlossary}
                                            setSwitchToLiterature={setSwitchToLiterature}
                                            setSwitchToMaterials={setSwitchToMaterials}
                                            setSwitchToSkeleton={setSwitchToSkeleton}/>
                                        : redirectToTest
                                            ? <Test setTestResult={setTestResult}/>
                                            : currentPage
                        }

                        {modal
                            ? <ResultsModal setModal={setModal} setReturnFromTest={setReturnFromTest}/>
                            : void(0)
                        }
                    </div>
                </Content>

                {(switchToGlossary || switchToLiterature || switchToMaterials || switchToSkeleton || redirectToTest)
                    ? void(0)
                    :
                    <Row className='eco-pagination-row'>
                        <Col span={20} offset={2}>
                            <div className='eco-pagination'>
                                <Button
                                    onClick={() => {changePage(false)}}
                                    icon={<LeftCircleTwoTone />}
                                    className='eco-pagination-but'
                                    size="large"
                                    disabled={currentPage===themes[0][0]}
                                >
                                    {currentPage===themes[0][0] ? 'Предыдущий раздел' : 'Назад'}
                                </Button>
                                <Button
                                    onClick={() => {
                                        if(!isLastPage())
                                            changePage(true)
                                        else {
                                            setRedirectToTest(true);
                                        }
                                    }}
                                    icon={<RightCircleTwoTone />}
                                    className='eco-pagination-but' size="large"
                                >
                                    {isLastPage() ? 'Перейти к тестированию' : 'Далее'}
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