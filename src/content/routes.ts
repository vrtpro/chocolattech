type Routes = {
    name: string;
    icon: string | null;
    dest: string | { name: string };
}[];

export const routes: Routes = [
    { name: 'About', icon: 'mdi:user', dest: { name: 'About' } },
    { name: 'Model / Costume', icon: 'mdi:tshirt-crew', dest: { name: 'Model' } },
    { name: 'Social Media', icon: 'mdi:web', dest: { name: 'Social' } },
    { name: 'Credits', icon: 'bi:info', dest: { name: 'Credit' } },
    { name: 'Chocommission', icon: 'material-symbols:brush', dest: { name: 'Commision' } },
    { name: 'Donation', icon: 'bxs:donate-heart', dest: { name: 'Donation' } },
    { name: 'Merchandise', icon: 'material-symbols:shopping-cart', dest: { name: 'Merchandise' } },
];
