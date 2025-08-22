"use client";

import { paths } from "@/routes/paths";
import { usePathname } from "next/navigation";
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

export default function NavigationHeader() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between h-20 w-full px-40 border-b border-gray-300">
      {/* left */}
      <section className="flex gap-[70px]">
        <Link href={paths.root} className="flex items-center text-xl font-bold">
          로고
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

          {/* 함께 겪는 이야기 (호버 드롭다운) */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={pathname.startsWith(paths.stories.root) ? "bg-gray-200" : ""}
                >
                  <Link href={paths.stories.root}>함께 겪는 이야기</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-md rounded-md p-3">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href={paths.stories.stroke} className="block px-3 py-2 hover:bg-gray-100 rounded-md">
                          뇌졸중
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href={paths.stories.sci} className="block px-3 py-2 hover:bg-gray-100 rounded-md">
                          척수손상
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* 함께 극복하기 (호버 드롭다운) */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={pathname.startsWith(paths.recovery.root) ? "bg-gray-200" : ""}
                >
                  <Link href={paths.recovery.root}>함께 극복하기</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-md rounded-md p-3">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href={paths.recovery.ot} className="block px-3 py-2 hover:bg-gray-100 rounded-md">
                          작업치료
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href={paths.recovery.pt} className="block px-3 py-2 hover:bg-gray-100 rounded-md">
                          물리치료
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href={paths.recovery.st} className="block px-3 py-2 hover:bg-gray-100 rounded-md">
                          언어치료
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
