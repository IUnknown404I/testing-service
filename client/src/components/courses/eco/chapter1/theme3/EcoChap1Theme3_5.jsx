import React from 'react';
import {Col, Image, Row, Skeleton} from "antd";
import NumListCard from "../../../../UI/numListCard/NumListCard";

const EcoChap1Theme3_5 = () => {
    return (
        <>
            <Row style={{margin: '20px 0 30px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Государственная статистическая отчетность</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 22, offset: 1}} lg={{span: 16, offset: 4}} style={{marginTop: '10px'}}>
                    <div className='eco-img-div-item' style={{background: 'white'}}>
                        <Image
                            className='eco-img-ico'
                            preview = {false}
                            src={'/images/gosref.png'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <span>
                            В соответствие с Российским законодательством юридические лица обязаны представлять в органы государственной статистики сведения о деятельности <strong style={{fontWeight: 'bold'}}>по формам федерального государственного статистического наблюдения.</strong>
                        </span>
                    </div>
                </Col>
                <Col md={{span: 24, offset: 0}} lg={{span: 22, offset: 1}} style={{marginTop: '30px'}}>
                    <div style={{fontSize: '21px', marginBottom: '10px'}}>
                        <span>
                            <strong style={{fontWeight: 'bold'}}>Раздел «Природные ресурсы и охрана окружающей среды» включает в себя</strong> следующие формы государственного статистического наблюдения:
                        </span>
                    </div>
                </Col>
            </Row>

            <Row style={{marginTop: '10px'}}>
                <Col md={{span: 22, offset: 1}} lg={{span: 11, offset: 1}}>
                    <div>
                        <NumListCard num={1} text='№ 18-КС «Сведения об инвестициях в основной капитал, направленных на охрану окружающей среды и рациональное использование природных ресурсов»' popover='В данной форме отражаются объемы инвестиций (с вводом в действие мощностей), направленные на охрану и рациональное использование природных ресурсов, строительство предприятий по утилизации, обезвреживанию и захоронению отходов, установок для утилизации и переработки отходов, а также на организацию заповедников и других природоохранных территорий'/>
                        <NumListCard num={2} text='№ 2-ОС «Сведения о выполнении водоохранных работ на водных объектах»' popover='В отчете отражаются водоохранные работы, осуществляемые за счет любых источников финансирования. Форма №2-ос составляется юридическими лицами, их обособленными подразделениями, осуществляющими водоохранные работы на водных объектах, а также индивидуальными предпринимателями, имеющими лицензию на водопользование и осуществляющими водоохранные работы на водных объектах. Отчеты составляются по каждому водному объекту, на котором осуществляются водоохранные работы'/>
                        <NumListCard num={3} text='№ 4-ОС «Сведения о текущих затратах на охрану природы, экологических и природоресурсных платежах»' popover='Форма заполняется на основании данных первичного учета фактических затрат на охрану окружающей природной среды, экологических и природоресурсных платежей. Данные представляются в тысячах рублей с одним знаком после запятой'/>
                    </div>
                </Col>
                <Col md={{span: 22, offset: 1}} lg={{span: 10, offset: 1}}>
                    <div className='eco-flex-col'>
                        <NumListCard num={4} text='№ 2-ТП (воздух) «Сведения об охране атмосферного воздуха»' popover='Форму № 2-тп (воздух) представляют предприятия и их обособленные подразделения, имеющие стационарные источники выбросов вредных (загрязняющих) веществ в атмосферный воздух. Сюда же включаются котельные, состоящие на балансе жилищно-коммунальных хозяйств, транспортных и других организаций. От¬чет не составляется предприятиями, выбросы загрязняющих веществ в атмосферу которых не превышают установленного норматива предельно допустимого выброса (ПДВ) и составляет 100 тонн в год и менее'/>
                        <NumListCard num={5} text='№ 2-ТП (водхоз) «Сведения об использовании воды»' popover='Форма N 2-тп (водхоз) представляется юридическими лицами и их обособленными подразделениями, осуществляющими водопользование. Отчет по форме № 2-тп (водхоз) включает в себя следующие таблицы:
                                                                                                            •	Забрано из природных источников, получено от других предприятий (организаций), использовано и передано воды;
                                                                                                            •	Водоотведение;
                                                                                                            •	Другие показатели
'                                                                                                       />
                        <NumListCard num={6} text='№ 2-ТП (отходы) «Сведения об образовании, использовании, обезвреживании, транспортировании и размещении отходов производства и потребления»' popover='Сведения по форме N 2 тп - (отходы) представляют предприятия и их обособленные подразделения, независимо от формы собственности, на которых образуются (поступают), используются, обезвреживаются, хранятся (складируются) и захораниваются отходы производства и потребления'/>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default EcoChap1Theme3_5;