---
description: >-
  For those who really want to use dark mode before it's officially added to the
  builder.
---

# ▶ Dark mode (unofficial)

{% embed url="https://youtu.be/ObSBIBG2Htg" %}

1. Add the [Stylebot ](https://stylebot.dev/)addon to your browser.
2. Open the [Webstudio Builder](https://apps.webstudio.is/)
3. Click on the stylebot addon -> open Stylebot
4. Select the code view at the bottom of the panel
5. Paste in CSS code supplied below
6. Click on the stylebot addon again and toggle on apps.webstudio.is
7. You now have dark mode 🦉🌙, enjoy.&#x20;

CSS code to paste into stylebot:



```css
/*Core colors*/
:root {
    --colors-blue1: #0D1520;
    --colors-blue2: #111927;
    --colors-blue3: #0D2847;
    --colors-blue4: #003362;
    --colors-blue5: #004074;
    --colors-blue6: #104D87;
    --colors-blue7: #205D9E;
    --colors-blue8: #2870BD;
    --colors-blue9: #0090FF;
    --colors-blue10: #3B9EFF;
    --colors-blue11: #70B8FF;
    --colors-blue12: #C2E6FF;
    --colors-slate1: #111113; 
    --colors-slate2: #18191B;
    --colors-slate3: #212225;
    --colors-slate4: #272A2D;
    --colors-slate5: #2E3135;
    --colors-slate6: #363A3F;
    --colors-slate7: #43484E;
    --colors-slate8: #5A6169;
    --colors-slate9: #696E77;
    --colors-slate10: #777B84;
    --colors-slate11: #B0B4BA;
    --colors-slate12: #ffffff;
    --colors-slate0: #ffffff;
    --colors-crimson1: #191114;
    --colors-crimson2: #201318;
    --colors-crimson3: #381525;
    --colors-crimson4: #4D122F;
    --colors-crimson5: #5C1839;
    --colors-crimson6: #6D2545;
    --colors-crimson7: #873356;
    --colors-crimson8: #B0436E;
    --colors-crimson9: #E93D82;
    --colors-crimson10: #EE518A;
    --colors-crimson11: #FF92AD;
    --colors-crimson12: #FDD3E8;
    
/*Variable fixers*/
 --ws-section-title-button-content-color: var(--colors-slate7);
    --ws-section-title-label-content-color: var(--colors-slate7);
    --colors-foregroundMain: var(--colors-slate11) ;
    --colors-backgroundControls: var(--colors-slate3);
    --colors-borderMain: var(--colors-slate4);
    --colors-foregroundLocalMain: var(--colors-blue11);
    --colors-backgroundLocalMain: var(--colors-blue3);
    --colors-borderLocalMain: var(--colors-blue6);
    --colors-backgroundPresetMain: var(--colors-slate1);
    --colors-backgroundPresetHover: var(--colors-slate1);
    --colors-backgroundHover: var(--colors-slate1);
    --colors-backgroundTopbar: var(--colors-slate2);
    --colors-loContrast: var(--colors-slate3);
    --colors-panelOutline: var(--colors-slate6);
    --colors-backgroundCanvas: var(--colors-slate6);
    --colors-panelOutline: var(--colors-slate4);
    --colors-foregroundContrastMain: var(--colors-slate0);
    --colors-backgroundTopbarHover: var(--colors-slate1);
    --colors-backgroundMenu: var(--colors-slate1);
    --colors-borderMain: var(--colors-slate4);
    --colors-backgroundItemMenuItemHover: var(--colors-slate5);
    --colors-backgroundPanel: var(--colors-slate1);
    --colors-foregroundIconMain: var(--colors-slate12);
    --colors-brandBackgroundProjectCardTextArea: var(--colors-slate3);
    --colors-brandBackgroundProjectCardBack: var(--colors-slate1);
    --colors-backgroundRemoteMain: var(--colors-crimson3);
    --colors-borderRemoteMain: var(--colors-crimson4);
    --colors-foregroundRemoteMain: var(--colors-crimson11);
    --colors-backgroundStyleSourceNeutral: var(--colors-slate1);
    --colors-backgroundSpacingLeftRight: var(--colors-slate2);
    --colors-backgroundSpacingHover: var(--colors-slate3);
    --colors-gray2: var(--colors-slate2);
}
body {
    background-color: var(--colors-slate1);
}

/*no need for Style Source title as the tab has "Style" */
.c-gOdqcR-iknUwJk-css {
    display: none;
}

/*this is a fix as a double border currently exists as there is already a border. */
.c-eTBQfB {
    box-shadow: none;
}

/*dashboard project card image text color fix*/
.c-cDISih {
    color: var(--colors-slate7);
}
/*CSS preview fixer*/
.token.comment {
    color: var(--colors-slate12);
}
.token.function {
    color: var(--colors-crimson10);
}
.language-css {
    color: var(--colors-slate10);
}
```
