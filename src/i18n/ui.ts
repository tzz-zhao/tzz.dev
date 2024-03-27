/**
 * 利用できる言語
 */
export const languages = {
    ja: '日本語',
    zh: '简体中文',
    en: 'English'
};

/**
 * デフォルト言語
 */
export const defaultLang = 'en';

/**
 * 画面表示用辞書
 */
export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',

        'footer.build': 'Build by',
        'footer.powered': 'Powered by',
        'footer.hosted': 'Hosted on',
        'footer.source': 'The source code is available on'
    },
    ja: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'footer.build': 'Build by',
        'footer.powered': 'Powered by',
        'footer.hosted': 'Hosted on',
    },
    zh: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'footer.build': 'Build by',
        'footer.powered': 'Powered by',
        'footer.hosted': 'Hosted on',
        'footer.source': 'The source code is available on'
    }
} as const;
