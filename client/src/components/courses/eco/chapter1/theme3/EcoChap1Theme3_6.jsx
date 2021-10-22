import React from 'react';
import {Col, Row, Descriptions, Collapse} from "antd";

const { Panel } = Collapse;

const EcoChap1Theme3_6 = () => {
    return (
        <>
            <Row style={{margin: '20px 0'}}>
                <Col span={20} offset={2}>
                    <h1 className='slide-heading'>Статистическая отчетность предприятия</h1>
                </Col>
            </Row>

            <Row>
                <Col offset={1} span={11} className='eco-description-container'>
                    <Descriptions title="Форма № 2-ОС ">
                        <Descriptions.Item label="Название " span={4}>«Сведения о выполнении водоохранных работ на водных объектах»</Descriptions.Item>
                        <Descriptions.Item label="Отчетный период " span={4}>календарный год</Descriptions.Item>
                        <Descriptions.Item label="Срок представления " span={4}>до 25 января после отчетного периода</Descriptions.Item>
                        <Descriptions.Item label="Представляют " span={4}>
                            юридические лица, их обособленные подразделения, осуществляющие водоохранные работы на водных объектах. Перечень юридических лиц определяется территориальным органом МПР и экологии РФ
                        </Descriptions.Item>
                        <Descriptions.Item label="Предоставляют" span={4}>
                            территориальному органу МПР и экологии РФ
                        </Descriptions.Item>
                    </Descriptions>
                </Col>

                <Col offset={0} span={11} className='eco-description-container' style={{marginLeft: '2px'}}>
                    <Descriptions title="Форма № 4-ОС">
                        <Descriptions.Item label="Название " span={4}>«Сведения о текущих затратах на охрану окружающей среды и экологических платежах»</Descriptions.Item>
                        <Descriptions.Item label="Отчетный период " span={4}>календарный год</Descriptions.Item>
                        <Descriptions.Item label="Срок представления " span={4}>до 25 января после отчетного периода</Descriptions.Item>
                        <Descriptions.Item label="Представляют " span={4}>
                            юридические лица, имеющие очистные сооружения, осуществляющие природоохранные мероприятия, а также производящие плату за негативное воздействие на окружающую среду
                        </Descriptions.Item>
                        <Descriptions.Item label="Предоставляют" span={4}>
                            территориальному органу Росстата в субъекте РФ
                        </Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>

            <Row style={{marginTop: '25px'}}>
                <Col offset={1} span={22}>
                    <Collapse
                        defaultActiveKey={1}
                        expandIconPosition='right'
                        accordion
                    >
                        <Panel style={{textAlign: 'center', background: 'rgba(60,179,113, 0.4)'}} header={<span style={{fontSize: '18px', fontWeight: 'bold'}}>Форма № 2-ТП (водхоз)</span>} key="1" className='eco-panel-style' showArrow>
                            <div className='eco-description-container'>
                                <Descriptions>
                                    <Descriptions.Item label="Название " span={4}>«Сведения об использовании воды»</Descriptions.Item>
                                    <Descriptions.Item label="Отчетный период ">календарный год</Descriptions.Item>
                                    <Descriptions.Item label="Срок представления " span={2}>до 22 января после отчетного периода</Descriptions.Item>
                                    <Descriptions.Item label="Критерии " span={4}>
                                        <div style={{textAlign: 'left'}}>
                                            - осуществляющие сброс сточных вод;
                                            <br/>- осуществляющие забор из водных объектов 50 м3 воды в сутки и более;
                                            <br/>- получающие воду из систем водоснабжения объемом 300 м3 и более в сутки для любых видов использования воды;
                                            <br/>- получающие воду из систем водоснабжения, осуществляющие забор воды из водных объектов объемом 150 м3 и более в сутки для производства сельскохозяйственной продукции;
                                            <br/>- имеющие системы оборотного водоснабжения общей мощностью 5000 м3 и более в сутки независимо от объема забираемой воды.
                                        </div>
                                    </Descriptions.Item>
                                </Descriptions>
                            </div>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        </>
    );
};

export default EcoChap1Theme3_6;