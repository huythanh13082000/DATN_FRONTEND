import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Url } from "../../routers/paths";
import "./menu.css";

type MenuItem = Required<MenuProps>["items"][number];

const MenuHome: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
      onClick: () => {
        console.log("key", key);

        switch (key) {
          case "1":
            navigate(Url.home);
            break;
          case "2":
            navigate(Url.map);
            break;
          case "7":
            navigate(Url.setting);
            break;

          default:
            break;
        }
      },
      style: { color: "#758D96" },
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem(t("Menu.1"), "1", <i className='fa-solid fa-house'></i>),
    getItem(t("Menu.2"), "sub1", <i className='fa-solid fa-people-group'></i>, [
      getItem(t("Menu.2_1"), "8", <i className='fa-solid fa-sitemap'></i>),
      getItem(t("Menu.2_2"), "9", <i className='fa-solid fa-circle-user'></i>),
      getItem(t("Menu.2_3"), "10", <i className='fa-solid fa-key'></i>),
    ]),
    getItem(t("Menu.3"), "2", <i className='fa-solid fa-location-dot'></i>),
    getItem(
      t("Menu.4"),
      "sub2",
      <i className='fa-solid fa-map-location-dot'></i>
    ),
    getItem(t("Menu.5"), "sub3", <i className='fa-solid fa-motorcycle'></i>, [
      getItem(t("Menu.5_1"), "11"),
      getItem(t("Menu.5_2"), "12"),
      getItem(t("Menu.5_3"), "13"),
    ]),
    getItem(t("Menu.6"), "3", <i className='fa-brands fa-product-hunt'></i>, [
      getItem(t("Menu.6_1"), "14"),
      getItem(t("Menu.6_2"), "15"),
      getItem(t("Menu.6_3"), "16"),
      getItem(t("Menu.6_4"), "17"),
      getItem(t("Menu.6_5"), "18"),
    ]),
    getItem(t("Menu.7"), "19", <i className='fa-solid fa-head-side-mask'></i>),
    getItem(
      t("Menu.8"),
      "sub4",
      <i className='fa-solid fa-person-biking'></i>,
      [getItem(t("Menu.8_1"), "29"), getItem(t("Menu.8_2"), "30")]
    ),
    getItem(t("Menu.9"), "4", <i className='fa-solid fa-credit-card'></i>),
    getItem(
      t("Menu.10"),
      "sub5",
      <i className='fa-solid fa-circle-dollar-to-slot'></i>,
      [
        getItem(t("Menu.10_1"), "20"),
        getItem(t("Menu.10_2"), "21"),
        getItem(t("Menu.10_3"), "22"),
        getItem(t("Menu.10_4"), "23"),
        getItem(t("Menu.10_5"), "24"),
      ]
    ),
    getItem(t("Menu.11"), "sub6", <i className='fa-solid fa-headset'></i>, [
      getItem(t("Menu.11_1"), "25"),
      getItem(t("Menu.11_2"), "26"),
    ]),
    getItem(t("Menu.12"), "sub7", <i className='fa-solid fa-bullhorn'></i>, [
      getItem(t("Menu.12_1"), "27"),
      getItem(t("Menu.12_2"), "28"),
    ]),
    getItem(t("Menu.13"), "5", <i className='fa-solid fa-palette'></i>),
    getItem(t("Menu.14"), "6", <i className='fa-solid fa-calendar'></i>),
    getItem(t("Menu.15"), "7", <i className='fa-solid fa-gear'></i>),
  ];

  return (
    <Menu
      style={{ color: "#758D96" }}
      defaultSelectedKeys={["1"]}
      mode='inline'
      theme='light'
      items={items}
    />
  );
};

export default MenuHome;
