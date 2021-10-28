import React from 'react';
import {BackTop, Button, Col, Collapse, Divider, Row, Tree} from "antd";
import {
    BookTwoTone, BulbTwoTone,
    CarryOutOutlined,
    DownOutlined,
    LeftCircleTwoTone,
    LinkOutlined, MenuOutlined,
    ProfileTwoTone,
    PushpinTwoTone
} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import {FirstChapter, SecondChapter} from "./nav/nav";

const { Panel } = Collapse;

const CourseSkeleton = ({currentChapter, setChapter, themes, setCurrentPage, setSwitchToSkeleton, setSwitchToGlossary, setSwitchToLiterature, setSwitchToMaterials}) => {
    const clearSwitches = () => {
        setSwitchToGlossary(false);
        setSwitchToLiterature(false);
        setSwitchToMaterials(false);
        setSwitchToSkeleton(false);
    }

    const verifyChapterChange = (chap, theme, page) => {
        if(currentChapter.id !== chap.id) {
            setChapter(chap, chap.themes[theme][page], chap.titles[theme][page]);
            return false;
        }
        return true;
    }

    const treeData = [
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 1</span>,
            key: '0-0',
            children: [
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,0)) {
                                    setCurrentPage(themes[0][0])
                                }
                                clearSwitches();
                            }}
                        >
                            Основные принципы охраны окружающей среды
                        </span>
                    ),
                    key: '0-0-0',
                    switcherIcon: <>1.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,1)) {
                                    setCurrentPage(themes[0][1])
                                }
                                clearSwitches();
                            }}
                        >
                            Общие требования к хозяйственной и иной деятельности, оказывающей вредное воздействие на атмосферный воздух
                        </span>
                    ),
                    key: '0-0-1',
                    switcherIcon: <>2.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,2)) {
                                    setCurrentPage(themes[0][2])
                                }
                                clearSwitches();
                            }}
                        >
                            Основные принципы государственного управления в области охраны атмосферного воздуха
                        </span>
                    ),
                    key: '0-0-2',
                    switcherIcon: <>3.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,3)) {
                                    setCurrentPage(themes[0][3])
                                }
                                clearSwitches();
                            }}
                        >
                            Обеспечение санитарно-эпидемиологического благополучия населения
                        </span>
                    ),
                    key: '0-0-3',
                    switcherIcon: <>4.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,4)) {
                                    setCurrentPage(themes[0][4])
                                }
                                clearSwitches();
                            }}
                        >
                            Права и обязанности граждан, индивидуальных предпринимателей и юридических лиц
                        </span>
                    ),
                    key: '0-0-4',
                    switcherIcon: <>5.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,5)) {
                                    setCurrentPage(themes[0][5])
                                }
                                clearSwitches();
                            }}
                        >
                            Критерии отнесения объектов, оказывающих значительное негативное воздействие на окружающую среду и относящихся к областям применения наилучших доступных технологий, к объектам I категории
                        </span>
                    ),
                    key: '0-0-5',
                    switcherIcon: <>6.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,6)) {
                                    setCurrentPage(themes[0][6])
                                }
                                clearSwitches();
                            }}
                        >
                            Критерии отнесения объектов, оказывающих умеренное негативное воздействие на окружающую среду, к объектам II категории
                        </span>
                    ),
                    key: '0-0-6',
                    switcherIcon: <>7.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,7)) {
                                    setCurrentPage(themes[0][7])
                                }
                                clearSwitches();
                            }}
                        >
                            Критерии отнесения объектов, оказывающих незначительное негативное и негативное воздействие на окружающую среду
                        </span>
                    ),
                    key: '0-0-7',
                    switcherIcon: <>8.</>,
                },
            ],
        },
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 2</span>,
            key: '0-1',
            children: [
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),1,0)) {
                                    setCurrentPage(themes[1][0])
                                }
                                clearSwitches();
                            }}
                        >
                            Права должностных лиц органов государственного экологического контроля
                        </span>
                    ),
                    key: '0-1-0',
                    switcherIcon: <></>,
                },
            ],
        },
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 3</span>,
            key: '0-2',
            children: [
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),2,0)) {
                                    setCurrentPage(themes[2][0])
                                }
                                clearSwitches();
                            }}
                        >
                            Организационно-распорядительные документы по вопросам охраны окружающей среды на предприятии
                        </span>
                    ),
                    key: '0-2-0',
                    switcherIcon: <>1.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),2,1)) {
                                    setCurrentPage(themes[2][1])
                                }
                                clearSwitches();
                            }}
                        >
                            Документация по охране атмосферного воздуха
                        </span>
                    ),
                    key: '0-2-1',
                    switcherIcon: <>2.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),2,2)) {
                                    setCurrentPage(themes[2][2])
                                }
                                clearSwitches();
                            }}
                        >
                            Документация по охране водных объектов
                        </span>
                    ),
                    key: '0-2-2',
                    switcherIcon: <>3.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),2,3)) {
                                    setCurrentPage(themes[2][3])
                                }
                                clearSwitches();
                            }}
                        >
                            Документация по обращению с отходами
                        </span>
                    ),
                    key: '0-2-3',
                    switcherIcon: <>4.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),2,4)) {
                                    setCurrentPage(themes[2][4])
                                }
                                clearSwitches();
                            }}
                        >
                            Государственная статистическая отчетность
                        </span>
                    ),
                    key: '0-2-4',
                    switcherIcon: <>5.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),2,5)) {
                                    setCurrentPage(themes[2][5])
                                }
                                clearSwitches();
                            }}
                        >
                            Статистическая отчетность предприятия
                        </span>
                    ),
                    key: '0-2-5',
                    switcherIcon: <>6.</>,
                },
            ],
        },
    ];
    const treeData1 = [
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 1</span>,
            key: '0-0',
            children: [
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new SecondChapter(),0,0)) {
                                    setCurrentPage(themes[0][0])
                                }
                                clearSwitches();
                            }}
                        >
                            Производственный экологический контроль
                        </span>
                    ),
                    key: '0-0-0',
                    switcherIcon: <>1.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new SecondChapter(),0,1)) {
                                    setCurrentPage(themes[0][1])
                                }
                                clearSwitches();
                            }}
                        >
                            Основные требования к организации и осуществлению производственного экологического контроля
                        </span>
                    ),
                    key: '0-0-1',
                    switcherIcon: <>2.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new SecondChapter(),0,2)) {
                                    setCurrentPage(themes[0][2])
                                }
                                clearSwitches();
                            }}
                        >
                            Категории экологического контроля
                        </span>
                    ),
                    key: '0-0-2',
                    switcherIcon: <>3.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new SecondChapter(),0,3)) {
                                    setCurrentPage(themes[0][3])
                                }
                                clearSwitches();
                            }}
                        >
                            Проведение производственного экологического контроля
                        </span>
                    ),
                    key: '0-0-3',
                    switcherIcon: <>4.</>,
                },
            ]
        },
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 2</span>,
            key: '0-1',
            children: [
                {
                    title: (
                        <span
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 1, 0)) {
                                    setCurrentPage(themes[1][0])
                                }
                                clearSwitches();
                            }}
                        >
                            Требования, предъявляемые законодательством в области охраны атмосферного воздуха
                        </span>
                    ),
                    key: '0-1-0',
                    switcherIcon: <>1.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 1, 1)) {
                                    setCurrentPage(themes[1][1])
                                }
                                clearSwitches();
                            }}
                        >
                            Требования охраны атмосферного воздуха при проектировании, размещении, строительстве, реконструкции и эксплуатации объектов хозяйственной и иной деятельности
                        </span>
                    ),
                    key: '0-1-1',
                    switcherIcon: <>2.</>,
                },
            ]
        },
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 3</span>,
            key: '0-2',
            children: [
                {
                    title: (
                        <span
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 2, 0)) {
                                    setCurrentPage(themes[2][0])
                                }
                                clearSwitches();
                            }}
                        >
                            Требования, предъявляемые законодательством в области рационального использования и охраны водных объектов
                        </span>
                    ),
                    key: '0-2-1',
                    switcherIcon: <></>,
                },
            ]
        },
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 4</span>,
            key: '0-3',
            children: [
                {
                    title: (
                        <span
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 3, 0)) {
                                    setCurrentPage(themes[3][0])
                                }
                                clearSwitches();
                            }}
                        >
                            Порядок отнесения отходов к классу опасности для окружающей среды. Паспортизация отходов I-IV класса опасности
                        </span>
                    ),
                    key: '0-3-1',
                    switcherIcon: <>1.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 3, 1)) {
                                    setCurrentPage(themes[3][1])
                                }
                                clearSwitches();
                            }}
                        >
                            Требования к лицам, которые допущены к сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I - IV классов опасности
                        </span>
                    ),
                    key: '0-3-2',
                    switcherIcon: <>2.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 3, 2)) {
                                    setCurrentPage(themes[3][2])
                                }
                                clearSwitches();
                            }}
                        >
                            Полномочия органов местного самоуправления в области обращения с твердыми коммунальными отходами (в ред. Федерального закона от 31.12.2017 N 503-ФЗ)
                        </span>
                    ),
                    key: '0-3-3',
                    switcherIcon: <>3.</>,
                },
            ]
        },
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 5</span>,
            key: '0-4',
            children: [
                {
                    title: (
                        <span
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 4, 0)) {
                                    setCurrentPage(themes[4][0])
                                }
                                clearSwitches();
                            }}
                        >
                            Общие вопросы исчисления и уплаты платы за негативное воздействие на окружающую среду
                        </span>
                    ),
                    key: '0-4-1',
                    switcherIcon: <>1.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 4, 1)) {
                                    setCurrentPage(themes[4][1])
                                }
                                clearSwitches();
                            }}
                        >
                            Плата за размещение отходов и выбросы загрязняющих веществ в атмосферный воздух
                        </span>
                    ),
                    key: '0-4-2',
                    switcherIcon: <>2.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 4, 2)) {
                                    setCurrentPage(themes[4][2])
                                }
                                clearSwitches();
                            }}
                        >
                            Коэффициенты к ставкам платы
                        </span>
                    ),
                    key: '0-4-3',
                    switcherIcon: <>3.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 4, 3)) {
                                    setCurrentPage(themes[4][3])
                                }
                                clearSwitches();
                            }}
                        >
                            Правила исчисления и взимания платы за негативное воздействие на окружающую среду
                        </span>
                    ),
                    key: '0-4-4',
                    switcherIcon: <>4.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 4, 4)) {
                                    setCurrentPage(themes[4][4])
                                }
                                clearSwitches();
                            }}
                        >
                            Исчисление и взимание платы за негативное воздействие на окружающую среду
                        </span>
                    ),
                    key: '0-4-5',
                    switcherIcon: <>5.</>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 4, 5)) {
                                    setCurrentPage(themes[4][5])
                                }
                                clearSwitches();
                            }}
                        >
                            Административная ответственность
                        </span>
                    ),
                    key: '0-4-6',
                    switcherIcon: <>6.</>,
                },
            ]
        },
    ];

    const treeData3 = [
        {
            title: <div className='eco-skeleton-tree-chapter'>Внешние ресурсы</div>,
            key: '1',
            icon: <DownOutlined/>,
            children: [
                {
                    title: (
                        <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p1-2" }} target="_blank">
                            Отходы I-V классов опасности
                        </NavLink>
                    ),
                    key: '0-1-1',
                    switcherIcon: <LinkOutlined />,
                },
                {
                    title: (
                        <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p2" }} target="_blank">
                            Паспортизация отходов
                        </NavLink>
                    ),
                    key: '0-1-2',
                    switcherIcon: <LinkOutlined />,
                },
                {
                    title: (
                        <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p3" }} target="_blank">
                            Оператор по обращению с отходами
                        </NavLink>
                    ),
                    key: '0-1-3',
                    switcherIcon: <LinkOutlined />,
                },
                {
                    title: (
                        <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p4" }} target="_blank">
                            Обращение с отходами I, II классов
                        </NavLink>
                    ),
                    key: '0-1-4',
                    switcherIcon: <LinkOutlined />,
                },
                {
                    title: (
                        <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p5" }} target="_blank">
                            Особенности обращения с отходами I, II классов
                        </NavLink>
                    ),
                    key: '0-1-5',
                    switcherIcon: <LinkOutlined />,
                },
                {
                    title: (
                        <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p6" }} target="_blank">
                            Требования к обращению с отходами
                        </NavLink>
                    ),
                    key: '0-1-6',
                    switcherIcon: <LinkOutlined />,
                },
                {
                    title: (
                        <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p7" }} target="_blank">
                            Порядок учёта, транспортирования отходов
                        </NavLink>
                    ),
                    key: '0-1-7',
                    switcherIcon: <LinkOutlined />,
                },
            ]
        },
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 40px'}}>
                <Col span={2} offset={1} style={{textAlign: 'center'}}>
                    <Button
                        onClick={() => {setSwitchToSkeleton(false)}}
                        icon={<LeftCircleTwoTone />}
                        className='eco-pagination-but'
                        size="large"
                    >
                        К курсу
                    </Button>
                </Col>
                <Col span={16} offset={1} style={{textAlign: 'center'}}>
                    <h1 style={{fontSize: '27px', fontWeight: 'bold', color: 'darkblue'}}>Структура курса</h1>
                </Col>
                <Col span={3} offset={0} style={{textAlign: 'center'}}>
                   <div>
                       <BulbTwoTone />
                       Нажимайте на элементы для перехода
                   </div>
                </Col>
            </Row>

            <Row>
                <Col offset={1} span={22}>
                    <Collapse
                        accordion={true}
                        expandIconPosition='right'
                    >
                        <Panel header="Первый раздел" key="1" className='eco-skeleton-panel-style' extra={<MenuOutlined />}  showArrow>
                            <>
                                <Tree
                                    className='eco-list-style-tree eco-skeleton-tree-style'
                                    showLine = {true}
                                    defaultExpandedKeys = {['0-0']}
                                    treeData = {treeData}
                                    switcherIcon={<DownOutlined />}
                                    icon={<CarryOutOutlined />}
                                />
                            </>
                        </Panel>
                        <Panel header="Второй раздел" key="2" className='eco-skeleton-panel-style' extra={<MenuOutlined />}  showArrow>
                            <>
                                <Tree
                                    className='eco-list-style-tree eco-skeleton-tree-style'
                                    showLine = {true}
                                    defaultExpandedKeys = {['0-0']}
                                    treeData = {treeData1}
                                    switcherIcon={<DownOutlined />}
                                    icon={<CarryOutOutlined />}
                                />
                            </>
                        </Panel>
                        <Panel header="Ссылки" key="3" className='eco-skeleton-panel-style' extra={<MenuOutlined />}  showArrow>
                            <>
                                <Tree
                                    defaultExpandedKeys = {['1']}
                                    className='eco-list-style-tree eco-skeleton-tree-style'
                                    showLine = {true}
                                    treeData = {treeData3}
                                    switcherIcon={<DownOutlined />}
                                    icon={<CarryOutOutlined />}
                                />
                            </>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>

            <Divider />

            <Row style={{marginTop: '30px'}}>
                <Col offset={0} span={7}>
                    <Button
                        className='skeleton-but'
                        style={{width: '100%'}}
                        onClick={() => {clearSwitches(); setSwitchToGlossary(true)}}
                    >
                        <ProfileTwoTone/> Глоссарий
                    </Button>
                </Col>
                <Col offset={1} span={8}>
                    <Button
                        className='skeleton-but'
                        style={{width: '100%'}}
                        onClick={() => {clearSwitches(); setSwitchToLiterature(true)}}
                    >
                        <BookTwoTone/> Список Литературы
                    </Button>
                </Col>
                <Col offset={1} span={7}>
                    <Button
                        className='skeleton-but'
                        style={{width: '100%'}}
                        onClick={() => {clearSwitches(); setSwitchToMaterials(true)}}
                    >
                        <PushpinTwoTone/> Материалы
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default CourseSkeleton;