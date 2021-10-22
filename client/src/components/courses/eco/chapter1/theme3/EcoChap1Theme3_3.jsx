import React, {useState} from 'react';
import {BackTop, Button, Carousel, Col, Image, List, Popover, Row, Skeleton} from "antd";
import {BookTwoTone} from "@ant-design/icons";
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const EcoChap1Theme3_3 = () => {
    const data = [
        <> - При невозможности соблюдения нормативов допустимых сбросов - план снижения сбросов загрязняющих веществ в водный объект и отчёт о ходе выполнения плана снижения сбросов загрязняющих веществ в водные объекты;</>,
        <> - Санитарно-эпидемиологическое заключение о соответствии водного объекта санитарным правилам;</>,
        <> - Разрешение на сброс загрязняющих веществ в окружающую среду;</>,
        <> - Нормативы допустимых сбросов (далее - НДС) веществ и микроорганизмов в водные объекты. Для предприятий, у которых фактический сброс ниже расчётных значений допустимых сбросов, НДС устанавливается по фактическому сбросу;</>,
        <> - Решение о предоставлении водного объекта в пользование для сброса сточных и (или) дренажных вод;</>,
    ];
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 40px'}}>
                <Col span={20} offset={2}>
                    <h1 className='slide-heading'>Для предприятий, осуществляющих любой сброс вод в водные объекты, основная документация включает:</h1>
                </Col>
            </Row>

            <Row>
                <Col offset={1} span={22}>
                    <div className='eco-carousel-height-250'>
                        <Carousel appendDots={(dots) => <ul>{dots}</ul>} arrows={true}>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    1. Схема размещения мест сброса сточных и (или) дренажных вод, а также узлов приёма таких вод, согласованная с территориальными органами Федерального агентства водных ресурсов.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    2. Информация о поверке средств измерений, используемых для учёта объёма сброса сточных и (или) дренажных вод.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    3. Журнал учёта водоотведения средствами измерений или журнал учёта водоотведения другими методами.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    4. Журнал учёта качества сбрасываемых сточных (дренажных) вод.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    5.&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{width: 'fit-content',maxWidth: '1000px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Для предоставления в установленные сроки в территориальный орган Федерального агентства водных ресурсов.</span>}
                                        title=''
                                        trigger="hover">
                                        Сведения
                                    </Popover>, полученные в результате учёта объёма сброса сточных (дренажных) вод и их качества.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    6.&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{width: 'fit-content',maxWidth: '1000px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Подлежащие передаче в органы государственной санитарно-эпидемиологической службы в установленном порядке для подтверждения соответствия санитарным правилам.</span>}
                                        title=''
                                        trigger="hover">
                                        Результаты лабораторного контроля качества
                                    </Popover> сточных вод и воды водного объекта в створах, расположенных до и после выпуска сточных вод.
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>

            <Row  style={{marginTop: '30px'}}>
                <Col offset={1} span={11}>
                    <div className='eco-img-col'>
                        <Image
                            style={{border: '1px solid forestgreen'}}
                            src={'/images/water.jpg'}
                            preview={false}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                    </div>

                    <Button
                        className='eco-but-inside'
                        style={{width: '100%', marginTop: '10px'}}
                        onClick={() => setShowModal(true)}
                    >
                        <BookTwoTone twoToneColor='mediumseagreen'/> Дополнительная документация
                    </Button>
                    <Draggable_Modal
                        title='Дополнительная документация по охране водных объектов'
                        content={
                            <>
                                <h3 style={{marginTop: '-20px'}}>Также включаются:</h3>

                                <fieldset className='fieldset-eco fieldset-eco-modal'>
                                    <List
                                        className='borderless'
                                        size="medium"
                                        bordered
                                        dataSource={data}
                                        renderItem={item => <List.Item className='special-list-item'>{item}</List.Item>}
                                    />
                                </fieldset>
                            </>
                        }
                        show={showModal}
                        hide={setShowModal}
                    />
                </Col>

                <Col offset={1} span={10} style={{borderLeft: '3px solid rgb(157,217,184)'}}>
                    <h1 className='eco-col-header' style={{background: 'rgb(157,217,184)', borderRadius: 'unset'}}>Сопроводительная документация</h1>
                    <div className='eco-div-padding'>
                        <div style={{marginLeft: '5px'}}>
                            <h4 style={{marginBottom: '30px'}}>
                                Документирование деятельности по охране водных объектов в настоящее время регламентировано преимущественно Водным кодексом РФ от 03.06.2006 № 74-ФЗ.
                            </h4>
                            <div>
                                -&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{width: 'fit-content',maxWidth: '1000px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>Приказ, распоряжение или иной документ по форме федерального государственного статистического наблюдения № 2-ТП (водхоз).</span>}
                                    title=''
                                    trigger="hover">
                                    Сведения об использовании воды
                                </Popover> (в части водоотведения и других показателей);
                            </div> <br/>
                            <div>
                                -&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{width: 'fit-content', maxWidth: '1000px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>Приказ, распоряжение или иной документ.</span>}
                                    title=''
                                    trigger="hover">
                                    Документ
                                </Popover> о назначении лица, уполномоченного вести учёт водоотведения и качества&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{width: 'fit-content',maxWidth: '1000px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>Дренажных.</span>}
                                    title=''
                                    trigger="hover">
                                    сточных вод
                                </Popover> в организации;
                            </div> <br/>
                            <div>
                                - Копии аттестатов аккредитации лабораторий, выполняющих лабораторные исследования проб воды;
                            </div> <br/>
                            <div>
                                -&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{width: 'fit-content',maxWidth: '1000px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>Периодичность, место отбора проб, объём и перечень определяемых ингредиентов.</span>}
                                    title=''
                                    trigger="hover">
                                    Программа проведения измерений качества сточных и (или) дренажных вод
                                </Popover>;
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default EcoChap1Theme3_3;