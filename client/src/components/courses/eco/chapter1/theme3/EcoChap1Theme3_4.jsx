import React from 'react';
import {BackTop, Col, Collapse, Divider, Image, List, Popover, Row, Skeleton, Tabs} from "antd";
import NumListCard from "../../../../UI/numListCard/NumListCard";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const EcoChap1Theme3_4 = () => {
    const data = [
        <> приказ о назначении ответственных за эксплуатацию &nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>Далее – ГОУ.</span>}
                title=''
                trigger="hover">
                газоочистных установок
            </Popover>;
        </>,
        <> должностные инструкции персонала, обслуживающего ГОУ;</>,
        <> инструкции по эксплуатации и обслуживанию ГОУ;</>,
        <> приказ о порядке ведения журналов учета работы газоочистного оборудования;</>,
        <> приказ руководителя предприятия о порядке перехода в периоды&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>Далее – НМУ.</span>}
                title=''
                trigger="hover">
                неблагоприятных метеорологических условий
            </Popover> на заданные режимы&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>Производствам, цехам, участкам и иным объектам, а также лиц, ответственных за организацию приема оповещения и введения мероприятий по снижению выбросов.</span>}
                title=''
                trigger="hover">
                с указанием ответственных лиц за проведение мероприятий по предприятию
            </Popover>;
        </>,
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0'}}>
                <Col span={20} offset={2}>
                    <h1 className='slide-heading'>Документация по обращению с отходами</h1>
                </Col>
            </Row>

            <Row>
                <Col offset={0} span={24}>
                    <Tabs type="card" size='large' className='eco-tab-list' centered animated>
                        <TabPane tab="Основные документы по обращению с отходами" key="1">
                            <>
                                <Row>
                                    <Col span={24} style={{fontSize: '16px', textAlign: 'center', marginTop: '15px'}}>
                                        <h2 style={{marginBottom: '20px'}}>К числу основных документов в области обращения с отходами на предприятии относятся:</h2>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={14}>
                                        <h2 style={{marginBottom: '20px'}}>Проекты нормативов образования отходов и лимитов на их размещение, оформленные по установленным образцам и включающие следующие разделы:</h2>
                                        <div className='eco-flex-row'>
                                            <div style={{display: 'flex', flexDirection: 'column', width: '40%', alignContent: 'center'}}>
                                                <NumListCard num={1} text='титульный лист'/>
                                                <NumListCard num={2} text='содержание' popover='В котором приводятся наименование и последовательность расположения разделов ПНООЛР с указанием номеров страниц'/>
                                                <NumListCard num={3} text='аннотация'/>
                                                <NumListCard num={4} text='сведения об отходах'/>
                                            </div>

                                            <div style={{display: 'flex', flexDirection: 'column', width: '60%'}}>
                                                <NumListCard num={5} text='общие сведения об индивидуальном предпринимателе или юридическом лице'/>
                                                <NumListCard num={6} text='сведения о хозяйственной и иной деятельности' popover='В результате осуществления которой образуются отходы'/>
                                                <NumListCard num={7} text='расчёт и обоснование годовых нормативов образования отходов'/>
                                                <NumListCard num={8} text='схема операционного движения отходов'/>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col offset={1} span={8}>
                                        <div className='eco-img-div-item extra'>
                                            <Image
                                                className='eco-img-ico'
                                                preview = {false}
                                                src={'/images/document.jpg'}
                                                placeholder={
                                                    <Skeleton.Image />
                                                }
                                            />
                                            <span style={{fontSize: '16px'}}>
                                                Документы по паспортизации отходов
                                            </span>
                                        </div>
                                        <div className='eco-img-div-item extra'>
                                            <Image
                                                className='eco-img-ico'
                                                preview = {false}
                                                src={'/images/cert.jpg'}
                                                placeholder={
                                                    <Skeleton.Image />
                                                }
                                            />
                                            <span style={{fontSize: '16px'}}>
                                                Копии аттестатов аккредитации лабораторий, выполнявших анализы и исследования для паспортизации отходов
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </>
                        </TabPane>
                        <TabPane tab="Документы по организации экологической службы " key="2">
                            <>
                                <Row>
                                    <Col span={24} style={{fontSize: '16px', textAlign: 'center', marginTop: '15px'}}>
                                        <h2 style={{marginBottom: '50px'}}>Экологическая служба предприятия организовывается на основании:</h2>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col offset={1} span={10} style={{borderLeft: '2px solid rgb(157,217,184)', borderBottomLeftRadius: '10px'}}>
                                        <h1 className='eco-col-header' style={{background: 'rgb(157,217,184)', borderRadius: 'unset'}}>Приказы</h1>
                                        <div className='eco-div-padding'>
                                            <div style={{marginLeft: '5px', fontSize: '19px'}}>
                                                <div>
                                                    - приказа руководителя предприятия о создании экологической службы предприятия;
                                                </div> <br/>
                                                <div>
                                                    - приказа руководителя предприятия о назначении руководителя&nbsp;
                                                    <Popover
                                                        color={"azure"}
                                                        overlayStyle={{width: 'fit-content', maxWidth: '1000px'}}
                                                        className='pop_text'
                                                        style={{maxWidth: '200px'}}
                                                        content={<span>Эколога предприятия</span>}
                                                        title=''
                                                        trigger="hover">
                                                        экологической службы предприятия
                                                    </Popover> и утверждении Положения об экологической службе;
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col offset={1} span={10} style={{borderRight: '2px solid rgb(157,217,184)', borderBottomRightRadius: '10px'}}>
                                        <h1 className='eco-col-header' style={{background: 'rgb(157,217,184)', borderRadius: 'unset'}}>Документы и инструкции</h1>
                                        <div className='eco-div-padding' >
                                            <div style={{marginLeft: '5px', fontSize: '19px'}}>
                                                <div>
                                                    - должностных инструкций сотрудников&nbsp;
                                                    <Popover
                                                        color={"azure"}
                                                        overlayStyle={{width: 'fit-content', maxWidth: '1000px'}}
                                                        className='pop_text'
                                                        style={{maxWidth: '200px'}}
                                                        content={<span>Эколога предприятия</span>}
                                                        title=''
                                                        trigger="hover">
                                                        экологической службы предприятия
                                                    </Popover>;
                                                </div> <br/>
                                                <div>
                                                    - документов, подтверждающих необходимую профессиональную подготовку или переподготовку сотрудников экологической службы предприятия;
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </>
                        </TabPane>
                        <TabPane tab="Организационные документы производственного экологического контроля" key="3">
                            <>
                                <Row>
                                    <Col span={24} style={{fontSize: '16px', textAlign: 'center', marginTop: '15px'}}>
                                        <h2 style={{marginBottom: '20px'}}>Набор документов зависит от предприятия и в общем случае включает в себя:</h2>
                                    </Col>
                                    <Col offset={1} span={22}>
                                        <div className='eco-flex-row' style={{justifyContent: 'space-around', fontSize: '18px'}}>
                                            <NumListCard num={1} text='схема операционного движения отходов'/>
                                            <NumListCard num={2} text='схема операционного движения отходов'/>
                                        </div>
                                    </Col>
                                </Row>

                                <Divider style={{margin: '0 0 0 0', background: 'forestgreen'}}/>

                                <Row>
                                    <Col offset={0} span={11}>
                                        <fieldset className='fieldset-eco'>
                                            <legend>В части охраны атмосферного воздуха</legend>

                                            <List
                                                className='borderless'
                                                size="medium"
                                                bordered
                                                dataSource={data}
                                                renderItem={item => <List.Item className='special-list-item'>{item}</List.Item>}
                                            />
                                        </fieldset>
                                    </Col>

                                    <Col offset={0} span={13} style={{marginTop: '50px'}}>
                                        <div>
                                            <Collapse
                                                defaultActiveKey={2}
                                                expandIconPosition='right'
                                                accordion
                                            >
                                                <Panel header={<span style={{fontSize: '18px'}}>В части охраны поверхностных вод и рационального водопользования</span>} key="1" className='eco-panel-style' showArrow>
                                                    <div className='divChildren-margin-bottom-15'>
                                                        <div>- Приказ о назначении лица, ответственного за эксплуатацию и обслуживание сетей водных коммуникаций и очистных сооружений</div>
                                                        <div>- Должностные инструкции для персонала, обслуживающего водные коммуникации и очистные сооружения</div>
                                                        <div>- Должностные инструкции для персонала, обслуживающего контрольно-измерительную аппаратуру по определению качества забираемой и сбрасываемой в водный объект воды</div>
                                                        <div>- Порядок проведения государственной аттестации контрольно-измерительной аппаратуры по определению качества забираемой и сбрасываемой в водный объект воды</div>
                                                        <div>- Производственные инструкции завода-изготовителя по эксплуатации оборудования очистных сооружений</div>
                                                        <div>- Инструкции по эксплуатации и обслуживанию очистных сооружений</div>
                                                    </div>
                                                </Panel>
                                                <Panel header={<span style={{fontSize: '18px'}}>В части обращения с отходами</span>} key="2" className='eco-panel-style' showArrow>
                                                    <div className='divChildren-margin-bottom-15'>
                                                        <div>- Приказ о назначении лиц, допущенных к работе с опасными отходами</div>
                                                        <div>- Приказ о направлении лиц, допущенных к работе с опасными отходами, на обучение или переподготовку</div>
                                                        <div>- Документы, подтверждающие обучение и переподготовку лиц, допущенных к работе с опасными отходами</div>
                                                        <div>- Приказ о введении в действие инструкции обращения с отходами производства и потребления на территории предприятия</div>
                                                        <div>- Инструкция обращения с отходами производства и потребления на территории предприятия</div>
                                                    </div>
                                                </Panel>
                                            </Collapse>
                                        </div>
                                    </Col>
                                </Row>
                            </>
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </>
    );
};

export default EcoChap1Theme3_4;