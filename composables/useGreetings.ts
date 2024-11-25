export const useGreetings = () => {
    if (import.meta.client) {
        console.log(
            "%c👋 WELCOMEEE!%c Welcome to Choco Latte's website! 🍫",
            'color: black; font-size: 16px; border-radius: 3px 0 0 3px; padding: 2px 2px 1px 10px; background: #9ca3af',
            'border-radius: 0 3px 3px 0; font-size: 16px; padding: 2px 10px 1px 2px; background: #0f172a',
            '',
        );
        console.log(
            "❗️ %cWarn %c Close this devtools if you don't understand what you gonna do.",
            'color: black; border-radius: 3px 0 0 3px; padding: 2px 2px 1px 10px; background: #f59e0b',
            'border-radius: 0 3px 3px 0; padding: 2px 10px 1px 2px; background: #78350f',
            '',
        );
        console.log(
            '🤎 %cInfo %c Proudly present by Azukashiic.',
            'color: black; border-radius: 3px 0 0 3px; padding: 2px 2px 1px 10px; background: #22d3ee',
            'border-radius: 0 3px 3px 0; padding: 2px 10px 1px 2px; background: #164e63',
            '',
        );
        console.log(
            '🤎 %cInfo %c Enjoy your visit!',
            'color: black; border-radius: 3px 0 0 3px; padding: 2px 2px 1px 10px; background: #22d3ee',
            'border-radius: 0 3px 3px 0; padding: 2px 10px 1px 2px; background: #164e63',
            '',
        );
    }
};
