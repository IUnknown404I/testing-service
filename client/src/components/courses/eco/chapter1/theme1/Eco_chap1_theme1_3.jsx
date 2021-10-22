import React from 'react';
import {BackTop, Card, Col, Image, List, Popover, Row, Skeleton} from "antd";

const Eco_chap1_theme1_3 = () => {
    const data = [
        <span>
            Выполнения&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>Профилактических</span>}
                title=''
                trigger="hover">
                    санитарно-противоэпидемических мероприятий
            </Popover>
            &nbsp;и обязательного соблюдения&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>Индивидуальными предпринимателями, юридическими лицами</span>}
                title=''
                trigger="hover">
                    гражданами
            </Popover>
            &nbsp;санитарных правил как составной части осуществляемой ими деятельности.
        </span>,
        'Государственного санитарно-эпидемиологического нормирования.',
        'Федерального государственного санитарно-эпидемиологического надзора.',
        'Обязательного подтверждения соответствия продукции санитарно-эпидемиологическим требованиям.',
        'Лицензирования видов деятельности, представляющих потенциальную опасность для человека.',
        'Государственной регистрации потенциально опасных для человека химических и биологических веществ, отдельных видов продукции, радиоактивных веществ, отходов производства и потребления, а также впервые ввозимых на территорию Российской Федерации отдельных видов продукции.',
        'Проведения социально-гигиенического мониторинга.',
        'Научных исследований в области обеспечения санитарно-эпидемиологического благополучия населения.',
    ];


    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0'}}>
                <Col span={20} offset={2}>
                    <h1 className='slide-heading'>Обеспечение санитарно-эпидемиологического благополучия населения</h1>
                </Col>
            </Row>

            <Row style={{marginTop: '30px'}}>
                <Col offset={1} span={11} style={{marginTop: '14px'}}>
                    <h1 style={{fontSize: '22px', marginBottom: '20px'}}>Санитарно-эпидемиологическое благополучие населения обеспечивается посредством:</h1>

                    <List
                        grid={{
                            gutter: 20,
                            column: 1,
                        }}
                        dataSource = {data}
                        renderItem = {item =>
                            (<List.Item>
                                <Card title='' className='eco-list-card-style'>{item}</Card>
                            </List.Item>)}
                    />
                </Col>

                <Col offset={2} span={9} className='epi-img-col'>
                    <Image
                        className='epi-img'
                        // width={500}
                        src={'/epi.jpg'}
                        preview={false}
                        placeholder={
                            <Skeleton.Image />
                        }
                    />

                    <div className='eco-img-div-item extra' style={{background: 'white', marginTop: '30px'}}>
                        <Image
                            className='eco-img-ico'
                            preview = {false}
                            src={'/virus.png'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <span>
                            Формирование и ведение открытых и общедоступных&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Направленных на своевременное информирование органов государственной власти, органов местного самоуправления, юридических лиц, индивидуальных предпринимателей и граждан о возникновении инфекционных заболеваний, массовых неинфекционных заболеваний (отравлений), состоянии среды обитания и проводимых санитарно-противоэпидемических (профилактических) мероприятиях</span>}
                                title=''
                                trigger="hover">
                                    федеральных информационных ресурсов
                            </Popover>
                            &nbsp;и&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>В соответствии с санитарно-эпидемиологической обстановкой и прогнозом ее изменения</span>}
                                title=''
                                trigger="hover">
                                    профилактики заболеваний
                            </Popover>.
                        </span>
                    </div>
                    <div className='eco-img-div-item extra epi-extra'>
                        <Image
                            className='eco-img-ico'
                            preview = {false}
                            src={'/virus.png'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <span>
                            Обеспечение мер по гигиеническому воспитанию и обучению населения и пропаганде здорового образа жизни.
                        </span>
                    </div>
                    <div className='eco-img-div-item extra epi-extra'>
                        <Image
                            className='eco-img-ico'
                            preview = {false}
                            src={'/virus.png'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <span>
                            Обеспечение мер по привлечению к ответственности за нарушение законодательства Российской Федерации в области обеспечения санитарно-эпидемиологического благополучия населения.
                        </span>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_chap1_theme1_3;