type Social = {
    name: string;
    icon: string | null;
    dest: string;
}[];

export const sns: Social = [
    { name: 'YouTube', icon: 'mdi:youtube', dest: 'https://www.youtube.com/channel/UCOrmSFsEeZsMd464vcBTILg' },
    { name: 'Twitter', icon: 'mdi:twitter', dest: 'https://twitter.com/ChocoLatteCh_' },
    { name: 'Facebook', icon: 'mdi:facebook', dest: 'https://www.facebook.com/ChocoLatte.Channel' },
    { name: 'Tiktok', icon: 'ic:baseline-tiktok', dest: 'https://www.tiktok.com/@chocolattech_' },
    { name: 'Instagram', icon: 'mdi:instagram', dest: 'https://www.instagram.com/chocolattech_' },
    { name: 'Twitch', icon: 'mdi:twitch', dest: 'https://www.twitch.tv/chocolattech' },
    { name: 'Discord server', icon: 'ic:baseline-discord', dest: 'https://discord.gg/cVmy5bTaTs' },
];
