import React, {useEffect} from 'react';
import {BackTop, Button, Col, Row} from "antd";
import {LeftCircleTwoTone} from "@ant-design/icons";
import LiteratureParagraph from "../../UI/literature_paragraph/Literature_Paragraph";

const Literature = ({setSwitchToLiterature}) => {
    useEffect(() => {
        window.scrollTo(0,1);
    }, []);

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 40px'}}>
                <Col span={2} offset={1} style={{textAlign: 'center'}}>
                    <Button
                        onClick={() => {setSwitchToLiterature(false)}}
                        icon={<LeftCircleTwoTone />}
                        className='eco-pagination-but'
                        size="large"
                    >
                        Вернуться
                    </Button>
                </Col>
                <Col span={16} offset={1} style={{textAlign: 'center'}}>
                    <h1 style={{fontSize: '27px', fontWeight: 'bold', color: 'darkblue'}}>Список литературы</h1>
                </Col>
            </Row>

            <Row>
                <Col offset={2} span={20} className='eco-glossary eco-literature'>
                    <LiteratureParagraph twoToneColor={'darkred'} text='Кодекс Российской Федерации об административных правонарушениях от 30.12.2001 N 195-ФЗ (ред. от 01.07.2021)'/>
                    <LiteratureParagraph twoToneColor={'darkred'} text='Закон РФ от 21.02.1992 N 2395-1 (ред. от 11.06.2021) "О недрах"'/>
                    <br/>

                    <LiteratureParagraph text='Федеральный закон от 10.01.2002 N 7-ФЗ (ред. от 02.07.2021) "Об охране окружающей среды"'/>
                    <LiteratureParagraph text='Федеральный закон от 04.05.1999 N 96-ФЗ (ред. от 11.06.2021) "Об охране атмосферного воздуха"'/>
                    <LiteratureParagraph text='Федеральный закон от 24.06.1998 N 89-ФЗ (ред. от 02.07.2021) "Об отходах производства и потребления"'/>
                    <LiteratureParagraph text='Федеральный закон от 30.03.1999 N 52-ФЗ (ред. от 02.07.2021) "О санитарно-эпидемиологическом благополучии населения"'/>
                    <LiteratureParagraph text='Федеральный закон от 21.07.2014 N 219-ФЗ (ред. от 26.07.2019) "О внесении изменений в Федеральный закон "Об охране окружающей среды" и отдельные законодательные акты Российской Федерации"'/>
                    <LiteratureParagraph text='Федеральный закон от 14.03.1995 N 33-ФЗ (ред. от 11.06.2021) "Об особо охраняемых природных территориях"'/>
                    <LiteratureParagraph text='Постановление Правительства РФ от 13.09.2016 N 913 (ред. от 24.01.2020) "О ставках платы за негативное воздействие на окружающую среду и дополнительных коэффициентах"'/>
                    <LiteratureParagraph text='Постановление Правительства РФ от 03.03.2018 N 222 (ред. от 21.12.2018) "Об утверждении Правил установления санитарно-защитных зон и использования земельных участков, расположенных в границах санитарно-защитных зон"'/>
                    <LiteratureParagraph text='Постановление Правительства РФ от 03.03.2017 N 255 (ред. от 17.08.2020) "Об исчислении и взимании платы за негативное воздействие на окружающую среду" (вместе с "Правилами исчисления и взимания платы за негативное воздействие на окружающую среду")'/>
                    <LiteratureParagraph text='Постановление Правительства РФ от 29.06.2018 N 758 (ред. от 16.02.2019) "О ставках платы за негативное воздействие на окружающую среду при размещении твердых коммунальных отходов IV класса опасности (малоопасные) и внесении изменений в некоторые акты Правительства Российской Федерации"'/>
                    <LiteratureParagraph text='Постановление Правительства РФ от 09.12.2020 N 2055 "О предельно допустимых выбросах, временно разрешенных выбросах, предельно допустимых нормативах вредных физических воздействий на атмосферный воздух и разрешениях на выбросы загрязняющих веществ в атмосферный воздух" (вместе с "Положением о предельно допустимых выбросах, временно разрешенных выбросах, предельно допустимых нормативах вредных физических воздействий на атмосферный воздух и разрешениях на выбросы загрязняющих веществ в атмосферный воздух")'/>
                    <LiteratureParagraph text='Постановление Главного государственного санитарного врача РФ от 25.09.2007 N 74 (ред. от 25.04.2014) "О введении в действие новой редакции санитарно-эпидемиологических правил и нормативов СанПиН 2.2.1/2.1.1.1200-03 "Санитарно-защитные зоны и санитарная классификация предприятий, сооружений и иных объектов"'/>
                    <LiteratureParagraph text='Приказ Минприроды России от 11.08.2020 N 581 "Об утверждении методики разработки (расчета) и установления нормативов допустимых выбросов загрязняющих веществ в атмосферный воздух"'/>
                    <LiteratureParagraph text='Приказ Росприроднадзора от 22.05.2017 N 242 (ред. от 29.03.2021) "Об утверждении Федерального классификационного каталога отходов"'/>
                    <LiteratureParagraph text='Приказ Минприроды России от 28.02.2018 N 74 "Об утверждении требований к содержанию программы производственного экологического контроля, порядка и сроков представления отчета об организации и о результатах осуществления производственного экологического контроля"'/>
                    <LiteratureParagraph text='Приказ Минприроды России от 14.06.2018 N 261 (ред. от 23.06.2020) "Об утверждении формы отчета об организации и о результатах осуществления производственного экологического контроля"'/>

                    <br/>
                    <LiteratureParagraph twoToneColor={'#1890ff'} ident='ГОСТ Р 56061-2014 ' text='ГОСТ Р 56061-2014 «Производственный экологический контроль. Требования к программе производственного экологического контроля»'/>
                    <LiteratureParagraph twoToneColor={'#1890ff'} ident='ГОСТ Р 56062-2014 ' text='ГОСТ Р 56062-2014 «Производственный экологический контроль. Общие положения»'/>
                    <LiteratureParagraph twoToneColor={'#1890ff'} ident='ГОСТ Р 56059-2014 ' text='ГОСТ Р 56059-2014 «Производственный экологический мониторинг. Общие положения»'/>
                    <LiteratureParagraph twoToneColor={'#1890ff'} ident='ГОСТ Р 56063-2014 ' text='ГОСТ Р 56063-2014 «Производственный экологический мониторинг. Требования к программам производственного экологического мониторинга»'/>
                    <LiteratureParagraph twoToneColor={'#1890ff'} ident='ГОСТ Р 56060-2014 ' text='ГОСТ Р 56060-2014 «Производственный экологический мониторинг. Мониторинг состояния и загрязнения окружающей среды на территориях объектов размещения отходов»'/>
                </Col>
            </Row>
        </>
    );
};

export default Literature;