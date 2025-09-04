import React, { useState } from 'react';
import { LuUsersRound } from "react-icons/lu";
import { GrMoney } from "react-icons/gr";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigationItems = [
    {
      name: 'Dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
        </svg>
      ),
      href: '/dashboard'
    },
    {
      name: 'Customers',
      icon:<LuUsersRound />,
      href: '/customers'
    }
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`
      relative 
      ${isCollapsed ? 'w-16 p-0' : 'w-64 pl-4'}
      bg-sidebar border-r border-sidebar-border
      transition-all duration-300 ease-in-out
      flex flex-col h-screen 
    `}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8  rounded-lg flex items-center justify-center">
            <GrMoney />
            </div>
            <span className="text-sidebar-foreground font-semibold text-lg">Gold Loan</span>
          </div>
        )}
        
        <button
          onClick={toggleSidebar}
          className="p-1.5 rounded-md hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-accent-foreground transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`
              flex items-center space-x-3 px-3 py-2 rounded-lg
              text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground
              transition-colors duration-200 group
              ${isCollapsed ? 'justify-center' : ''}
            `}
            title={isCollapsed ? item.name : ''}
          >
            <span className="flex-shrink-0">{item.icon}</span>
            {!isCollapsed && (
              <span className="font-medium">{item.name}</span>
            )}
          </a>
        ))}
      </nav>

      {/* Footer */}
      {/* <div className="p-4 border-t border-sidebar-border">
        {!isCollapsed ? (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-sidebar-accent rounded-full flex items-center justify-center">
              <span className="text-sidebar-accent-foreground text-sm font-medium">U</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sidebar-foreground text-sm font-medium truncate">User Name</p>
              <p className="text-sidebar-foreground/70 text-xs truncate">user@example.com</p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-sidebar-accent rounded-full flex items-center justify-center">
              <span className="text-sidebar-accent-foreground text-sm font-medium">U</span>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Sidebar;
