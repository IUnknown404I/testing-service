import React from "react";
import Eco_chap1_theme1_1 from "../chapter1/theme1/Eco_chap1_theme1_1";
import Eco_chap1_theme1_2 from "../chapter1/theme1/Eco_chap1_theme1_2";
import Eco_chap1_theme1_2_1 from "../chapter1/theme1/Eco_chap1_theme1_2_1";
import Eco_chap1_theme1_3 from "../chapter1/theme1/Eco_chap1_theme1_3";
import Eco_chap1_theme1_4 from "../chapter1/theme1/Eco_chap1_theme1_4";
import Eco_chap1_theme1_5 from "../chapter1/theme1/Eco_chap1_theme1_5";
import Eco_chap1_theme1_5_1 from "../chapter1/theme1/Eco_chap1_theme1_5_1";
import Eco_chap1_theme1_5_2 from "../chapter1/theme1/Eco_chap1_theme1_5_2";
import EcoChap1Theme2_1 from "../chapter1/theme2/Eco_chap1_theme2_1";
import EcoChap1Theme3_1 from "../chapter1/theme3/EcoChap1Theme3_1";
import EcoChap1Theme3_2 from "../chapter1/theme3/EcoChap1Theme3_2";
import EcoChap1Theme3_3 from "../chapter1/theme3/EcoChap1Theme3_3";
import EcoChap1Theme3_4 from "../chapter1/theme3/EcoChap1Theme3_4";
import EcoChap1Theme3_5 from "../chapter1/theme3/EcoChap1Theme3_5";
import EcoChap1Theme3_6 from "../chapter1/theme3/EcoChap1Theme3_6";
import Eco_Chap2_Theme1_1 from "../chapter2/theme1/Eco_Chap2_Theme1_1";
import Eco_Chap2_Theme1_2 from "../chapter2/theme1/Eco_Chap2_Theme1_2";
import Eco_Chap2_Theme1_3 from "../chapter2/theme1/Eco_Chap2_Theme1_3";
import Eco_Chap2_Theme1_4 from "../chapter2/theme1/Eco_Chap2_Theme1_4";
import Eco_Chap2_Theme2_1 from "../chapter2/theme2/Eco_Chap2_Theme2_1";
import Eco_Chap2_Theme2_2 from "../chapter2/theme2/Eco_Chap2_Theme2_2";
import Eco_Chap2_Theme3_1 from "../chapter2/theme3/Eco_Chap2_Theme3_1";
import Eco_Chap2_Theme4_1 from "../chapter2/theme4/Eco_Chap2_Theme4_1";
import Eco_Chap2_Theme4_2 from "../chapter2/theme4/Eco_Chap2_Theme4_2";
import Eco_Chap2_Theme4_3 from "../chapter2/theme4/Eco_Chap2_Theme4_3";
import Eco_Chap2_Theme5_1 from "../chapter2/theme5/Eco_Chap2_Theme5_1";
import Eco_Chap2_Theme5_2 from "../chapter2/theme5/Eco_Chap2_Theme5_2";
import Eco_Chap2_Theme5_3 from "../chapter2/theme5/Eco_Chap2_Theme5_3";
import Eco_Chap2_Theme5_4 from "../chapter2/theme5/Eco_Chap2_Theme5_4";
import Eco_Chap2_Theme5_5 from "../chapter2/theme5/Eco_Chap2_Theme5_5";
import Eco_Chap2_Theme5_6 from "../chapter2/theme5/Eco_Chap2_Theme5_6";
import Eco_Chap3_Theme2_1 from "../chapter3/theme2/Eco_Chap3_Theme2_1";
import Eco_Chap3_Theme2_2 from "../chapter3/theme2/Eco_Chap3_Theme2_2";
import Eco_Chap3_Theme1_1 from "../chapter3/theme1/Eco_Chap3_Theme1_1";
import Eco_Chap3_Theme1_2 from "../chapter3/theme1/Eco_Chap3_Theme1_2";
import Eco_Chap3_Theme1_3 from "../chapter3/theme1/Eco_Chap3_Theme1_3";
import Eco_Chap3_Theme1_4 from "../chapter3/theme1/Eco_Chap3_Theme1_4";
import Eco_Chap3_Theme1_5 from "../chapter3/theme1/Eco_Chap3_Theme1_5";


