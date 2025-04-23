export interface NavLink {
    /** 站点名称 */
    title: string
    /** 站点链接 */
    link: string
}

export type NavData = {
    title: string
    items: NavLink[]
}