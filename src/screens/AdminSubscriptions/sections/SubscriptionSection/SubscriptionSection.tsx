import { EyeIcon, PencilIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

// Define the user data structure
interface User {
  id: string;
  name: string;
  email: string;
  status: string;
  type: string;
  registrationDate: string;
  license: string;
  checked: boolean;
}

export const SubscriptionSection = (): JSX.Element => {
  // Sample data based on the image
  const users: User[] = [
    {
      id: "101",
      name: "Andy Smith",
      email: "andy@reddit.com",
      status: "Active",
      type: "Active",
      registrationDate: "May 20 2025",
      license: "101",
      checked: true,
    },
    {
      id: "102",
      name: "Andy Smith",
      email: "andy@reddit.com",
      status: "Active",
      type: "Active",
      registrationDate: "May 20 2025",
      license: "102",
      checked: true,
    },
    {
      id: "103",
      name: "Andy Smith",
      email: "andy@reddit.com",
      status: "Active",
      type: "Active",
      registrationDate: "May 20 2025",
      license: "103",
      checked: true,
    },
    {
      id: "104",
      name: "Andy Smith",
      email: "andy@reddit.com",
      status: "Active",
      type: "Active",
      registrationDate: "May 20 2025",
      license: "104",
      checked: true,
    },
    {
      id: "105",
      name: "Andy Smith",
      email: "andy@reddit.com",
      status: "Active",
      type: "Active",
      registrationDate: "May 20 2025",
      license: "105",
      checked: true,
    },
    {
      id: "106",
      name: "Andy Smith",
      email: "andy@reddit.com",
      status: "Active",
      type: "Active",
      registrationDate: "May 20 2025",
      license: "106",
      checked: true,
    },
    {
      id: "107",
      name: "Andy Smith",
      email: "andy@reddit.com",
      status: "Active",
      type: "Active",
      registrationDate: "May 20 2025",
      license: "107",
      checked: true,
    },
    {
      id: "108",
      name: "Andy Smith",
      email: "andy@reddit.com",
      status: "Active",
      type: "Active",
      registrationDate: "May 20 2025",
      license: "108",
      checked: false,
    },
    {
      id: "109",
      name: "Andy Smith",
      email: "andy@reddit.com",
      status: "Active",
      type: "Active",
      registrationDate: "May 20 2025",
      license: "109",
      checked: false,
    },
    {
      id: "110",
      name: "Andy Smith",
      email: "andy@reddit.com",
      status: "Active",
      type: "Active",
      registrationDate: "May 20 2025",
      license: "110",
      checked: false,
    },
    {
      id: "111",
      name: "Andy Smith",
      email: "andy@reddit.com",
      status: "Active",
      type: "Active",
      registrationDate: "May 20 2025",
      license: "111",
      checked: false,
    },
  ];

  // Column headers with sorting indicators
  const renderSortIndicator = () => (
    <div className="relative w-2 h-[14.67px]">
      <div className="relative h-[15px]">
        <img
          className="absolute w-2 h-2 top-0 left-0"
          alt="Line rounded chevron"
          src="https://c.animaapp.com/oNH5aJml/img/line-rounded-chevron-right.svg"
        />
        <img
          className="absolute w-2 h-2 top-[7px] left-0"
          alt="Line rounded chevron"
          src="https://c.animaapp.com/oNH5aJml/img/line-rounded-chevron-right-1.svg"
        />
      </div>
    </div>
  );

  return (
    <div className="w-full py-4">
      <Table>
        <TableHeader>
          <TableRow className="border-b">
            <TableHead className="w-16">
              <div className="flex items-center gap-1.5">
                <div className="font-medium text-[#007ac1] text-xl leading-[10px] whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0]">
                  ID
                </div>
                {renderSortIndicator()}
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1.5">
                <div className="font-medium text-[#007ac1] text-xl leading-[10px] whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0]">
                  Name
                </div>
                {renderSortIndicator()}
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1.5">
                <div className="font-medium text-[#007ac1] text-xl leading-[10px] whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0]">
                  Contact
                </div>
                {renderSortIndicator()}
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1.5">
                <div className="font-medium text-[#007ac1] text-xl leading-[10px] whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0]">
                  Status
                </div>
                {renderSortIndicator()}
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1.5">
                <div className="font-medium text-[#007ac1] text-xl leading-[10px] whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0]">
                  Type
                </div>
                {renderSortIndicator()}
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1.5">
                <div className="font-medium text-[#007ac1] text-xl leading-[10px] whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0]">
                  Registration Date
                </div>
                {renderSortIndicator()}
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1.5">
                <div className="font-medium text-[#007ac1] text-xl leading-[10px] whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0]">
                  N License
                </div>
                {renderSortIndicator()}
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center">
                <div className="font-medium text-[#007ac1] text-xl leading-[10px] whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0]">
                  Manage user
                </div>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user.id} className="h-14">
              <TableCell className="py-2">
                <div className="flex items-center gap-1.5">
                  <Checkbox
                    checked={user.checked}
                    className={`w-3 h-3 rounded-sm ${user.checked ? "bg-[#007ac1]" : "border-[0.6px] border-solid border-[#007ac1]"}`}
                  />
                  <span className="font-normal text-black text-base leading-[14px] [font-family:'Inter',Helvetica] tracking-[0] ml-2">
                    {user.id}
                  </span>
                </div>
              </TableCell>
              <TableCell className="py-2">
                <div className="flex items-center">
                  <img
                    className="w-8 h-7 mr-2"
                    alt="Avatar circle"
                    src={`/img/avatar-circle${index === 0 ? "" : `-${index + 1}`}.svg`}
                  />
                  <span className="font-normal text-black text-base leading-[14px] [font-family:'Inter',Helvetica] tracking-[0]">
                    {user.name}
                  </span>
                </div>
              </TableCell>
              <TableCell className="py-2">
                <a
                  className="font-normal text-black text-base tracking-[0] leading-[14px] underline"
                  href={`mailto:${user.email}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {user.email}
                </a>
              </TableCell>
              <TableCell className="py-2">
                <span className="font-normal text-black text-base leading-[14px] [font-family:'Inter',Helvetica] tracking-[0]">
                  {user.status}
                </span>
              </TableCell>
              <TableCell className="py-2">
                <span className="font-normal text-black text-base leading-[14px] [font-family:'Inter',Helvetica] tracking-[0]">
                  {user.type}
                </span>
              </TableCell>
              <TableCell className="py-2">
                <span className="font-normal text-black text-base leading-[14px] [font-family:'Inter',Helvetica] tracking-[0]">
                  {user.registrationDate}
                </span>
              </TableCell>
              <TableCell className="py-2">
                <span className="font-normal text-black text-base leading-[14px] [font-family:'Inter',Helvetica] tracking-[0]">
                  {user.license}
                </span>
              </TableCell>
              <TableCell className="py-2">
                <div className="flex items-center gap-5">
                  <Button variant="ghost" size="icon" className="h-auto p-0">
                    <EyeIcon className="w-[27px] h-6 text-gray-700" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-auto p-0">
                    <PencilIcon className="w-4 h-4 text-gray-700" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-auto p-0">
                    <Trash2Icon className="w-[17.2px] h-[16.5px] text-gray-700" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
