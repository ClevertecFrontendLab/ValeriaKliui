import { Collapsed } from "@components/Sidebar/interfaces"

export type SidebarCloseProps = Partial<Omit<Collapsed, 'setCollapsed'>> & {
    onClick: () => void
}