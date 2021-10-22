import React from 'react';
import {BackTop, Col, Row, Table, Tabs} from "antd";

const { TabPane } = Tabs;

const Eco_chap1_theme1_4 = () => {
    const columns = [
        {
            title: <div style={{textAlign: 'center'}}>Имеют право</div>,
            dataIndex: 'can',
        },
        {
            title: <div style={{textAlign: 'center'}}>Обязаны</div>,
            className: 'column-money',
            dataIndex: 'must',
        },
    ];

    const data1 = [
        {
            key: '1',
            can: 'На благоприятную среду обитания, факторы которой не оказывают вредного воздействия на человека',
            must: 'Выполнять требования санитарного законодательства',
        },
        {
            key: '2',
            can: 'Получать информацию о санитарно-эпидемиологической обстановке, состоянии среды обитания, качестве и безопасности продукции производственно-технического назначения, пищевых продуктов, товаров для личных и бытовых нужд, потенциальной опасности для здоровья человека выполняемых работ и оказываемых услуг',
            must: 'Заботиться о здоровье, гигиеническом воспитании и об обучении своих детей',
        },
        {
            key: '3',
            can: 'Обращаться в органы в связи с нарушениями требований санитарного законодательства',
            must: 'Не осуществлять действия, влекущие за собой нарушение прав других граждан на охрану здоровья и благоприятную среду обитания',
        },
        {
            key: '4',
            can: 'Вносить предложения об обеспечении санитарно-эпидемиологического благополучия населения',
        },
        {
            key: '5',
            can: 'На возмещение в полном объеме вреда, причиненного их здоровью или имуществу вследствие нарушения другими гражданами санитарного законодательства, а также при осуществлении санитарно-противоэпидемических мероприятий',
        },
    ];
    const data2 = [
        {
            key: '1',
            can: 'Получать информацию о санитарно-эпидемиологической обстановке, состоянии среды обитания, санитарных правилах',
            must: 'Выполнять требования санитарного законодательства',
        },
        {
            key: '2',
            can: 'Принимать участие в разработке мероприятий по обеспечению санитарно-эпидемиологического благополучия населения',
            must: 'Разрабатывать и проводить санитарно-противоэпидемические мероприятия',
        },
        {
            key: '3',
            can: 'На возмещение в полном объеме вреда, причиненного их имуществу вследствие нарушения гражданами санитарного законодательства, а также при осуществлении санитарно-противоэпидемических мероприятий',
            must: 'Обеспечивать безопасность для здоровья человека выполняемых работ и оказываемых услуг',
        },
        {
            key: '4',
            must: 'Осуществлять производственный контроль за соблюдением санитарно-эпидемиологических требований и проведением санитарно-противоэпидемических мероприятий при выполнении работ и оказании услуг, а также при производстве, транспортировке, хранении и реализации продукции',
        },
        {
            key: '5',
            must: 'Проводить работы по обоснованию безопасности для человека новых видов продукции и технологии ее производства, критериев безопасности и (или) безвредности факторов среды обитания и разрабатывать методы контроля за факторами среды обитания',
        },
        {
            key: '6',
            must: 'Своевременно информировать население об аварийных ситуациях, остановках производства, о нарушениях технологических процессов, создающих угрозу санитарно-эпидемиологическому благополучию населения',
        },
        {
            key: '7',
            must: 'Осуществлять гигиеническое обучение работников',
        },
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0'}}>
                <Col span={20} offset={2}>
                    <h1 className='slide-heading'>Права и обязанности граждан, индивидуальных предпринимателей и юридических лиц</h1>
                </Col>
            </Row>

            <Row style={{marginTop: '30px'}}>
                <Col offset={2} span={20}>
                    <Tabs type="card" size='large' className='eco-tab-list' centered animated>
                        <TabPane tab="Граждане" key="1">
                            <Table
                                className='rights_table'
                                columns={columns}
                                dataSource={data1}
                                bordered
                                pagination={false}
                                title={() => <div style={{textAlign: 'center', fontWeight: 'bold', fontSize: '20px'}}>Для Граждан</div>}
                            />
                        </TabPane>
                        <TabPane tab="ИП и Юр. лица" key="2">
                            <Table
                                className='rights_table'
                                columns={columns}
                                dataSource={data2}
                                bordered
                                pagination={false}
                                title={() => <div style={{textAlign: 'center', fontWeight: 'bold', fontSize: '20px'}}>Для индивидуальных предпринимателей и юридических лиц</div>}
                            />
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </>
    );
};

export default Eco_chap1_theme1_4;