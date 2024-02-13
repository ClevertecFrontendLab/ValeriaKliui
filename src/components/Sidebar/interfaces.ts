export interface Collapsed {
    collapsed: boolean,
    setCollapsed: (collapsed: boolean) => void
}

export type SidebarProps = Omit<Collapsed, 'setCollapsed'> & {
    toggleSidebar: () => void
}