# UOWD Tech Club Website

A minimalistic, mobile-first single-page website for the UOWD Tech Club market day.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## ✨ Features

- **Mobile-First Design** - Optimized for students scanning QR codes on their phones
- **Single Page** - All information in one smooth-scrolling page
- **Prominent CTAs** - WhatsApp, Instagram, and LinkedIn links are always visible
- **Minimalistic** - Clean, modern design that's easy on the eyes

## 📝 Customization

### Update Social Links

Edit `constants.tsx` and replace the placeholder URLs:

```tsx
export const SOCIAL_LINKS = {
  whatsapp: "https://chat.whatsapp.com/your-actual-link",
  instagram: "https://instagram.com/uowdtechclub",
  linkedin: "https://linkedin.com/company/uowdtechclub"
};
```

### Update Events

Edit the `UPCOMING_EVENTS` array in `constants.tsx` with your real upcoming events.

### Update Achievements

Edit the `ACHIEVEMENTS` array in `constants.tsx` with your club's achievements.

### Update Logo

Replace `uowd_TC_logo.png` with your club logo.

## 🛠 Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite

## 📱 Design Notes

- Fixed social bar on mobile for easy access
- Smooth scroll animations
- Responsive design (mobile → desktop)
- High contrast for outdoor viewing
- Safe area support for iPhone notch
