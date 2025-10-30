'use client'

import { Avatar } from '@/components/avatar'
import { Button } from '@/components/button'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/dropdown'
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '@/components/navbar'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/components/sidebar'
import { SidebarLayout } from '@/components/sidebar-layout'

import {
  ArrowRightStartOnRectangleIcon,
  ChevronUpIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from '@heroicons/react/16/solid'
import {
  Squares2X2Icon,
  FolderIcon,
  UserGroupIcon,
  BanknotesIcon,
} from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'

function AccountDropdownMenu({ anchor }) {
  return (
    <DropdownMenu className="min-w-64" anchor={anchor}>
      <DropdownItem href="#">
        <UserCircleIcon />
        <DropdownLabel>My account</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="#">
        <ShieldCheckIcon />
        <DropdownLabel>Privacy policy</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="/login">
        <ArrowRightStartOnRectangleIcon />
        <DropdownLabel>Sign out</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  )
}

export function ApplicationLayout({ children }) {
  let pathname = usePathname()

  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar initials="RP" square />
              </DropdownButton>
              <AccountDropdownMenu anchor="bottom end" />
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar className="[&[data-collapsed=true]_[data-label]]:hidden [&[data-collapsed=true]_[data-logo]]:opacity-0 [&[data-collapsed=true]_[data-logo-short]]:opacity-100 [&[data-collapsed=true]_[data-new-project]]:hidden">
          <SidebarHeader>
            <div className="flex items-center justify-center px-2 py-2.5">
              <img src="/glide-logo.svg" alt="Glide" data-logo className="h-6 w-auto transition-opacity duration-300 opacity-100" />
              <span data-logo-short className="text-xl font-bold text-zinc-900 dark:text-white opacity-0 transition-opacity duration-300 absolute">G</span>
            </div>
          </SidebarHeader>

          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/overview" current={pathname === '/overview'}>
                <Squares2X2Icon />
                <SidebarLabel data-label className="transition-opacity duration-300">Overview</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/accounting-dashboard/projects" current={pathname.startsWith('/accounting-dashboard/projects')}>
                <FolderIcon />
                <SidebarLabel data-label className="transition-opacity duration-300">Projects</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/accounting-dashboard/talent" current={pathname.startsWith('/accounting-dashboard/talent')}>
                <UserGroupIcon />
                <SidebarLabel data-label className="transition-opacity duration-300">Talent</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/accounting-dashboard/billing" current={pathname.startsWith('/accounting-dashboard/billing')}>
                <BanknotesIcon />
                <SidebarLabel data-label className="transition-opacity duration-300">Billing</SidebarLabel>
              </SidebarItem>
            </SidebarSection>

            <SidebarSpacer />
          </SidebarBody>

          <SidebarSection data-new-project className="mb-4 transition-opacity duration-300">
            <div className="px-2">
              <div className="rounded-lg bg-zinc-50 dark:bg-zinc-800/50 p-3 border border-zinc-200 dark:border-zinc-700">
                <div className="text-center mb-2">
                  <p className="text-xs/4 font-medium text-zinc-900 dark:text-zinc-100">Let&apos;s start!</p>
                  <p className="text-[10px]/5 text-zinc-600 dark:text-zinc-400 mt-0.5">Create or add a new request:</p>
                </div>
                <div className="flex justify-center">
                  <a 
                    href="/projects/new" 
                    className="w-3/4 justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-xs/4 py-1.5 px-2 rounded-lg border-0 flex items-center gap-1 font-medium bg-lime-400/20 text-lime-700 dark:bg-lime-400/10 dark:text-lime-300"
                  >
                    <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    New Project
                  </a>
                </div>
              </div>
            </div>
          </SidebarSection>

          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar initials="RP" className="size-8" square alt="" />
                  <span className="min-w-0">
                    <span className="block truncate text-xs/4 font-medium text-zinc-950 dark:text-white">Rohan Prajapati</span>
                    <span className="block truncate text-[10px]/4 font-normal text-zinc-500 dark:text-zinc-400">
                      Rova Partners
                    </span>
                  </span>
                </span>
                <ChevronUpIcon />
              </DropdownButton>
              <AccountDropdownMenu anchor="top start" />
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  )
}
