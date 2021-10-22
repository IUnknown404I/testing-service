import React from 'react';
import {BackTop, Col, Collapse, Image, Popover, Row, Skeleton} from "antd";
import {CheckOutlined, MenuOutlined} from "@ant-design/icons";

const { Panel } = Collapse;


const Eco_chap1_theme1_5_1 = () => {
    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0'}}>
                <Col span={20} offset={2}>
                    <h1 className='slide-heading'>Критерии отнесения объектов, оказывающих умеренное негативное воздействие на окружающую среду, к объектам II категории</h1>
                </Col>
            </Row>

            <Row style={{marginTop: '50px'}}>
                <Col offset={0} span={10} className='eco-flex-col' style={{alignItems: 'center'}}>
                    <Image
                        className='epi-img'
                        src={'/out2.jpg'}
                        placeholder={ <Skeleton.Image /> }
                        preview={false}
                        style={{marginTop: '10px', border: 'none', borderRadius: '35%'}}
                    />

                    <div style={{display: 'inline-block', marginLeft: '30px', width: '80%'}}>
                        <h3>А также:</h3>
                        <div>
                            <div>
                                <div className='eco-flex-row'>
                                    <div className='eco-numeration'>1</div>
                                    <div className='eco-numeration-text'>
                                        по производству бумаги и (или) картона, фанеры, древесно-стружечных и древесно-волокнистых плит;
                                    </div>
                                </div>
                                <div className='eco-flex-row'>
                                    <div className='eco-numeration'>2</div>
                                    <div className='eco-numeration-text'>
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>С использованием оборудования для промывки, отбеливания, мерсеризации, окрашивания текстильных волокон и (или) отбеливания, окрашивания текстильной продукции.</span>}
                                            title=''
                                            trigger="hover">
                                            по производству текстильных изделий;
                                        </Popover>
                                    </div>
                                </div>
                            </div>
                            <div className='eco-flex-row'>
                                <div className='eco-numeration'>3</div>
                                <div className='eco-numeration-text'>
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '450px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>С использованием оборудования для дубления, крашения, выделки шкур и кож.</span>}
                                        title=''
                                        trigger="hover">
                                        по производству кожи и изделий из кожи;
                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col span={13} offset={0} >
                    <h1 style={{fontSize: '21px', marginBottom: '20px', textAlign: 'center'}}>Осуществление на объекте, оказывающем негативное воздействие на окружающую среду, хозяйственной и (или) иной деятельности:</h1>

                    <div className='eco-list-style'>
                        <span style={{fontSize: '17px'}}>
                            В целях государственного регулирования выбросов загрязняющих веществ в атмосферный воздух устанавливаются:
                        </span>
                    </div>

                    <div className='eco-list-style'>
                        <Collapse
                            defaultActiveKey={3}
                            expandIconPosition='right'
                            accordion
                        >
                            <Panel header="По обеспечению" key="1" className='eco-panel-style' extra={<MenuOutlined />} showArrow={false}>
                                <>
                                    <p>
                                        <CheckOutlined />&nbsp;&nbsp;
                                        электрической энергией, газом и паром;
                                    </p>
                                    <p>
                                        <CheckOutlined />&nbsp;&nbsp;
                                        паром и горячей водой;
                                    </p>
                                    <p>
                                        <CheckOutlined />&nbsp;&nbsp;
                                        электрической энергией, газом и паром;
                                    </p>
                                </>
                            </Panel>
                            <Panel header="По добыче" key="2" className='eco-panel-style' extra={<MenuOutlined />} showArrow={false}>
                                <>
                                    <p>
                                        <CheckOutlined />&nbsp;&nbsp;
                                        руд и песков драгоценных металлов, оловянных руд, титановых руд, хромовых руд на россыпных месторождениях и (или) их подготовке;
                                    </p>
                                    <p>
                                        <CheckOutlined />&nbsp;&nbsp;
                                        руд и песков драгоценных металлов, оловянных руд, титановых руд, хромовых руд на россыпных месторождениях и (или) их подготовке;
                                    </p>
                                    <p>
                                        <CheckOutlined />&nbsp;&nbsp;
                                        полезных ископаемых;
                                    </p>
                                </>
                            </Panel>
                            <Panel header="По металлургическому производству с использованием оборудования" key="3" className='eco-panel-style' extra={<MenuOutlined />} showArrow={false}>
                                <>
                                    <p>
                                        <CheckOutlined />&nbsp;&nbsp;
                                        для производства чугуна или стали;
                                    </p>
                                    <p>
                                        <CheckOutlined />&nbsp;&nbsp;
                                        для обработки черных металлов с использованием станов горячей прокатки;
                                    </p>
                                    <p>
                                        <CheckOutlined />&nbsp;&nbsp;
                                        для нанесения защитных распыленных металлических покрытий;
                                    </p>
                                    <p>
                                        <CheckOutlined />&nbsp;&nbsp;
                                        для&nbsp;
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
                                    </p>
                                    <p>
                                        <CheckOutlined />&nbsp;&nbsp;
                                        для литейного производства черных металлов;
                                    </p>
                                </>
                            </Panel>
                            <Panel header="По производству следующей неметаллической минеральной продукции" key="4" className='eco-panel-style' extra={<MenuOutlined />} showArrow={false}>
                                <>
                                    <p>
                                        <CheckOutlined />&nbsp;&nbsp;
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
                                    </p>
                                    <p>
                                        <CheckOutlined />&nbsp;&nbsp;
                                        по&nbsp;
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
                                    </p>
                                    <p>
                                        <CheckOutlined />&nbsp;&nbsp;
                                        стекло и изделия из стекла, включая стекловолокно;
                                    </p>
                                    <p>
                                        <CheckOutlined />&nbsp;&nbsp;
                                        огнеупорные керамические изделия и строительные керамические материалы;
                                    </p>
                                </>
                            </Panel>
                        </Collapse>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_chap1_theme1_5_1;