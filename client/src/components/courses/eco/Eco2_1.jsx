import React, {useState} from 'react';
import {Button, Col, Collapse, Image, List, Popover, Row, Skeleton, Tree} from "antd";
import {ContainerTwoTone, CarryOutOutlined, DownOutlined} from "@ant-design/icons";
import Draggable_Modal from "../../UI/draggable_modal/Draggable_Modal";

const Eco2_1 = () => {
    const data1 = [
        'приоритет охраны жизни и здоровья человека, настоящего и будущего поколений;',
        'обеспечение благоприятных экологических условий для жизни, труда и отдыха человека;',
        'недопущение необратимых последствий загрязнения атмосферного воздуха для окружающей среды;',
        'обязательность государственного регулирования выбросов загрязняющих веществ в атмосферный воздух и вредных физических воздействий на него;',
        'гласность, полнота и достоверность информации о состоянии атмосферного воздуха, его загрязнении;',
        'научная обоснованность, системность и комплексность подхода к охране атмосферного воздуха и охране окружающей среды в целом;',
        'обязательность соблюдения требований законодательства Российской Федерации в области охраны атмосферного воздуха, ответственность за нарушение данного законодательства.',
    ];
    const treeData = [
        {
            title: '- предельно допустимые выбросы;',
            key: '0-0',
            icon: <DownOutlined />,
            children: [
                {
                    title: (
                        <>
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>При невозможности соблюдения предельно допустимых выбросов и (или) технологических нормативов выбросов для действующего стационарного источника и (или) совокупности действующих стационарных источников устанавливаются временно разрешенные выбросы на период поэтапного достижения предельно допустимых выбросов и (или) технологических нормативов выбросов.</span>}
                                title=''
                                trigger="hover">
                                Предельно допустимые выбросы определяются
                            </Popover>,
                            &nbsp;в отношении загрязняющих веществ, перечень которых устанавливается Правительством Российской Федерации для стационарного источника и (или) совокупности стационарных источников расчетным путем на основе нормативов качества атмосферного воздуха с учетом фонового уровня загрязнения атмосферного воздуха.
                        </>
                    ),
                    key: '0-0-0',
                    switcherIcon: <CarryOutOutlined />,
                }
            ],
        },
        {
            title: '- технологические нормативы выбросов;',
            key: '0-2',
            icon: <DownOutlined />,
            children: [
                {
                    title: 'Технологический норматив выброса устанавливается в соответствии с законодательством в области охраны окружающей среды.',
                    key: '0-2-0',
                    switcherIcon: <CarryOutOutlined />,
                }
            ],
        },
        {
            title: '- технические нормативы выбросов.',
            key: '0-3',
            icon: <DownOutlined />,
            children: [
                {
                    title: 'Для передвижных источников технические нормативы выбросов устанавливаются техническими регламентами, принимаемыми в соответствии с законодательством Российской Федерации о техническом регулировании.',
                    key: '0-3-0',
                    switcherIcon: <CarryOutOutlined />,
                }
            ],
        },
        {
            title: '- предельно допустимые нормативы вредных физических воздействий на атмосферный воздух;',
            key: '0-1',
            switcherIcon: <CarryOutOutlined />,
        },
    ];

    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <Row style={{margin: '20px 0 30px'}}>
                <Col span={20} offset={2}>
                    <h1 className='slide-heading'>Основные принципы государственного управления в области охраны атмосферного воздуха</h1>
                </Col>
            </Row>

            <Row>
                <Col span={8} offset={0} className='eco-img-col'>
                    <Image
                        className='eco-img'
                        src={'/gosup.jpg'}
                        preview={false}
                        placeholder={
                            <Skeleton.Image />
                        }
                    />
                </Col>

                <Col span={16} offset={0}>
                    <div>
                        <List
                            className='eco-list-style'
                            size="small"
                            bordered = {false}
                            header={
                                <div style={{fontSize: '21px', marginBottom: '10px'}}>
                                    <span>
                                        Государственное управление в области охраны атмосферного воздуха основывается на следующих принципах:
                                    </span>
                                </div>}
                            dataSource={data1}
                            renderItem={(item, index) => <List.Item className='eco-list-item-style'><span>{index + 1}</span>{item}</List.Item>}
                        />
                    </div>
                </Col>
            </Row>

            <Row style={{marginTop: '50px'}}>
                <Col span={22} offset={2}>
                    <div className='eco-but-info'>
                        <Button
                            className='eco-but-inside eco-but-inside-hover'
                            onClick={() => {setShowModal(true)}}
                        >
                            <ContainerTwoTone twoToneColor='mediumseagreen'/> Категории объектов, оказывающих негативное воздействие на окружающую среду
                        </Button>
                        <Draggable_Modal
                            title='Нормативы выбросов загрязняющих веществ в атмосферный воздух и вредных физических воздействий на атмосферный воздух'
                            content={
                                <>
                                    <div className='eco-list-style' style={{marginTop: '-20px'}}>
                                         <span style={{fontSize: '18px'}}>
                                            В целях государственного регулирования выбросов загрязняющих веществ в атмосферный воздух устанавливаются:
                                        </span>

                                        <Tree
                                            className='eco-list-style-tree'
                                            showLine = {true}
                                            defaultExpandedKeys = {['0-0']}
                                            treeData = {treeData}
                                            switcherIcon={<DownOutlined />}
                                            icon={<CarryOutOutlined />}
                                        />
                                    </div>
                                </>
                            }
                            show={showModal}
                            hide={setShowModal}
                        />
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco2_1;