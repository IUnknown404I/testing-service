import React from 'react';
import {
    PaperClipOutlined,
    ImportOutlined,
    PieChartOutlined,
    ProfileOutlined,
    BookOutlined,
    LinkOutlined,
    DeploymentUnitOutlined,
} from "@ant-design/icons";
import {Image, Menu, Skeleton} from "antd";
import {NavLink, useHistory} from "react-router-dom";

const { SubMenu } = Menu;

const EcoSubMenu = ({selectedKeys, setCurrentPage, setSwitchToGlossary, setSwitchToLiterature, setSwitchToMaterials, setSwitchToSkeleton, themes, collapsed}) => {
    const history = useHistory();

    const clearSwitches = () => {
        setSwitchToGlossary(false);
        setSwitchToLiterature(false);
        setSwitchToMaterials(false);
        setSwitchToSkeleton(false);
    }

    return (
        <Menu theme="dark"
              mode="inline"
              selectedKeys={selectedKeys}
        >
            <div style={{margin: '10px 0 20px 0'}} className='eco-img-col'>
                {collapsed
                    ?
                    <Image
                        preview = {false}
                        src={'https://courses.umcmrg.ru/img/logo/logo-mini.png'}
                        placeholder={
                            <Skeleton.Image />
                        }
                    />
                    :
                    <Image
                        preview = {false}
                        src={'/images/mrg_inv.png'}
                        placeholder={
                            <Skeleton.Image />
                        }
                    />
                }
            </div>
            <SubMenu key="sub1" icon={<PieChartOutlined />} title="Навигация">
                <Menu.ItemGroup key="g1" title="Тема 1">
                    <Menu.Item key="11" onClick={() => {setCurrentPage(themes[0][0]); clearSwitches();}}>Охрана окружающей среды</Menu.Item>
                    <Menu.Item key="12" onClick={() => {setCurrentPage(themes[0][1]); clearSwitches();}}>Охрана атмосферного воздуха</Menu.Item>
                    <Menu.Item key="13" onClick={() => {setCurrentPage(themes[0][3]); clearSwitches();}}>Благополучие населения</Menu.Item>
                    <Menu.Item key="14" onClick={() => {setCurrentPage(themes[0][4]); clearSwitches();}}>Права и обязанности</Menu.Item>
                    <Menu.Item key="15" onClick={() => {setCurrentPage(themes[0][5]); clearSwitches();}}>Категорийность объектов</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Тема 2">
                    <Menu.Item key="111" onClick={() => {setCurrentPage(themes[1][0]); clearSwitches();}}>Система государственного управления</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g3" title="Тема 3">
                    <Menu.Item key="121" onClick={() => {setCurrentPage(themes[2][0]); clearSwitches();}}>Система документации</Menu.Item>
                    <Menu.Item key="122" onClick={() => {setCurrentPage(themes[2][1]); clearSwitches();}}>Документация - атмосферный воздух</Menu.Item>
                    <Menu.Item key="123" onClick={() => {setCurrentPage(themes[2][2]); clearSwitches();}}>Документация - водные объекты</Menu.Item>
                    <Menu.Item key="124" onClick={() => {setCurrentPage(themes[2][3]); clearSwitches();}}>Документация - обращение с отходами</Menu.Item>
                    <Menu.Item key="125" onClick={() => {setCurrentPage(themes[2][4]); clearSwitches();}}>Государственная статистическая отчетность</Menu.Item>
                    <Menu.Item key="126" onClick={() => {setCurrentPage(themes[2][5]); clearSwitches();}}>Статистическая отчетность предприятия</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="sub2" icon={<ImportOutlined />} title="Вернуться">
                <Menu.Item onClick={() => {history.push('/profile')}} key="21">Профиль</Menu.Item>
                <Menu.Item onClick={() => {history.push('/test_choose')}} key="22">Выбор тестов</Menu.Item>
                <Menu.Item onClick={() => {history.push('/courses')}} key="23">Выбор курсов</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<LinkOutlined />} title="Ссылки">
                <Menu.Item key="31">
                    <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p1-2" }} target="_blank">
                        Отходы I-V классов опасности
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="32">
                    <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p2" }} target="_blank">
                        Паспортизация отходов
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="33">
                    <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p3" }} target="_blank">
                        Оператор по обращению с отходами
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="34">
                    <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p4" }} target="_blank">
                        Обращение с отходами I, II классов
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="35">
                    <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p5" }} target="_blank">
                        Особенности обращения с отходами I, II классов
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="36">
                    <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p6" }} target="_blank">
                        Требования к обращению с отходами
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="37">
                    <NavLink to={{ pathname: "https://courses.umcmrg.ru/ecology1/t1p7" }} target="_blank">
                        Порядок учёта, транспортирования отходов
                    </NavLink>
                </Menu.Item>
            </SubMenu>
            <Menu.Item
                key="7"
                icon={<DeploymentUnitOutlined />}
                onClick={() => {
                    clearSwitches();
                    setSwitchToSkeleton(true);
                }}
            >
                Структура
            </Menu.Item>
            <Menu.Item
                key="5"
                icon={<BookOutlined />}
                onClick={() => {
                    clearSwitches();
                    setSwitchToLiterature(true);
                }}
            >
                Литература
            </Menu.Item>
            <Menu.Item
                key="4"
                icon={<ProfileOutlined />}
                onClick={() => {
                    clearSwitches();
                    setSwitchToGlossary(true);
                }}
            >
                Глоссарий
            </Menu.Item>
            <Menu.Item
                key="6"
                icon={<PaperClipOutlined />}
                onClick={() => {
                    clearSwitches();
                    setSwitchToMaterials(true);
                }}
            >
                Материалы
            </Menu.Item>
        </Menu>
    );
};

export default EcoSubMenu;