export class FirstChapter {
    id = 1;
    themes = [
        [
            <Eco_chap1_theme1_1/>,   <Eco_chap1_theme1_2/>,
            <Eco_chap1_theme1_2_1/>, <Eco_chap1_theme1_3/>,
            <Eco_chap1_theme1_4/>,   <Eco_chap1_theme1_5/>,
            <Eco_chap1_theme1_5_1/>, <Eco_chap1_theme1_5_2/>,
        ],
        [
            <EcoChap1Theme2_1/>,
        ],
        [
            <EcoChap1Theme3_1/>, <EcoChap1Theme3_2/>,
            <EcoChap1Theme3_3/>, <EcoChap1Theme3_4/>,
            <EcoChap1Theme3_5/>, <EcoChap1Theme3_6/>,
        ],
    ];
    titles = [
        [
            '1.1 Федеральный закон от 10.01.2002 N 7-ФЗ "Об охране окружающей среды"',
            '1.2 Федеральный закон от 04.05.1999 N 96-ФЗ "Об охране атмосферного воздуха"',
            '1.3 Федеральный закон от 04.05.1999 N 96-ФЗ "Об охране атмосферного воздуха"',
            '1.4 Федеральный закон от 30.03.1999 N 52-ФЗ (ред. от 02.07.2021) "О санитарно-эпидемиологическом благополучии населения"',
            '1.5 Права и обязанности граждан, индивидуальных предпринимателей и юридических лиц',
            '1.6 Категорийность объектов по степени негативного воздействия на окружающую среду',
            '1.7 Категорийность объектов по степени негативного воздействия на окружающую среду',
            '1.8 Категорийность объектов по степени негативного воздействия на окружающую среду',
        ],
        [
            '2.1 Система государственного управления в области охраны окружающей среды',
        ],
        [
            '3.1 Организационно-распорядительные документы',
            '3.2 Документация по охране атмосферного воздуха',
            '3.3 Документация по охране водных объектов',
            '3.4 Документация по обращению с отходами',
            '3.5 Государственная статистическая отчетность',
            '3.6 Статистическая отчетность предприятия',
        ],
    ];
    getSelectedMenuItem = (themes, currentPage, switchToGlossary, switchToLiterature, switchToMaterials, switchToSkeleton) => {
        if(!switchToGlossary && !switchToLiterature && !switchToMaterials && !switchToSkeleton) {
            switch (currentPage) {
                case themes[0][0]: return('11');
                case themes[0][1]: return('12');
                case themes[0][2]: return('12');
                case themes[0][3]: return('13');
                case themes[0][4]: return('14');
                case themes[0][5]: return('15');
                case themes[0][6]: return('15');
                case themes[0][7]: return('15');

                case themes[1][0]: return('111');

                case themes[2][0]: return('121');
                case themes[2][1]: return('122');
                case themes[2][2]: return('123');
                case themes[2][3]: return('124');
                case themes[2][4]: return('125');
                case themes[2][5]: return('126');
            }
        } else {
            if (switchToGlossary) return '4';
            if (switchToLiterature) return '5';
            if (switchToMaterials) return '6';
            if (switchToSkeleton) return '7';
        }
    }
}

