import React, {useState} from 'react';
import {Row, Col, Divider, List, Card, Button} from 'antd';
import { Tabs, Popover, Carousel, Collapse, BackTop } from 'antd';
import {
    BookTwoTone,
    GoldTwoTone,
    SettingTwoTone,
} from '@ant-design/icons';
import Draggable_Modal from "../../UI/draggable_modal/Draggable_Modal";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const Eco1 = () => {
    const data1 = [
        'Cоблюдение права человека на благоприятную окружающую среду.',
        'Обеспечение благоприятных условий жизнедеятельности человека.',
        'Научно обоснованное сочетание экологических, экономических и социальных интересов человека, общества и государства в целях обеспечения устойчивого развития и благоприятной окружающей среды.',
        'Охрана, воспроизводство и рациональное использование природных ресурсов как необходимые условия обеспечения благоприятной окружающей среды и экологической безопасности.',
        'Ответственность за обеспечение благоприятной окружающей среды и экологической безопасности на соответствующих территориях.',
        'Платность природопользования и возмещение вреда окружающей среде',
    ];
    const data2 = [
        'Обязательность проведения проверки проектов и иной документации, обосновывающих хозяйственную и иную деятельность, которая может оказать негативное воздействие на окружающую среду, создать угрозу жизни, здоровью и имуществу граждан, на соответствие требованиям технических регламентов в области охраны окружающей среды.',
        'Презумпция экологической опасности планируемой хозяйственной и иной деятельности.',
        'Обязательность оценки воздействия на окружающую среду при принятии решений об осуществлении хозяйственной и иной деятельности.',
        'Учет природных и социально-экономических особенностей территорий при планировании и осуществлении хозяйственной и иной деятельности.',
        'Независимость государственного экологического надзора.',
        'Приоритет сохранения естественных экологических систем, природных ландшафтов и природных комплексов.',
    ];
    const data3 = [
        'Допустимость воздействия хозяйственной и иной деятельности на природную среду.',
        'Обеспечение снижения негативного воздействия хозяйственной и иной деятельности на окружающую среду.',
        'Обязательность участия в деятельности по охране окружающей среды.',
        'Сохранение биологического разнообразия.',
        'Обеспечение сочетания общего и индивидуального подходов к установлению мер государственного регулирования в области охраны окружающей среды.',
        'Запрещение хозяйственной и иной деятельности, последствия воздействия которой непредсказуемы для окружающей среды.',
    ];

    const [showModalCategories, setShowModalCategories] = useState(false);
    const [showModalCriteries, setShowModalCriteries] = useState(false);
    const [showModalSpecial, setShowModalSpecial] = useState(false);


    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 40px'}}>
                <Col span={20} offset={2}>
                    <h1 className='slide-heading'>Основные принципы охраны окружающей среды</h1>
                </Col>
            </Row>

            <Row style={{marginBottom: '15px'}}>
                <Col offset={1} span={20}>
                    <h3 >
                        <Popover
                            color={"azure"}
                            overlayStyle={{maxWidth: '450px'}}
                            className='pop_text'
                            style={{maxWidth: '200px'}}
                            content={<span>Органов государственной власти Российской Федерации, органов государственной власти субъектов Российской Федерации, органов местного самоуправления, юридических и физических лиц</span>}
                            title=''
                            trigger="hover">
                                Хозяйственная и иная деятельность
                        </Popover>,
                        оказывающая воздействие на окружающую среду, должна осуществляться на основе следующих принципов:
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col span={23}>
                    <Tabs tabPosition={'left'} style={{display: 'flex', justifyContent: 'space-around'}}>
                        <TabPane tab={<span style={{fontSize: '20px', color: 'green'}}>Раздел 1</span>} key="1">
                            <List
                                grid={{
                                    gutter: 12,
                                    column: 2,
                                }}
                                dataSource = {data1}
                                renderItem = {item =>
                                    (<List.Item>
                                        <Card title='' className='eco-list-card-style'>{item}</Card>
                                    </List.Item>)}
                            />
                        </TabPane>

                        <TabPane tab={<span style={{fontSize: '20px', color: 'green'}}>Раздел 2</span>} key="2">
                            <List
                                grid={{
                                    gutter: 12,
                                    column: 2,
                                }}
                                dataSource = {data2}
                                renderItem = {item =>
                                    (<List.Item>
                                        <Card title='' className='eco-list-card-style'>{item}</Card>
                                    </List.Item>)}
                            />
                        </TabPane>
                        <TabPane tab={<span style={{fontSize: '20px', color: 'green'}}>Раздел 3</span>} key="3">
                            <List
                                grid={{
                                    gutter: 12,
                                    column: 2,
                                }}
                                dataSource = {data3}
                                renderItem = {item =>
                                    (<List.Item>
                                        <Card title='' className='eco-list-card-style'>{item}</Card>
                                    </List.Item>)}
                            />
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>

            <Divider style={{margin: '30px 0', background: 'forestgreen'}}/>

            <Row style={{margin: '40px 0 20px'}}>
                <Col span={10} offset={2}>
                    <h1 style={{textAlign: 'center'}}>
                        <Popover
                            color={"azure"}
                            overlayStyle={{maxWidth: '450px'}}
                            className='pop_text'
                            style={{maxWidth: '200px'}}
                            content={<span>В отношении которых применяются меры государственного регулирования в области охраны окружающей среды</span>}
                            title=''
                            trigger="hover">
                            Загрязняющие вещества
                        </Popover>
                        &nbsp;определяются:
                    </h1>
                    <Carousel autoplay>
                        <div className='eco-carousel-card'>
                            <div className='eco-carousel-item'>
                                1. C учетом уровня токсичности, канцерогенных и (или) мутагенных свойств химических и иных веществ, а также их способности к преобразованию в окружающей среде в соединения, обладающие большей токсичностью.
                            </div>
                        </div>
                        <div className='eco-carousel-card'>
                            <div className='eco-carousel-item'>
                                2. C учетом данных государственного экологического мониторинга и социально-гигиенического мониторинга.
                            </div>
                        </div>
                        <div className='eco-carousel-card'>
                            <div className='eco-carousel-item'>
                                3. При наличии методик (методов) измерения загрязняющих веществ.
                            </div>
                        </div>
                    </Carousel>
                </Col>

                <Col span={10} offset={1} className='eco-but-col'>
                    <div className='eco-but-info'>
                        <Button
                            className='eco-but-inside eco-but-inside-fill'
                            onClick={() => setShowModalCategories(true)}
                        >
                            <BookTwoTone /> Категории объектов
                        </Button>
                        <Draggable_Modal
                            title='Категории объектов, оказывающих негативное воздействие на окружающую среду'
                            content={
                                <>
                                    <h3>Объекты, оказывающие негативное воздействие на окружающую среду, в зависимости от уровня такого воздействия подразделяются на четыре категории:</h3>

                                    <div>
                                        <Collapse
                                            className='eco-collapse'
                                            expandIconPosition='left'
                                        >
                                            <Panel header="1. Объекты I категории" key="1" className='eco-panel-style'>
                                                <div>Объекты, оказывающие значительное негативное воздействие на окружающую среду и относящиеся к областям применения наилучших доступных технологий</div>
                                            </Panel>
                                            <Panel header="2. Объекты II категории" key="2" className='eco-panel-style'>
                                                <div>Объекты, оказывающие умеренное негативное воздействие на окружающую среду</div>
                                            </Panel>
                                            <Panel header="3. Объекты III категории" key="3" className='eco-panel-style'>
                                                <div>Объекты, оказывающие незначительное негативное воздействие на окружающую среду</div>
                                            </Panel>
                                            <Panel header="4. Объекты IV категории" key="4" className='eco-panel-style'>
                                                <div>Объекты, оказывающие минимальное негативное воздействие на окружающую среду</div>
                                            </Panel>
                                        </Collapse>
                                    </div>
                                </>
                            }
                            show={showModalCategories}
                            hide={setShowModalCategories}
                        />

                        <Button
                            className='eco-but-inside eco-but-inside-fill'
                            onClick={() => setShowModalCriteries(true)}
                        >
                            <GoldTwoTone /> Критерии отнесения объектов к категориям
                        </Button>
                        <Draggable_Modal
                            title='Критерии отнесения объектов к категориям'
                            content={
                                <>
                                    <h3>Критерии, на основании которых осуществляется отнесение объектов, оказывающих негативное воздействие на окружающую среду, к объектам I, II, III и IV категорий, устанавливаются <strong>Правительством Российской Федерации.</strong></h3>
                                    <h3>
                                        Присвоение&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Оказывающему негативное воздействие на окружающую среду</span>}
                                            title=''
                                            trigger="hover">
                                            объекту
                                        </Popover>
                                        &nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Категория объекта может быть изменена при актуализации учетных сведений об объекте, оказывающем негативное воздействие на окружающую среду</span>}
                                            title=''
                                            trigger="hover">
                                            соответствующей категории
                                        </Popover>
                                        &nbsp;осуществляется <strong>при его постановке на государственный учет </strong>
                                        объектов, оказывающих негативное воздействие на окружающую среду.
                                    </h3>
                                </>
                            }
                            show={showModalCriteries}
                            hide={setShowModalCriteries}
                        />

                        <Button
                            className='eco-but-inside eco-but-inside-fill'
                            onClick={() => setShowModalSpecial(true)}
                        >
                            <SettingTwoTone /> Особенности установления критериев
                        </Button>
                        <Draggable_Modal
                            title='Особенности установления критериев'
                            content={
                                <>
                                    <h3>При установлении критериев, на основании которых осуществляется отнесение объектов, оказывающих негативное воздействие на окружающую среду, к соответствующей категории, учитываются:</h3>

                                    <div>
                                        <p>
                                            - уровни воздействия на окружающую среду&nbsp;
                                            <Popover
                                                color={"azure"}
                                                overlayStyle={{maxWidth: '450px'}}
                                                className='pop_text'
                                                style={{maxWidth: '200px'}}
                                                content={<span>отрасль, часть отрасли, производство</span>}
                                                title=''
                                                trigger="hover">
                                                видов хозяйственной и (или) иной деятельности
                                            </Popover>;
                                        </p>
                                        <p>
                                            - уровень токсичности, канцерогенные и мутагенные свойства загрязняющих веществ, содержащихся в выбросах, сбросах загрязняющих веществ, а также классы опасности отходов производства и потребления;
                                        </p>
                                        <p>
                                            - классификация промышленных объектов и производств;
                                        </p>
                                        <p>
                                            - особенности осуществления деятельности в области использования атомной энергии.
                                        </p>
                                    </div>
                                </>
                            }
                            show={showModalSpecial}
                            hide={setShowModalSpecial}
                        />
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco1;