import React from 'react';
import {BackTop, Col, Image, List, Popover, Row, Skeleton, Tree} from "antd";
import {CarryOutOutlined, DownOutlined} from "@ant-design/icons";

const Eco7 = () => {
    const treeData = [
        {
            title: 'Объект является:',
            key: '0-0',
            icon: <DownOutlined />,
            children: [
                {
                    title: (
                        <> объектом размещения отходов производства и потребления после полного выполнения работ&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Исключающих негативное воздействие на окружающую среду, до снятия с государственного учета объектов, оказывающих негативное воздействие на окружающую среду.</span>}
                                title=''
                                trigger="hover">
                                по ликвидации и (или) рекультивации
                            </Popover>;
                        </>
                    ),
                    key: '0-0-0',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <>
                            объектом обработки отходов производства и потребления IV и V классов опасности.;
                        </>
                    ),
                    key: '0-0-1',
                    switcherIcon: <CarryOutOutlined />,
                },
            ],
        },
        {
            title: 'Осуществление на объекте, оказывающем негативное воздействие на окружающую среду:',
            key: '0-2',
            icon: <DownOutlined />,
            children: [
                {
                    title:
                    <>
                        хозяйственной и (или) иной деятельности на участках недр, предоставленных в пользование;
                    </>,
                    key: '0-2-0',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                    <>
                        хозяйственной и (или) иной деятельности с использованием водных объектов, предоставленных в пользование;
                    </>,
                    key: '0-2-1',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            хозяйственной и (или) иной деятельности по строительству объектов капитального строительства продолжительностью более 6 месяцев;
                        </>,
                    key: '0-2-2',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            хозяйственной и (или) иной деятельности исключительно по добыче подземных вод;
                        </>,
                    key: '0-2-3',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            хозяйственной и (или) иной деятельности;
                        </>,
                    key: '0-2-4',
                    switcherIcon: <CarryOutOutlined />,
                },
            ],
        },
        {
            title: 'Эксплуатация исследовательских ядерных установок нулевой мощности, радиационных источников, содержащих в своем составе только радионуклидные источники четвертой и пятой категорий.',
            key: '0-3',
            switcherIcon: <CarryOutOutlined />,
        },
    ];

    const data = [
        <> -&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>Или наличие на объекте стационарных источников загрязнения окружающей среды, масса загрязняющих веществ в выбросах в атмосферный воздух которых не превышает 10 тонн в год, а также при отсутствии в составе выбросов веществ I и II классов опасности, радиоактивных веществ.</span>}
                title=''
                trigger="hover">
                отсутствие выбросов загрязняющих веществ в атмосферный воздух
            </Popover>;
        </>,
        <> -&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>За исключением сбросов загрязняющих веществ, образующихся в результате использования вод для бытовых нужд, а также отсутствие сбросов загрязняющих веществ в окружающую среду.</span>}
                title=''
                trigger="hover">
                отсутствие сбросов загрязняющих веществ в составе сточных вод
            </Popover>
            &nbsp;в централизованные системы водоотведения, другие сооружения и системы отведения и очистки сточных вод;
        </>,
        <> - Осуществление на объекте деятельности по&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>В том числе для собственных нужд.</span>}
                title=''
                trigger="hover">
                производству
            </Popover>
            &nbsp;электрической энергии и (или) пара и горячей воды;
        </>,
        <> - Использование на объекте оборудования исключительно для&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>Предприятия опытного производства, научно-исследовательские институты, опытно-конструкторские бюро.</span>}
                title=''
                trigger="hover">
                исследований, разработок и испытаний новой продукции и процессов
            </Popover>;
        </>,
        <> - Осуществление на объекте хозяйственной и (или) иной&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>При условии отсутствия выбросов загрязняющих веществ в атмосферный воздух, сбросов загрязняющих веществ в окружающую среду.</span>}
                title=''
                trigger="hover">
                деятельности исключительно по добыче подземных вод
            </Popover>
            &nbsp;или для целей питьевого, хозяйственно-бытового водоснабжения и (или) технического водоснабжения;
        </>,
        <> - Осуществление на&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>Оказывающем негативное воздействие на окружающую среду.</span>}
                title=''
                trigger="hover">
                объекте
            </Popover>
            &nbsp;хозяйственной и (или) иной деятельности по строительству объектов капитального строительства продолжительностью менее 6 месяцев;
        </>,
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0'}}>
                <Col span={20} offset={2} style={{textAlign: 'center'}}>
                    <h1 style={{fontSize: '25px', fontWeight: 'bold', textDecoration: 'underline'}}>Критерии отнесения объектов, оказывающих незначительное негативное и негативное воздействие на окружающую среду</h1>
                </Col>
            </Row>

            <Row>
                <Col offset={3} span={18} className='epi-img-col'>
                    <Image
                        className='epi-img'
                        src={'/out1.jpg'}
                        placeholder={
                            <Skeleton.Image />
                        }
                        style={{marginTop: '10px', maxWidth: '1000px'}}
                    />
                </Col>
            </Row>
            <Row style={{marginTop: '50px'}}>
                <Col span={8} offset={1}>
                    <h1 style={{fontSize: '20px', marginBottom: '20px', textAlign: 'center'}}>Критерии к объектам III категории:</h1>

                    <div className='eco-list-style'>
                        <Tree
                            className='eco-list-style-tree'
                            showLine = {true}
                            defaultExpandedKeys = {['0-2']}
                            treeData = {treeData}
                            switcherIcon={<DownOutlined />}
                            icon={<CarryOutOutlined />}
                        />
                    </div>
                </Col>

                <Col span={11} offset={2}>
                    <h1 style={{fontSize: '20px', marginBottom: '20px', textAlign: 'center'}}>Критерии к объектам IV категории:</h1>

                    <List
                        className='eco-list-style'
                        size="medium"
                        header={
                            <div style={{fontSize: '18px', marginBottom: '5px'}}>
                                <span style={{marginLeft: '20px'}}> Наличие одновременно следующих критериев: </span>
                            </div>}
                        bordered
                        dataSource={data}
                        renderItem={item => <List.Item className='special-list-item'>{item}</List.Item>}
                    />
                </Col>
            </Row>
        </>
    );
};

export default Eco7;