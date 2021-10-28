import React from 'react';
import {Row, Col, Collapse, Skeleton, Image, Card, Tabs, Popover} from 'antd';
import { BackTop } from 'antd';

const { Panel } = Collapse;
const { TabPane } = Tabs;

const Eco_Chap2_Theme2_2 = () => {
    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}>Требования охраны атмосферного воздуха при проектировании, размещении, строительстве, реконструкции и эксплуатации объектов хозяйственной и иной деятельности</h1>
                </Col>
            </Row>

            <Row>
                <Col offset={1} span={11}>
                    <Collapse
                        accordion
                        defaultActiveKey={1}
                        expandIconPosition='left'
                        className='mycollapse'
                    >
                        <Panel header='При вводе в эксплуатацию новых и (или) реконструированных объектов' key="1" showArrow className='eco-panel-style'>
                            <>
                                <p>
                                    При вводе в эксплуатацию новых и (или) реконструированных объектов хозяйственной и иной деятельности, осуществляющих выбросы загрязняющих веществ в атмосферный воздух, должно обеспечиваться непревышение технологических нормативов выбросов и (или) предельно допустимых выбросов, предельно допустимых нормативов вредных физических воздействий на атмосферный воздух.
                                </p>
                            </>
                        </Panel>
                        <Panel header='Размещение объектов хозяйственной и иной деятельности' key="2" showArrow className='eco-panel-style'>
                            <>
                                <p>
                                    Размещение объектов хозяйственной и иной деятельности, оказывающих вредное воздействие на качество атмосферного воздуха, согласовывается с федеральным органом исполнительной власти в области охраны окружающей среды или с его территориальными органами и другими федеральными органами исполнительной власти или с их территориальными органами.
                                </p>
                            </>
                        </Panel>
                        <Panel header='В проектах строительства объектов' key="3" showArrow className='eco-panel-style'>
                            <>
                                <p>
                                    В проектах строительства объектов хозяйственной и иной деятельности, которые могут оказать вредное воздействие на качество атмосферного воздуха, должны предусматриваться меры по уменьшению выбросов загрязняющих веществ в атмосферный воздух и их обезвреживанию.
                                </p>
                            </>
                        </Panel>
                        <Panel header='В целях охраны атмосферного воздуха' key="4" showArrow className='eco-panel-style'>
                            <>
                                <p>
                                    В целях охраны атмосферного воздуха в местах проживания населения устанавливаются санитарно-защитные зоны организаций.
                                </p>
                            </>
                        </Panel>
                    </Collapse>
                </Col>

                <Col span={11} offset={0} style={{marginLeft: '2%'}}>
                    <Image
                        src={'/images/building.gif'}
                        preview={false}
                        placeholder={
                            <Skeleton.Image />
                        }
                    />
                </Col>
            </Row>

            <Row>
                <Col offset={2} span={20} style={{marginTop: '-80px'}}>
                    <Tabs tabPosition={'right'} type="card" size='large' className='eco-tab-list' centered animated>
                        <TabPane tab="Проектирование" key="1">
                            <>
                                <Row style={{marginTop: '20px'}}>
                                    <Col offset={1} span={11}>
                                        <Card className='simple-card'>
                                            <div>
                                                <div className='eco-div-withFloat'>
                                                    <Image
                                                        className='eco-float-ico'
                                                        style={{maxWidth: '100px', marginLeft: '-7px', marginRight: '17px'}}
                                                        preview = {false}
                                                        src={'/images/rab1.jpg'}
                                                        placeholder={
                                                            <Skeleton.Image />
                                                        }
                                                    />
                                                    При проектировании и размещении объектов хозяйственной и иной деятельности, оказывающих вредное воздействие на качество атмосферного воздуха, в пределах городских и иных поселений, а также при застройке и реконструкции городских и иных поселений должны учитываться&nbsp;
                                                    <Popover
                                                        color={"azure"}
                                                        overlayStyle={{maxWidth: '500px'}}
                                                        className='pop_text'
                                                        style={{maxWidth: '350px'}}
                                                        content={<span>В том числе полученный по результатам проведения сводных расчетов загрязнения атмосферного воздуха, и прогноз изменения его качества при осуществлении указанной деятельности.</span>}
                                                        title=''
                                                        trigger="hover">
                                                        <strong style={{fontSize: '1.25rem'}}>фоновый уровень загрязнения атмосферного воздуха</strong>
                                                    </Popover>.
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col offset={2} span={9}>
                                        <Card className='simple-card'>
                                            <div>
                                                <div className='eco-div-withFloat'>
                                                    <Image
                                                        className='eco-float-ico'
                                                        style={{maxWidth: '100px', marginLeft: '-7px', marginRight: '17px'}}
                                                        preview = {false}
                                                        src={'/images/rab2.png'}
                                                        placeholder={
                                                            <Skeleton.Image />
                                                        }
                                                    />
                                                    При проектировании, размещении, строительстве, реконструкции и эксплуатации объектов хозяйственной и иной деятельности, при застройке городских и иных поселений должно обеспечиваться&nbsp;
                                                    <Popover
                                                        color={"azure"}
                                                        overlayStyle={{maxWidth: '500px'}}
                                                        className='pop_text'
                                                        style={{maxWidth: '350px'}}
                                                        content={<span>В соответствии с экологическими, санитарно-гигиеническими, а также со строительными нормами и правилами в части нормативов площадей озелененных территорий.</span>}
                                                        title=''
                                                        trigger="hover">
                                                        <strong style={{fontSize: '1.25rem'}}>непревышение нормативов качества атмосферного воздуха</strong>
                                                    </Popover>.
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                            </>
                        </TabPane>
                        <TabPane tab="Ограничения" key="2">
                            <>
                                <Row style={{marginTop: '20px'}}>
                                    <Col offset={1} span={9}>
                                        <Card className='simple-card-orange'>
                                            <div>
                                                <div className='eco-div-withFloat'>
                                                    <Image
                                                        className='eco-float-ico'
                                                        style={{maxWidth: '100px', marginLeft: '-7px', marginRight: '17px'}}
                                                        preview = {false}
                                                        src={'/images/dang1.png'}
                                                        placeholder={
                                                            <Skeleton.Image />
                                                        }
                                                    />
                                                    Запрещаются размещение и эксплуатация объектов хозяйственной и иной деятельности, которые не имеют предусмотренных правилами охраны атмосферного воздуха <strong style={{fontSize: '1.25rem'}}>установок очистки газов и средств контроля за выбросами</strong> загрязняющих веществ в атмосферный воздух.
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col offset={2} span={11}>
                                        <Card className='simple-card-orange'>
                                            <div>
                                                <div className='eco-div-withFloat'>
                                                    <Image
                                                        className='eco-float-ico'
                                                        style={{maxWidth: '100px', marginLeft: '-7px', marginRight: '17px'}}
                                                        preview = {false}
                                                        src={'/images/dang2.png'}
                                                        placeholder={
                                                            <Skeleton.Image />
                                                        }
                                                    />
                                                    Запрещаются проектирование, размещение и строительство объектов хозяйственной и иной деятельности, функционирование которых может привести к <strong style={{fontSize: '1.25rem'}}>неблагоприятным изменениям климата и озонового слоя атмосферы</strong>, ухудшению здоровья людей, уничтожению генетического фонда растений и генетического фонда животных, наступлению необратимых последствий для людей и окружающей среды.
                                                </div>
                                            </div>
                                        </Card>
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

export default Eco_Chap2_Theme2_2;