import React from 'react';
import {Image, List, BackTop, Col, Row, Divider, Tree, Popover, Skeleton} from "antd";
import {DownOutlined, CarryOutOutlined} from '@ant-design/icons';


const Eco2 = () => {
    const data1 = [
        '- приоритет охраны жизни и здоровья человека, настоящего и будущего поколений;',
        '- обеспечение благоприятных экологических условий для жизни, труда и отдыха человека;',
        '- недопущение необратимых последствий загрязнения атмосферного воздуха для окружающей среды;',
        '- обязательность государственного регулирования выбросов загрязняющих веществ в атмосферный воздух и вредных физических воздействий на него;',
        '- гласность, полнота и достоверность информации о состоянии атмосферного воздуха, его загрязнении;',
        '- научная обоснованность, системность и комплексность подхода к охране атмосферного воздуха и охране окружающей среды в целом;',
        '- обязательность соблюдения требований законодательства Российской Федерации в области охраны атмосферного воздуха, ответственность за нарушение данного законодательства.',
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


    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 50px'}}>
                <Col span={20} offset={2} style={{textAlign: 'center'}}>
                    <h1 style={{fontSize: '25px', fontWeight: 'bold', textDecoration: 'underline'}}>Основные принципы государственного управления в области охраны атмосферного воздуха</h1>
                </Col>
            </Row>

            <Row>
                <Col span={11} offset={1}>
                    <h1 style={{fontSize: '19px', marginBottom: '20px', textAlign: 'center'}}>Основные принципы государственного управления в области охраны атмосферного воздуха</h1>

                    <div>
                        <List
                            className='eco-list-style'
                            size="small"
                            header={
                                <div style={{fontSize: '17px', marginBottom: '10px'}}>
                                    <span>
                                        Государственное управление в области охраны атмосферного воздуха основывается на следующих принципах:
                                    </span>
                                </div>}
                            bordered
                            dataSource={data1}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </div>
                </Col>
                <Col span={10} offset={1}>
                    <h1 style={{fontSize: '19px', marginBottom: '20px', textAlign: 'center'}}>Нормативы выбросов загрязняющих веществ в атмосферный воздух и вредных физических воздействий на атмосферный воздух</h1>

                    <div className='eco-list-style'>
                        <span style={{fontSize: '17px'}}>
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
                </Col>
            </Row>

            <Divider style={{margin: '50px 0', background: 'green'}}/>

            <Row>
                <Col offset={1} span={22}>
                    <h1 style={{fontSize: '21px', marginBottom: '40px', textAlign: 'center'}}>Общие требования к хозяйственной и иной деятельности, оказывающей вредное воздействие на атмосферный воздухвоздух</h1>
                </Col>
            </Row>
            <Row>
                <Col span={11} offset={0} className='eco-img-col'>
                    <Image
                        className='eco-img'
                        // width={850}
                        src={'/breath.jpg'}
                        placeholder={
                            <Skeleton.Image />
                        }
                    />
                </Col>
                <Col span={13} offset={0} className='eco-img-col'>
                    <div style={{padding: '0 20px'}} className='eco-img-div'>

                        <div className='eco-img-div-item'>
                            <Image
                                className='eco-img-par'
                                preview = {false}
                                src={'/eco-par.png'}
                                placeholder={
                                    <Skeleton.Image className='eco-img-par'/>
                                }
                            />
                            <span>
                                В целях предупреждения вредного воздействия на атмосферный воздух устанавливаются&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '450px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>В том числе к работам, услугам и соответствующим методам контроля, а также ограничения и условия осуществления хозяйственной и иной деятельности, оказывающей вредное воздействие на атмосферный воздух.</span>}
                                    title=''
                                    trigger="hover">
                                    обязательные для соблюдения при осуществлении хозяйственной и иной деятельности требования охраны атмосферного воздуха
                                </Popover>.
                            </span>
                        </div>
                        <div className='eco-img-div-item'>
                            <Image
                                className='eco-img-par'
                                preview = {false}
                                src={'/eco-par.png'}
                                placeholder={
                                    <Skeleton.Image />
                                }
                            />
                            <span>
                                Органы исполнительной власти Российской Федерации и органы государственной власти субъектов Российской Федерации могут вводить ограничения использования нефтепродуктов и других видов топлива, сжигание которых приводит к загрязнению атмосферного воздуха на соответствующей территории, а также стимулировать производство и применение экологически безопасных видов топлива и других энергоносителей.
                            </span>
                        </div>
                        <div className='eco-img-div-item'>
                            <Image
                                className='eco-img-par'
                                preview = {false}
                                src={'/eco-par.png'}
                                placeholder={
                                    <Skeleton.Image />
                                }
                            />
                            <span>
                                Запрещается выброс в атмосферный воздух веществ, степень опасности которых для жизни и здоровья человека и для окружающей среды не установлена.
                            </span>
                        </div>
                        <div className='eco-img-div-item'>
                            <Image
                                className='eco-img-par'
                                preview = {false}
                                src={'/eco-par.png'}
                                placeholder={
                                    <Skeleton.Image />
                                }
                            />
                            <span>
                                Действия, направленные на изменение состояния атмосферного воздуха и атмосферных явлений, могут осуществляться только при отсутствии вредных последствий для жизни и здоровья человека и для окружающей среды и на основании разрешений, выданных федеральным органом исполнительной власти в области охраны окружающей среды.
                            </span>
                        </div>

                    </div>
                </Col>
            </Row>

            <Row>
                <Col offset={1} span={6} className='eco-img-col'>
                    <div className='eco-img-div-item extra'>
                        <Image
                            className='eco-img-ico'
                            preview = {false}
                            src={'/eco-ic.png'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <span>
                            Выбросы загрязняющих веществ в атмосферный воздух на <strong>объектах I категории</strong>, осуществляются на основании&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Выданного в соответствии с законодательством в области охраны окружающей среды</span>}
                                title=''
                                trigger="hover">
                                    комплексного экологического разрешения
                                </Popover>.
                        </span>
                    </div>
                </Col>
                <Col offset={1} span={6} className='eco-img-col'>
                    <div className='eco-img-div-item extra'>
                        <Image
                            className='eco-img-ico'
                            preview = {false}
                            src={'/eco-ic.png'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <span>
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>За исключением выбросов радиоактивных веществ</span>}
                                title=''
                                trigger="hover">
                                    Выбросы загрязняющих веществ в атмосферный воздух на
                            </Popover>
                            <strong> объектах II категории</strong> осуществляются на основании&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Представляемой в соответствии с законодательством в области охраны окружающей среды в уполномоченный Правительством Российской Федерации федеральный орган исполнительной власти или орган исполнительной власти субъекта Российской Федерации</span>}
                                title=''
                                trigger="hover">
                                    декларации о воздействии на окружающую среду
                            </Popover>.
                        </span>
                    </div>
                </Col>
                <Col offset={1} span={8} className='eco-img-col'>
                    <div className='eco-img-div-item extra'>
                        <Image
                            className='eco-img-ico'
                            preview = {false}
                            src={'/eco-ic.png'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <span>
                            Для осуществления выбросов загрязняющих веществ в атмосферный воздух на <strong>объектах III категории</strong> получение комплексного экологического разрешения и заполнение декларации о воздействии на окружающую среду не требуются. Юридические лица и индивидуальные предприниматели представляют отчетность о выбросах загрязняющих веществ в атмосферный воздух.
                        </span>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco2;