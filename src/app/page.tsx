import Cards from "@/components/Cards";
import Trending from "@/components/Trending";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Badge,
  Bell,
  Home,
  LayoutDashboard,
  LineChart,
  Package,
  Search,
  ShoppingCart,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashBoard() {
  return (
    <main className="main min-h-screen w-full ">
      <div className="flex-1 nav h-full bg-blue-400">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:text-primary"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:text-primary"
          >
            <ShoppingCart className="h-4 w-4" />
            Orders
            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              6
            </Badge>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
          >
            <Package className="h-4 w-4" />
            Products{" "}
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:text-primary"
          >
            <Users className="h-4 w-4" />
            Customers
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:text-primary"
          >
            <LineChart className="h-4 w-4" />
            Analytics
          </Link>
        </nav>
      </div>
      <div className="logo flex justify-center items-center p-2  bg-blue-400 ">
        <LayoutDashboard
        color="white"
        size={80}
        
        />
      </div>
      <header className="flex flex-col header  w-full  items-center justify-between px-4 py-2 bg-white shadow-lg">
        <div className="flex gap-20 w-full">
          <div className="relative ml-auto flex-1 ">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 " />
            <Input
              type="search"
              placeholder="Search..."
              className="w-2/4  rounded-lg bg-background pl-8"
            />
          </div>
          <div className="flex gap-2 justify-center items-center">
            <Bell />
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <span>Name</span>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-1 w-full items-center gap-4">
            <Avatar className="hidden h-16 w-16 sm:flex">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-4">
              <h2>Hello</h2>
              <span>User</span>
            </div>
          </div>
          <div className="flex gap-8">
            <Button>New</Button>
            <Button>Upload</Button>
            <Button>Share</Button>
          </div>
        </div>
      </header>
      <div className="contenido p-4 bg-gray-200">
        <div className="proyects">
          <span className="font-bold text-xl">Your Proyects</span>
          <div className="grid grid-cols-auto-fill-100 gap-4 p-4">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
        <div className="announcements p-6 ">
          <span className="font-bold text-xl">Announcements</span>
          <div className="bg-white rounded-r-md shadow-sm flex  flex-col gap-4 p-4 text-xs">
            <div className="p-4 border-b-2">
              <h2 className="font-bold">Title</h2>
              <span>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                et felis fringilla, fermentum dui sit amet, lacinia magna.
              </span>
            </div>
            <div className="p-4 border-b-2">
              <h2 className="font-bold">Title</h2>
              <span>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                et felis fringilla, fermentum dui sit amet, lacinia magna.
              </span>
            </div>
            <div className="p-4 ">
              <h2 className="font-bold">Title</h2>
              <span>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                et felis fringilla, fermentum dui sit amet, lacinia magna.
              </span>
            </div>
          </div>
        </div>
        <div className="trending p-6">
          <span className="font-bold text-xl">Trending</span>
          <Trending />
        </div>
      </div>
    </main>
  );
}
