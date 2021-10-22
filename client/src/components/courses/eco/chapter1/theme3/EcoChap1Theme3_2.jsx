import React from 'react';
import {BackTop, Carousel, Col, Collapse, List, Popover, Row} from "antd";

const { Panel } = Collapse;

const EcoChap1Theme3_2 = () => {
    const data = [
        <> - Санитарно-эпидемиологическое заключение о соответствии нормативов предельно допустимых выбросов санитарным правилам;</>,
        <> - Копии аттестатов аккредитации лабораторий, выполняющих количественный химический анализ проб воздуха;</>,
        <> -&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>При невозможности соблюдения нормативов допустимых выбросов.</span>}
                title=''
                trigger="hover">
                План снижения выбросов
            </Popover>
            &nbsp;загрязняющих веществ в атмосферный воздух и отчёт о ходе выполнения этого плана в целях достижения ПДВ;
        </>,
        <> - Приказ  о назначении лиц, ответственных за проведение производственного контроля за охраной атмосферного воздуха  и документы об организации экологической службы;</>,
        <> - Сведения об охране атмосферного воздуха;</>,
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 40px'}}>
                <Col span={20} offset={2}>
                    <h1 className='slide-heading'>Документация по охране атмосферного воздуха включает:</h1>
                </Col>
            </Row>

            <Row>
                <Col offset={1} span={22}>
                    <div className='eco-carousel-height-250'>
                        <Carousel appendDots={(dots) => <ul>{dots}</ul>} arrows={true}>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    1. Материалы инвентаризации выбросов загрязняющих веществ в атмосферный воздух и проект нормативов&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{width: 'fit-content',maxWidth: '1000px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Далее - "ПДВ".</span>}
                                        title=''
                                        trigger="hover">
                                        предельно допустимых выбросов
                                    </Popover>.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    2. Материалы&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{width: 'fit-content',maxWidth: '1000px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Учёт может осуществляться в различных формах, в том числе по формам ПОД-1, ПОД-2, ПОД-3, которые традиционно используются на крупных промышленных предприятиях.</span>}
                                        title=''
                                        trigger="hover">
                                        первичного учёта
                                    </Popover> по охране атмосферного воздуха.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    3.&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{width: 'fit-content',maxWidth: '1000px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Для предприятий, имеющих пылегазоулавливающие установки.</span>}
                                        title=''
                                        trigger="hover">
                                        Документация, обеспечивающая соблюдение правил эксплуатации сооружений и оборудования, предназначенных для очистки и контроля выбросов
                                    </Popover>.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    4.&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{width: 'fit-content',maxWidth: '1000px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Для организаций, осуществляющих эксплуатацию транспортных и иных передвижных средств.</span>}
                                        title=''
                                        trigger="hover">
                                        Документы
                                    </Popover>, подтверждающие соответствие содержания вредных (загрязняющих) веществ в выбросах двигателей транспортных и иных передвижных средств и установок техническим нормативам выбросов и проведение регулярных проверок на соответствие техническим нормативам выбросов транспортных и иных передвижных средств.
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
                                        content={<span>Для предприятий, имеющих источники выбросов, которые в периоды неблагоприятных метеорологических условий (НМУ) могут привести к чрезвычайному загрязнению атмосферного воздуха.</span>}
                                        title=''
                                        trigger="hover">
                                        Документы
                                    </Popover> по реализации мероприятий по временному сокращению выбросов загрязняющих веществ объекта в периоды НМУ.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    6. Разрешение на выброс вредных (загрязняющих) веществ в атмосферный воздух.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    7.&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{width: 'fit-content',maxWidth: '1000px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Для организаций, осуществляющих экспорт или импорт фреонов (хладагентов) или содержащего эти фреоны оборудования (холодильники, кондиционеры).</span>}
                                        title=''
                                        trigger="hover">
                                        Разрешение на трансграничное перемещение озоноразрушающих веществ и содержащей их продукции
                                    </Popover>.
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col offset={0} span={12}>
                    <fieldset className='fieldset-eco'>
                        <legend>Дополнительно</legend>

                        <List
                            className='borderless'
                            size="medium"
                            bordered
                            dataSource={data}
                            renderItem={item => <List.Item className='special-list-item'>{item}</List.Item>}
                        />
                    </fieldset>
                </Col>

                <Col offset={0} span={12} style={{marginTop: '50px'}}>
                    <div>
                        <Collapse
                            defaultActiveKey={1}
                            expandIconPosition='right'
                            accordion
                        >
                            <Panel header={<span style={{fontSize: '18px'}}>Результаты</span>} key="1" className='eco-panel-style' showArrow>
                                <div className='divChildren-margin-bottom-15'>
                                    <div>Проект организации санитарно-защитной зоны и санитарно-эпидемиологическое заключение о соответствии проекта санитарным требованиям</div>
                                    <div>Результаты производственного контроля за соблюдением установленных нормативов выбросов на источниках, периодичность контроля устанавливается в нормативах ПДВ</div>
                                    <div>Результаты контроля качества атмосферного воздуха на границе санитарно-защитной зоны</div>
                                    <div>Программа контроля качества атмосферного воздуха (согласованная с органами санитарно-эпидемиологического надзора) на границе санитарно-защитной зоны и на контрольных точках</div>
                                </div>
                            </Panel>
                            <Panel header={<span style={{fontSize: '18px'}}>Для потребляющих тепло предприятий</span>} key="2" className='eco-panel-style' showArrow>
                                <>
                                    Проект организации санитарно- защитной зоны и санитарно-эпидемиологическое заключение о соответствии проекта санитарным требованиям
                                </>
                            </Panel>
                        </Collapse>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default EcoChap1Theme3_2;