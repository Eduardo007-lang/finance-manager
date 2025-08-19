import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import  userCircleIcon from "@/assets/user-circle.svg";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 px-8">
      <h1 className="text-2xl font-bold text-[#131313]">Finance Manager</h1>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img src={userCircleIcon} className="cursor-pointer" alt="icon" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>Dashboard</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

export default Header;