export class SecondChapter {
    id = 2;
    themes = [
        [
            <Eco_Chap2_Theme1_1/>,   <Eco_Chap2_Theme1_2/>,
            <Eco_Chap2_Theme1_3/>,   <Eco_Chap2_Theme1_4/>,
        ],
        [
            <Eco_Chap2_Theme2_1/>,   <Eco_Chap2_Theme2_2/>,
        ],
        [
            <Eco_Chap2_Theme3_1/>,
        ],
        [
            <Eco_Chap2_Theme4_1/>,   <Eco_Chap2_Theme4_2/>,
            <Eco_Chap2_Theme4_3/>,
        ],
        [
            <Eco_Chap2_Theme5_1/>,   <Eco_Chap2_Theme5_2/>,
            <Eco_Chap2_Theme5_3/>,   <Eco_Chap2_Theme5_4/>,
            <Eco_Chap2_Theme5_5/>,   <Eco_Chap2_Theme5_6/>,
        ],
    ];
    titles = [
        [
            '1.1 Производственный экологический контроль',
            '1.2 Основные требования экологического контроля',
            '1.3 Категории экологического контроля',
            '1.4 Проведение производственного экологического контроля',
        ],
        [
            '2.1 Требования к предприятиям',
            '2.2 Требования охраны атмосферного воздуха',
        ],
        [
            '3.1 Требования, предъявляемые законодательством в области рационального использования и охраны водных объектов',
        ],
        [
            '4.1 Порядок отнесения отходов к классу опасности для окружающей среды',
            '4.2 Требования к лицам, которые допущены к отходам I - IV классов опасности',
            '4.3 Полномочия органов местного самоуправления в области обращения с твердыми коммунальными отходами',
        ],
        [
            '5.1 Общие вопросы исчисления и уплаты платы за негативное воздействие на окружающую среду',
            '5.2 Плата за размещение отходов и выбросы загрязняющих веществ в атмосферный воздух',
            '5.3 Коэффициенты к ставкам платы',
            '5.4 Правила исчисления и взимания платы за негативное воздействие на окружающую среду',
            '5.5 Исчисление и взимание платы за негативное воздействие на окружающую среду',
            '5.6 Административная ответственность',
        ],
    ];
    getSelectedMenuItem = (themes, currentPage, switchToGlossary, switchToLiterature, switchToMaterials, switchToSkeleton) => {
        if(!switchToGlossary && !switchToLiterature && !switchToMaterials && !switchToSkeleton) {
            switch (currentPage) {
                case themes[0][0]: return('211');
                case themes[0][1]: return('212');
                case themes[0][2]: return('213');
                case themes[0][3]: return('214');

                case themes[1][0]: return('221');
                case themes[1][1]: return('222');

                case themes[2][0]: return('231');

                case themes[3][0]: return('241');
                case themes[3][1]: return('242');
                case themes[3][2]: return('243');

                case themes[4][0]: return('251');
                case themes[4][1]: return('252');
                case themes[4][2]: return('253');
                case themes[4][3]: return('254');
                case themes[4][4]: return('255');
                case themes[4][5]: return('256');
            }
        } else {
            if (switchToGlossary) return '4';
            if (switchToLiterature) return '5';
            if (switchToMaterials) return '6';
            if (switchToSkeleton) return '7';
        }
    }
}

export class ThirdChapter {
    id = 3;
    themes = [
        [
            <Eco_Chap3_Theme1_1/>,   <Eco_Chap3_Theme1_2/>,
            <Eco_Chap3_Theme1_3/>,   <Eco_Chap3_Theme1_4/>,
            <Eco_Chap3_Theme1_5/>,
        ],
        [
            <Eco_Chap3_Theme2_1/>,   <Eco_Chap3_Theme2_2/>,
        ],
    ];
    titles = [
        [
            '1.1 Обеспечение экологической безопасности при обращении с опасными отходами',
            '1.2 Общественный контроль',
            '1.3 Государственный экологический надзор',
            '1.4 Права должностных лиц органов государственного экологического надзора. Объекты государственного экологического надзора',
            '1.5 Действия эколога при проведении проверки предприятия',
        ],
        [
            '2.1 Административная ответственность за совершение экологических правонарушений',
            '2.2 Экологические преступления',
        ],
    ];
    getSelectedMenuItem = (themes, currentPage, switchToGlossary, switchToLiterature, switchToMaterials, switchToSkeleton) => {
        if(!switchToGlossary && !switchToLiterature && !switchToMaterials && !switchToSkeleton) {
            switch (currentPage) {
                case themes[0][0]: return('111');
                case themes[0][1]: return('112');
                case themes[0][2]: return('113');
                case themes[0][3]: return('114');
                case themes[0][4]: return('115');

                case themes[1][0]: return('121');
                case themes[1][1]: return('122');
            }
        } else {
            if (switchToGlossary) return '4';
            if (switchToLiterature) return '5';
            if (switchToMaterials) return '6';
            if (switchToSkeleton) return '7';
        }
    }
}