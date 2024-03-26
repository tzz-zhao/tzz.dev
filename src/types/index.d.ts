export type SiteBaseConfig = {
    name?: string,
    description?: string
}

export type SiteConfig = SiteBaseConfig & {
    locale?: {
        [key: string]: SiteBaseConfig
    }
}