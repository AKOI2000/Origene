// Preload all critical assets (images + fonts)
async function preloadAssets() {
    await Promise.all([preloadImages(), preloadFonts()]);
  }
  
  // Preload images safely
  async function preloadImages() {
    const imageUrls = [
      "/image/ORIGENE_WEB_HERO_IMAGE_2_1.png",
      "/images/About_Main.png",
      "/images/HQ_0020_copy_2_3.png",
      "/images/ORIGENE_HORIZONTAL_BLACK.png",
    ];
  
    const promises = imageUrls.map(
      (src) =>
        new Promise((resolve) => { // resolve even on error
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        })
    );
  
    await Promise.all(promises);
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
  


