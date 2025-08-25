"use client";

import { paths } from "@/routes/paths";
import { boardCategories } from "@/config/boardConfig";
import { usePathname } from "next/navigation";
import logo from "../../../public/logo/care-logo.jpg"
import Link from "next/link";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import Image from "next/image";

export default function NavigationHeader() {
  const pathname = usePathname();
  
  const menus = Object.values(boardCategories).map((cat) => ({
    label: cat.label,
    emoji: cat.emoji,
    href: `/board/${cat.name}`,
    children: cat.children.map((child) => ({
      label: child.label,
      emoji: child.emoji,
      href: `/board/${cat.name}/${child.name}`,
    })),
  }));

  return (
    <header className="flex items-center justify-between h-20 w-full px-40 border-b border-gray-300">
      {/* left */}
      <section className="flex gap-[70px]">
        <Link href={paths.root} className="flex items-center text-xl font-bold">
          <Image src={logo} alt="logo" width={30}>

          </Image>
        </Link>
        <div className="flex gap-8 font-semibold">
          {/* 홈 */}
          <Button asChild variant={pathname === paths.root ? "default" : "ghost"}>
            <Link href={paths.root}>홈</Link>
          </Button>

          {/* 소식 */}
          <Button asChild variant={pathname.startsWith(paths.notice) ? "default" : "ghost"}>
            <Link href={paths.notice}>소식</Link>
          </Button>


          {menus.map((menu) => (
            <NavigationMenu key={menu.label}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={pathname.startsWith(menu.href) ? "bg-gray-200" : ""}
                >
                  <Link href={menu.href}> {menu.label} </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-md rounded-md p-3">
                  <ul className="flex flex-col gap-2">
                    {menu.children.map((child) => (
                    <li key={child.href}>
                      <NavigationMenuLink asChild>
                        <Link href={child.href} className="block px-3 py-2 hover:bg-gray-100 rounded-md whitespace-nowrap">
                          {child.label}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    ))}

                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          ))}
        </div>
      </section>

      {/* right */}
      <section className="flex items-center gap-6">
        <Button asChild variant={pathname === paths.mypage ? "default" : "ghost"}>
          <Link href={paths.mypage}>마이페이지</Link>
        </Button>
      </section>
    </header>
  );
}
