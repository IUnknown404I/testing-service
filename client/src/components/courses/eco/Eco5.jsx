import React from 'react';
import {BackTop, Col, Image, Popover, Row, Skeleton, Tree} from "antd";
import {CarryOutOutlined, DownOutlined} from "@ant-design/icons";

const Eco5 = () => {
    const treeData = [
        {
            title: '- по металлургическому производству с использованием оборудования:',
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
                                content={<span>Включая установки непрерывной разливки.</span>}
                                title=''
                                trigger="hover">
                                для производства чугуна или стали
                            </Popover>;
                        </>
                    ),
                    key: '0-0-0',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <>
                            для обработки черных металлов с использованием станов горячей прокатки;
                        </>
                    ),
                    key: '0-0-1',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <>
                            для нанесения защитных распыленных металлических покрытий;
                        </>
                    ),
                    key: '0-0-2',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <>
                            для литейного производства черных металлов;
                        </>
                    ),
                    key: '0-0-3',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <>
                            для производства цветных металлов из руды, концентратов или вторичного сырья;
                        </>
                    ),
                    key: '0-0-4',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <>
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Включая легирование, рафинирование.</span>}
                                title=''
                                trigger="hover">
                                для плавки и разливки цветных металлов
                            </Popover>;
                        </>
                    ),
                    key: '0-0-5',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <>
                            для производства ферросплавов;
                        </>
                    ),
                    key: '0-0-6',
                    switcherIcon: <CarryOutOutlined />,
                },
            ],
        },
        {
            title: '- по производству следующей неметаллической минеральной продукции:',
            key: '0-2',
            icon: <DownOutlined />,
            children: [
                {
                    title:
                    <>
                        <Popover
                            color={"azure"}
                            overlayStyle={{maxWidth: '450px'}}
                            className='pop_text'
                            style={{maxWidth: '200px'}}
                            content={<span>Включая легирование, рафинирование.</span>}
                            title=''
                            trigger="hover">
                            стекло и изделия из стекла
                        </Popover>
                        , включая стекловолокно;
                    </>,
                    key: '0-2-0',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                    <>
                        огнеупорные керамические изделия и строительные керамические материалы;
                    </>,
                    key: '0-2-1',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Кроме огнеупорных керамических изделий и строительных керамических материалов.</span>}
                                title=''
                                trigger="hover">
                                керамические или фарфоровые изделия
                            </Popover>;
                        </>,
                    key: '0-2-2',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            цементный клинкер во вращающихся печах или в других печах;
                        </>,
                    key: '0-2-3',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Негашеная, гашеная.</span>}
                                title=''
                                trigger="hover">
                                известь
                            </Popover>
                            &nbsp;при наличии печей;
                        </>,
                    key: '0-2-4',
                    switcherIcon: <CarryOutOutlined />,
                },
            ],
        },
        {
            title: '- по производству химических веществ и химических продуктов следующих основных органических химических веществ:',
            key: '0-3',
            icon: <DownOutlined />,
            children: [
                {
                    title:
                        <>
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Линейные или циклические, насыщенные или ненасыщенные, алифатические или ароматические.</span>}
                                title=''
                                trigger="hover">
                                простые углеводороды
                            </Popover>;
                        </>,
                    key: '0-3-0',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Спирты, альдегиды, кетоны, карбоновые кислоты, сложные эфиры, ацетаты, простые эфиры, пероксиды, эпоксидные смолы.</span>}
                                title=''
                                trigger="hover">
                                кислородсодержащие углеводороды
                            </Popover>;
                        </>,
                    key: '0-3-1',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            серосодержащие углеводороды;
                        </>,
                    key: '0-3-2',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Амиды, азотистые соединения, нитросоединения или нитратные соединения, нитрилы, цианаты, изоцианаты.</span>}
                                title=''
                                trigger="hover">
                                азотсодержащие углеводороды
                            </Popover>;
                        </>,
                    key: '0-3-3',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            фосфорсодержащие углеводороды;
                        </>,
                    key: '0-3-4',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            галогенированные углеводороды;
                        </>,
                    key: '0-3-5',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            полимеры, химические синтетические волокна и нити на основе целлюлозы;
                        </>,
                    key: '0-3-6',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            синтетический каучук;
                        </>,
                    key: '0-3-7',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            синтетические красители и пигменты;
                        </>,
                    key: '0-3-8',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title:
                        <>
                            поверхностно-активные вещества;
                        </>,
                    key: '0-3-9',
                    switcherIcon: <CarryOutOutlined />,
                },
            ],
        },
        {
            title: '- по производству химических веществ и химических продуктов следующих неорганических веществ:',
            key: '0-4',
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
                                content={<span>Аммиак, хлор или хлористый водород, фтор или фтористый водород, оксиды углерода, соединения серы, оксиды азота, диоксид серы, карбонилхлорид.</span>}
                                title=''
                                trigger="hover">
                                газы
                            </Popover>;
                        </>
                    ),
                    key: '0-4-0',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <>
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Хромовая кислота, фтористоводородная (плавиковая) кислота, фосфорная кислота, азотная кислота, соляная кислота, серная кислота, олеум, сернистая кислота.</span>}
                                title=''
                                trigger="hover">
                                кислоты
                            </Popover>;
                        </>
                    ),
                    key: '0-4-1',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <>
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Гидроксид аммония, гидроксид калия, гидроксид натрия.</span>}
                                title=''
                                trigger="hover">
                                основания
                            </Popover>;
                        </>
                    ),
                    key: '0-4-2',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <>
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Хлорид аммония, хлорат калия, карбонат калия, карбонат натрия.</span>}
                                title=''
                                trigger="hover">
                                соли
                            </Popover>;
                        </>
                    ),
                    key: '0-4-3',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <>
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Карбид кальция, кремний, карбид кремния.</span>}
                                title=''
                                trigger="hover">
                                неметаллы, оксиды металлов или другие неорганические соединения
                            </Popover>;
                        </>
                    ),
                    key: '0-4-4',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <>
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Цианид натрия, цианид калия.</span>}
                                title=''
                                trigger="hover">
                                специальные неорганические химикаты
                            </Popover>;
                        </>
                    ),
                    key: '0-4-5',
                    switcherIcon: <CarryOutOutlined />,
                },
                {
                    title: (
                        <>
                            оксид магния;
                        </>
                    ),
                    key: '0-4-6',
                    switcherIcon: <CarryOutOutlined />,
                },
            ],
        },
        {
            title: '- по производству кокса;',
            key: '0-5',
            switcherIcon: <CarryOutOutlined />,
        },
        {
            title: (
                <> - по добыче сырой нефти и (или)&nbsp;
                    <Popover
                        color={"azure"}
                        overlayStyle={{maxWidth: '450px'}}
                        className='pop_text'
                        style={{maxWidth: '200px'}}
                        content={<span>Включая переработку природного газа.</span>}
                        title=''
                        trigger="hover">
                        природного газа
                    </Popover>;
                </>
            ),
            key: '0-6',
            switcherIcon: <CarryOutOutlined />,
        },
        {
            title: '- по производству нефтепродуктов;',
            key: '0-7',
            switcherIcon: <CarryOutOutlined />,
        },
        {
            title: '- по добыче и (или) обогащению железных руд;',
            key: '0-8',
            switcherIcon: <CarryOutOutlined />,
        },
        {
            title: (
                <> - по добыче и (или) подготовке&nbsp;
                    <Popover
                        color={"azure"}
                        overlayStyle={{maxWidth: '450px'}}
                        className='pop_text'
                        style={{maxWidth: '200px'}}
                        content={<span>Алюминия (боксита), меди, свинца, цинка, олова, марганца, хрома, никеля, кобальта, молибдена, титана, тантала, ванадия, руд драгоценных металлов (золота, серебра, платины) за исключением оловянных руд, титановых руд, хромовых руд, руд и песков драгоценных металлов на россыпных месторождениях.</span>}
                        title=''
                        trigger="hover">
                        руд цветных металлов
                    </Popover>;
                </>
            ),
            key: '0-9',
            switcherIcon: <CarryOutOutlined />,
        },
        {
            title: (
                <> - по обеспечению электрической энергией, газом и паром&nbsp;
                    <Popover
                        color={"azure"}
                        overlayStyle={{maxWidth: '450px'}}
                        className='pop_text'
                        style={{maxWidth: '200px'}}
                        content={<span>С установленной электрической мощностью 250 МВт и более при потреблении в качестве основного твердого и (или) жидкого топлива или с установленной электрической мощностью 500 МВт и более при потреблении в качестве основного газообразного топлива.</span>}
                        title=''
                        trigger="hover">
                        с использованием оборудования
                    </Popover>;
                </>
            ),
            key: '0-10',
            switcherIcon: <CarryOutOutlined />,
        },
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0'}}>
                <Col span={20} offset={2} style={{textAlign: 'center'}}>
                    <h1 style={{fontSize: '25px', fontWeight: 'bold', textDecoration: 'underline'}}>Критерии отнесения объектов, оказывающих значительное негативное воздействие на окружающую среду и относящихся к областям применения наилучших доступных технологий, к объектам I категории</h1>
                </Col>
            </Row>

            <Row style={{marginTop: '50px'}}>
                <Col span={11} offset={1}>
                    <h1 style={{fontSize: '19px', marginBottom: '20px', textAlign: 'center'}}>Осуществление на объекте, оказывающем негативное воздействие на окружающую среду, хозяйственной и (или) иной деятельности:</h1>

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

                <Col offset={0} span={11} className='epi-img-col'>
                    <Image
                        className='epi-img'
                        src={'/catigories.jpg'}
                        placeholder={
                            <Skeleton.Image />
                        }
                        style={{width: '100%', maxWidth: '1100px', marginLeft: '40px'}}
                    />
                </Col>
            </Row>
        </>
    );
};

export default Eco5;