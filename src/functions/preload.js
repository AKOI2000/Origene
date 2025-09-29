// Preload all critical assets (images + fonts)
async function preloadAssets() {
    await Promise.all(preloadFonts());
  }
  
  
  // Preload fonts
  async function preloadFonts() {
    try {
      await document.fonts.ready;
    } catch (err) {
      console.warn("Font preload failed, continuing anyway", err);
    }
  }
  
  // Preload with timeout fallback
  export async function preloadWithTimeout(ms = 7000) {
    let timeoutId;
  
    const timeoutPromise = new Promise((resolve) => {
      timeoutId = setTimeout(resolve, ms);
    });
  
    try {
      await Promise.race([preloadAssets(), timeoutPromise]);
    } catch (err) {
      console.warn("Asset preload error, continuing anyway", err);
    } finally {
      clearTimeout(timeoutId);
    }
  }
  


