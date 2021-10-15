import React from 'react';
import {Image, Col, Row, Popover, Skeleton} from "antd";


const Eco2 = () => {

    return (
        <>
            <Row style={{margin: '20px 0 50px'}}>
                <Col span={20} offset={2}>
                    <h1 className='slide-heading'>Общие требования к хозяйственной и иной деятельности, оказывающей вредное воздействие на атмосферный воздух</h1>
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