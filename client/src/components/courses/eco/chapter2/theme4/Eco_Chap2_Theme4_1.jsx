import React from 'react';
import {Row, Col, Image, Skeleton, Popover} from 'antd';
import { BackTop } from 'antd';

const Eco_Chap2_Theme4_1 = () => {
    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}>Паспортизация отходов I-IV класса опасности</h1>
                </Col>
            </Row>

            <Row>
                <Col offset={2} span={12} className='eco-container-left-border eco-img-col'>
                    <div>
                        <h1 style={{fontSize: '1.45rem'}}>1. На <strong style={{fontWeight: 'bold'}}>отходы I − IV класса</strong> опасности должен быть составлен паспорт</h1>
                        <h1 style={{fontSize: '1.45rem'}}>2.&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '900px'}}
                                className='pop_text'
                                style={{maxWidth: '350px'}}
                                content={<span>В соответствии с требованиями порядка паспортизации.</span>}
                                title=''
                                trigger="hover">
                                <strong style={{fontWeight: 'bold'}}>Паспорт отходов I − IV классов опасности</strong>
                            </Popover>
                            &nbsp;составляется на основании данных о составе и свойствах этих отходов, а также оценки их опасности в зависимости от степени негативного воздействия на окружающую среду. Паспорт составляется индивидуальными предпринимателями и юридическими лицами, в процессе деятельности которых образуются отходы I − IV классов опасности
                        </h1>
                        <h1 style={{fontSize: '1.45rem'}}>3. Приказом Росприроднадзора от 22.05.2017 № 242 утвержден&nbsp;
                            <a target="_blank" href='https://rpn.gov.ru/fkko/?states=Все&hazardClass%5B%5D=1'><strong style={{fontWeight: 'bold'}}>федеральный классификационный каталог отходов</strong></a>
                        </h1>

                        <div className='eco-img-div-item extra' style={{marginTop: '30px'}}>
                            <Image
                                style={{width: '150px', marginRight: '0px', marginLeft: '-10px'}}
                                preview = {false}
                                src={'/images/doc-green.png'}
                                placeholder={
                                    <Skeleton.Image />
                                }
                            />
                            <span style={{fontSize: '1.25rem'}}>
                            <strong style={{fontWeight: 'bold'}}>«Паспорт отходов»</strong> − документ, удостоверяющий принадлежность отходов к отходам соответствующего вида и класса опасности, содержащий сведения об их составе.
                        </span>
                        </div>
                    </div>
                </Col>

                <Col offset={1} span={7} className='eco-img-col'>
                    <Image
                        src={'/images/t.png'}
                        preview={false}
                        placeholder={
                            <Skeleton.Image />
                        }
                    />
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap2_Theme4_1;