"use client"
import Link from "next/link";
import React, { useRef, useState } from "react";
import { menuBtns } from "../../utils/data";
import clsx from "clsx";
import '../../Them-1.scss'

export default function MenuPageList() {

    const [activeName, setActiveName] = useState('Левое меню')
    const linkRef = useRef(null);

    const setBtnActive = (i, title)=> {
        setActiveName(menuBtns[i].title)

        console.log(linkRef);
        if(activeName == title){
          linkRef.current.classList.add('active');
        }else{
          linkRef.current.classList.remove('active');
        }
    }

  return (
    <div className="menu__layout">
      <Link
        href="/"
        className="menu__back block bg-[#fc7a7a] text-[16px] p-[10px] w-max mb-[10px]"
      >
        Закрыть
      </Link>
      <ul className="menu__list flex gap-[15px]">
        {menuBtns?.map((item, i) => (
          <li key={item.id} onClick={() => setBtnActive(i, item.title)}>
            <Link href="" ref={linkRef} className={clsx("menu__link block p-[10px] border border-black", {
              "bg-[#bcb6b6]": activeName == item.title
            })}>
                {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
