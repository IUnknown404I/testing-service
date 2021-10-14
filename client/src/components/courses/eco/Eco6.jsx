import React from 'react';
import {BackTop, Col, Image, Popover, Row, Skeleton, Tree} from "antd";
import {CarryOutOutlined, DownOutlined} from "@ant-design/icons";

const Eco6 = () => {
    const treeData = [
        {
            title: '- по обеспечению:',
            key: '0-0',
            icon: <DownOutlined />,
            children: [
                {
                    title: (
                        <>
                            электрической энергией, газом и паром;
                        </>
                    ),
                    key: '0-0-1',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <>
                            паром и горячей водой;
                        </>
                    ),
                    key: '0-0-2',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <>
                            электрической энергией, газом и паром;
                        </>
                    ),
                    key: '0-0-3',
                    switcherIcon: <CarryOutOutlined />,
                },
            ],
        },
        {
            title: '- по добыче:',
            key: '0-2',
            icon: <DownOutlined />,
            children: [
                {
                    title:
                    <>
                        руд и песков драгоценных металлов, оловянных руд, титановых руд, хромовых руд на россыпных месторождениях и (или) их подготовке;
                    </>,
                    key: '0-2-1',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            полезных ископаемых;
                        </>,
                    key: '0-2-3',
                    switcherIcon: <CarryOutOutlined />,
                },
            ],
        },
        {
            title: '- по металлургическому производству с использованием оборудования:',
            key: '0-3',
            icon: <DownOutlined />,
            children: [
                {
                    title:
                        <>
                            для производства чугуна или стали;
                        </>,
                    key: '0-3-0',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            для обработки черных металлов с использованием станов горячей прокатки;
                        </>,
                    key: '0-3-1',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            для нанесения защитных распыленных металлических покрытий;
                        </>,
                    key: '0-3-2',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <> для&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Включая легирование, рафинирование, и разливки цветных металлов.</span>}
                                title=''
                                trigger="hover">
                                плавки
                            </Popover>;
                        </>,
                    key: '0-3-3',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            для литейного производства черных металлов;
                        </>,
                    key: '0-3-4',
                    switcherIcon: <CarryOutOutlined />,
                },
            ],
        },
        {
            title: '- по производству следующей неметаллической минеральной продукции:',
            key: '0-4',
            icon: <DownOutlined />,
            children: [
                {
                    title: (
                        <>
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Кроме огнеупорных керамических изделий и строительных керамических материалов.</span>}
                                title=''
                                trigger="hover">
                                керамические или фарфоровые изделия
                            </Popover>;
                        </>
                    ),
                    key: '0-4-0',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <> по&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>В части, касающейся очистки сточных вод централизованных систем водоотведения (канализации).</span>}
                                title=''
                                trigger="hover">
                                сбору и обработке сточных вод
                            </Popover>;
                        </>
                    ),
                    key: '0-4-1',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <>
                            стекло и изделия из стекла, включая стекловолокно;
                        </>
                    ),
                    key: '0-4-2',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <>
                            огнеупорные керамические изделия и строительные керамические материалы;
                        </>
                    ),
                    key: '0-4-3',
                    switcherIcon: <CarryOutOutlined />,
                },
            ],
        },
        {
            title: '- по производству бумаги и (или) картона, фанеры, древесно-стружечных и древесно-волокнистых плит;',
            key: '0-5',
            switcherIcon: <CarryOutOutlined />,
        },
        {
            title: (
                <> -&nbsp;
                    <Popover
                        color={"azure"}
                        overlayStyle={{maxWidth: '450px'}}
                        className='pop_text'
                        style={{maxWidth: '200px'}}
                        content={<span>С использованием оборудования для промывки, отбеливания, мерсеризации, окрашивания текстильных волокон и (или) отбеливания, окрашивания текстильной продукции.</span>}
                        title=''
                        trigger="hover">
                        по производству текстильных изделий
                    </Popover>;
                </>
            ),
            key: '0-6',
            switcherIcon: <CarryOutOutlined />,
        },
        {
            title: (
                <> -&nbsp;
                    <Popover
                        color={"azure"}
                        overlayStyle={{maxWidth: '450px'}}
                        className='pop_text'
                        style={{maxWidth: '200px'}}
                        content={<span>С использованием оборудования для дубления, крашения, выделки шкур и кож.</span>}
                        title=''
                        trigger="hover">
                        по производству кожи и изделий из кожи
                    </Popover>;
                </>
            ),
            key: '0-7',
            switcherIcon: <CarryOutOutlined />,
        },
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0'}}>
                <Col span={20} offset={2} style={{textAlign: 'center'}}>
                    <h1 style={{fontSize: '25px', fontWeight: 'bold', textDecoration: 'underline'}}>Критерии отнесения объектов, оказывающих умеренное негативное воздействие на окружающую среду, к объектам II категории</h1>
                </Col>
            </Row>

            <Row style={{marginTop: '50px'}}>
                <Col offset={0} span={10} className='epi-img-col'>
                    <Image
                        className='epi-img'
                        src={'/out2.jpg'}
                        placeholder={
                            <Skeleton.Image />
                        }
                        style={{marginTop: '10px', border: 'none', borderRadius: '35%'}}
                    />
                </Col>

                <Col span={13} offset={0} >
                    <h1 style={{fontSize: '19px', marginBottom: '20px', textAlign: 'center'}}>Осуществление на объекте, оказывающем негативное воздействие на окружающую среду, хозяйственной и (или) иной деятельности:</h1>

                    <div className='eco-list-style'>
                        <span style={{fontSize: '17px'}}>
                            В целях государственного регулирования выбросов загрязняющих веществ в атмосферный воздух устанавливаются:
                        </span>

                        <Tree
                            className='eco-list-style-tree'
                            showLine = {true}
                            defaultExpandedKeys = {['0-3']}
                            treeData = {treeData}
                            switcherIcon={<DownOutlined />}
                            icon={<CarryOutOutlined />}
                        />
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco6;