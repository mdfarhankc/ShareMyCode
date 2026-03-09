let fontCSSCache: string | null = null;

export async function getJetBrainsMonoCSS(): Promise<string> {
    if (fontCSSCache) return fontCSSCache;

    const fontUrl =
        "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap";

    const cssRes = await fetch(fontUrl);
    const cssText = await cssRes.text();

    // Extract all font URLs and convert to base64
    const fontFaceRegex = /url\((https:\/\/[^)]+)\)/g;
    let result = cssText;
    const matches = [...cssText.matchAll(fontFaceRegex)];

    for (const match of matches) {
        const url = match[1];
        const fontRes = await fetch(url);
        const blob = await fontRes.blob();
        const base64 = await blobToBase64(blob);
        result = result.replace(url, base64);
    }

    fontCSSCache = result;
    return result;
}

function blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
    });
}
