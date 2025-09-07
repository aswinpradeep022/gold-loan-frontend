import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import { LayoutDashboard, Users } from "lucide-react";
import { AiFillGolden } from "react-icons/ai";

const SidebarComponent = () => {
  const { state, toggleSidebar } = useSidebar(); // ✅ Using useSidebar hook
  const isCollapsed = state === "collapsed";

  const navigationItems = [
    { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard" },
    { title: "Customers", icon: Users, url: "/customers" },
  ];

  return (
    <Sidebar
      collapsible="none"
      className={`border-r border-gray-200 bg-gradient-to-b from-slate-50 to-blue-50 bg-[#FAFAFA]
        transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"}`}
    >
      {/* Header */}
      <SidebarHeader
        onClick={toggleSidebar}
        className={`${
          isCollapsed ? "w-50" : "w-64"
        } cursor-pointer p-6 bg-gradient-to-r from-emerald-50 to-blue-50 border-b border-r border-gray-200 flex justify-between items-center`}
      >
        {/* Logo + Collapse Icon */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
            <AiFillGolden className="h-6 w-6 text-white" />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-xl font-bold text-gray-900">Gold Loan</h1>
              <p className="text-sm text-gray-600">Management System</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent className="p-4">
        <SidebarGroup>
          {!isCollapsed && (
            <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Main Navigation
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.url === window.location.pathname}
                    className={`justify-start px-6 py-6 rounded-xl transition-all duration-200 hover:bg-white hover:shadow-md group data-[active=true]:bg-white data-[active=true]:shadow-md data-[active=true]:border data-[active=true]:border-emerald-100 ${
                      isCollapsed ? "justify-center px-2" : ""
                    }`}
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-gray-600 group-hover:text-emerald-600 group-data-[active=true]:text-emerald-600" />
                      {!isCollapsed && (
                        <span className="font-medium text-gray-700 group-hover:text-gray-900 group-data-[active=true]:text-gray-900">
                          {item.title}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarComponent;
