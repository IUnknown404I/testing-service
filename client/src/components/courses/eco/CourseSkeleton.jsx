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

const { Panel } = Collapse;

const CourseSkeleton = ({themes, setCurrentPage, setSwitchToSkeleton, setSwitchToGlossary, setSwitchToLiterature, setSwitchToMaterials}) => {
    const clearSwitches = () => {
        setSwitchToGlossary(false);
        setSwitchToLiterature(false);
        setSwitchToMaterials(false);
        setSwitchToSkeleton(false);
    }

    const treeData = [
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 1</span>,
            key: '0-0',
            children: [
                {
                    title: (
                        <span
                            onClick={() => {clearSwitches(); setCurrentPage(themes[0][0])}}
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
                            onClick={() => {clearSwitches(); setCurrentPage(themes[0][1])}}
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
                            onClick={() => {clearSwitches(); setCurrentPage(themes[0][2])}}
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
                            onClick={() => {clearSwitches(); setCurrentPage(themes[0][3])}}
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
                            onClick={() => {clearSwitches(); setCurrentPage(themes[0][4])}}
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
                            onClick={() => {clearSwitches(); setCurrentPage(themes[0][5])}}
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
                            onClick={() => {clearSwitches(); setCurrentPage(themes[0][6])}}
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
                            onClick={() => {clearSwitches(); setCurrentPage(themes[0][7])}}
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
                            onClick={() => {clearSwitches(); setCurrentPage(themes[1][0])}}
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
                            onClick={() => {clearSwitches(); setCurrentPage(themes[2][0])}}
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
                            onClick={() => {clearSwitches(); setCurrentPage(themes[2][1])}}
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
                            onClick={() => {clearSwitches(); setCurrentPage(themes[2][2])}}
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
                            onClick={() => {clearSwitches(); setCurrentPage(themes[2][3])}}
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
                            onClick={() => {clearSwitches(); setCurrentPage(themes[2][4])}}
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
                            onClick={() => {clearSwitches(); setCurrentPage(themes[2][5])}}
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
                        defaultActiveKey={1}
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
                        <Panel header="Ссылки" key="2" className='eco-skeleton-panel-style' extra={<MenuOutlined />}  showArrow>
                            <>
                                <Tree
                                    defaultExpandedKeys = {['1']}
                                    className='eco-list-style-tree eco-skeleton-tree-style'
                                    showLine = {true}
                                    treeData = {treeData1}
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