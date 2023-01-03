type Main = {
    name: string;
    footer: string | null;
};

const currentYear = new Date().getFullYear();

export const main: Main = {
    name: 'Choco Latte チョコラテ',
    footer: `© Copyright ${currentYear} Choco Latte`,
};
