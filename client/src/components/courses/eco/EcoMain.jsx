import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {PageHeader, Layout, Menu, Divider, Col, Row, Button} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    LeftCircleTwoTone,
    RightCircleTwoTone, AppstoreOutlined,
} from '@ant-design/icons';
import {useHistory, NavLink} from 'react-router-dom';
import Eco1 from "./Eco1";
import Eco2 from "./Eco2";
import Eco3 from "./Eco3";
import Eco4 from "./Eco4";
import Eco5 from "./Eco5";
import Eco6 from "./Eco6";
import Eco7 from "./Eco7";
import Glossary from "./Glossary";


const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const EcoMain = () => {
    const history = useHistory();
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [collapsed, setCollapsed] = useState(true);
    const [pages, setPages] = useState([
        <Eco1/>,
        <Eco2/>,
        <Eco3/>,
        <Eco4/>,
        <Eco5/>,
        <Eco6/>,
        <Eco7/>,
    ]);
    const [titles, setTitles] = useState([
       '1. Федеральный закон от 10.01.2002 N 7-ФЗ "Об охране окружающей среды"',
       '2. Федеральный закон от 04.05.1999 N 96-ФЗ "Об охране атмосферного воздуха"',
       '3. Федеральный закон от 30.03.1999 N 52-ФЗ (ред. от 02.07.2021) "О санитарно-эпидемиологическом благополучии населения"',
       '4. Права и обязанности граждан, индивидуальных предпринимателей и юридических лиц',
       '5. Категорийность объектов по степени негативного воздействия на окружающую среду',
       '5. Категорийность объектов по степени негативного воздействия на окружающую среду',
       '5. Категорийность объектов по степени негативного воздействия на окружающую среду',
    ]);
    const [currentPage, setCurrentPage] = useState(pages[0]);
    const [currentTitle, setCurrentTitle] = useState(titles[0]);
    const [switchToGlossary, setSwitchToGlossary] = useState(false);

    const changePage = isNext => {
        if(isNext && currentPage.type.name !== pages[pages.length - 1].type.name) {
            window.scrollTo(0,0);
            setCurrentPage(pages[pages.indexOf(currentPage) + 1]);
        }
        else if(!isNext && currentPage !== pages[0]) {
            window.scrollTo(0,0);
            setCurrentPage(pages[pages.indexOf(currentPage) - 1]);
        }
    }

    const changeSelectedMenuItem = () => {
        if(!switchToGlossary) {
            switch (currentPage) {
                case pages[0]: return('11');
                case pages[1]: return('12');
                case pages[2]: return('13');
                case pages[3]: return('14');
                case pages[4]: return('15');
                case pages[5]: return('15');
                case pages[6]: return('15');
            }
        } else {
            return '4';
        }
    }

    useEffect(() => {
        setSelectedKeys([changeSelectedMenuItem()]);
        setCurrentTitle(titles[pages.indexOf(currentPage)]);
    }, [currentPage, switchToGlossary]);


    return (
        <Layout style={{ minHeight: '100vh', marginTop: '-92px' }}>

            <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} style={{width: '600px'}}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['11']} mode="inline" selectedKeys={selectedKeys}>
                    <SubMenu key="sub1" icon={<PieChartOutlined />} title="Навигация">
                        <Menu.ItemGroup key="g1" title="Тема 1">
                            <Menu.Item key="11" onClick={() => {setCurrentPage(pages[0]); setSwitchToGlossary(false);}}>Охрана окружающей среды</Menu.Item>
                            <Menu.Item key="12" onClick={() => {setCurrentPage(pages[1]); setSwitchToGlossary(false);}}>Охрана атмосферного воздуха</Menu.Item>
                            <Menu.Item key="13" onClick={() => {setCurrentPage(pages[2]); setSwitchToGlossary(false);}}>Благополучие населения</Menu.Item>
                            <Menu.Item key="14" onClick={() => {setCurrentPage(pages[3]); setSwitchToGlossary(false);}}>Права и обязанности</Menu.Item>
                            <Menu.Item key="15" onClick={() => {setCurrentPage(pages[4]); setSwitchToGlossary(false);}}>Категорийность объектов</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="Тема 2">
                            <Menu.Item key="111">Система государственного управления</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<DesktopOutlined />} title="Вернуться">
                        <Menu.Item onClick={() => {history.push('/profile')}} key="21">Профиль</Menu.Item>
                        <Menu.Item onClick={() => {history.push('/test_choose')}} key="22">Выбор тестов</Menu.Item>
                        <Menu.Item onClick={() => {history.push('/courses')}} key="23">Выбор курсов</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<AppstoreOutlined  />} title="Материалы">
                        <Menu.Item key="31">
                            <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p1-2" }} target="_blank">
                                Отходы I-V классов опасности
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="32">
                            <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p2" }} target="_blank">
                                Паспортизация отходов
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="33">
                            <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p3" }} target="_blank">
                                Оператор по обращению с отходами
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="34">
                            <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p4" }} target="_blank">
                                Обращение с отходами I, II классов
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="35">
                            <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p5" }} target="_blank">
                                Особенности обращения с отходами I, II классов
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="36">
                            <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p6" }} target="_blank">
                                Требования к обращению с отходами
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="37">
                            <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p7" }} target="_blank">
                                Порядок учёта, транспортирования отходов
                            </NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item
                        key="4"
                        icon={<PieChartOutlined />}
                        onClick={() => {
                            setSwitchToGlossary(true);
                        }}
                    >
                        Глоссарий
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout className="site-layout">
                <PageHeader
                    style={{background: 'rgb(0,33,64)', color: 'white !important'}}
                    className="site-page-header"
                    onBack={() => history.push('/courses/eco')}
                    title={<span style={{color: 'floralwhite'}}>{currentTitle}</span>}
                    subTitle={<span style={{color: 'floralwhite'}}>Раздел 1</span>}
                />

                <Content style={{ margin: '10px 0' }}>
                    <div className="site-layout-background" style={{ padding: 10, minHeight: 360 }}>
                        {switchToGlossary
                            ? <Glossary setSwitchToGlossary={setSwitchToGlossary}/>
                            : currentPage
                        }
                    </div>
                </Content>

                {switchToGlossary
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
                                >
                                    Назад
                                </Button>
                                <Button
                                    onClick={() => {changePage(true)}}
                                    icon={<RightCircleTwoTone />}
                                    className='eco-pagination-but' size="large"
                                >
                                    Далее
                                </Button>
                            </div>
                        </Col>
                    </Row>
                }


                <Divider/>
                <Footer style={{ textAlign: 'center' }}>НОЦ ООО «Газпром межрегионгаз инжиниринг», 2021.</Footer>
            </Layout>

        </Layout>
    );
};

export default EcoMain;