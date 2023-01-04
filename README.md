## 🍫 Choco Latte チョコラテ

Alternative website to [ChocoLatte's carrd.co](https://chocolattech.carrd.co/) with better improvements and better tech stack.

## What improved

### Performance

Performace is important things in website. I saw carrd.co still using old way for routing, such as making new request to the server when routing to another page. In this version, I already fixed it and now it has nice way for routing. It won't make a new request to the server again, and this will speed up user's experience when visiting the website. With progress bar and spinner included when you navigating through pages to improve user interface.

| This version                                                     | carrd.co version                                                     |
| ---------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![This version](https://cdn.upload.systems/uploads/xA7CbxWZ.png) | ![carrd.co version](https://cdn.upload.systems/uploads/Qpn83L86.png) |

### Contrast Ratio

Low-contrast text is difficult or impossible for many users to read. When background and text color having low-contrast, this impact many users. Users may difficult to read the text. This version was better and has nice contrast.

| This version                                                     | carrd.co version                                                     |
| ---------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![This version](https://cdn.upload.systems/uploads/NhoB59RX.png) | ![carrd.co version](https://cdn.upload.systems/uploads/W7X2RHdt.png) |

### Readability

The most impacting things in accessibility is readability. If you have a sharp eyes, you may find the differences between this website and carrd.co version. Typography and readability. This website has bigger font size and have nice font type. In desktop with larger screen, when you visiting carrd.co version, you may can't read some text such as footer section, because the font size is set to `0.625em`. This font size is too small.

| This version                                                     | carrd.co version                                                     |
| ---------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![This version](https://cdn.upload.systems/uploads/PvJvdvxp.png) | ![carrd.co version](https://cdn.upload.systems/uploads/b7WluHhr.png) |

### Better grammar

I found that the carrd.co version has a slighty messed up grammar. With double checking the content, I am now fixed this so users can better understand the aims and objectives conveyed on the website.

### Better layout

You may find too, in carrd.co version, padding and margins are not consistent. Like, it can be `1px`, `2px`, or `4px` in some elements. It's not fixed and same, so the website's appearance may messed up. In this version, with TailwindCSS help, I can make this more consistent.

### and more...

You better tell me.

## License

Source Code distributed under [MIT License](./LICENSE). Copyrights to respective owner (ChocoLatte herself).
