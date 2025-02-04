export interface Config {
  siteName: string;
}

export function defineSiteConfig(config: Partial<Config>): Config {
  return {
    siteName: config.siteName || "Tzz.Dev",
  };
}
