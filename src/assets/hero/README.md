# How to Add Your Own Printing Press Images

## Quick Start Guide

### Step 1: Prepare Your Images

You'll need **6 images total**:
- 3 background images (landscape, 1920x1080px or larger)
- 3 poster images (portrait, 600x800px recommended)

**Suggested Photos:**

**For Offset Printing:**
- Background: Offset printing machine in action or finished brochures
- Poster: Stack of printed catalogs, brochures, or business cards

**For Graphic Design:**
- Background: Designer workspace, computer with design software
- Poster: Brand identity showcase, logo designs, or creative mockups

**For Digital Printing:**
- Background: Digital printer, large format printing equipment
- Poster: Finished banners, posters, or signage products

### Step 2: Place Images in Assets Folder

1. Copy your images to `src/assets/hero/` directory
2. Name them exactly as shown:
   - `offset-bg.jpg`
   - `offset-poster.jpg`
   - `graphic-bg.jpg`
   - `graphic-poster.jpg`
   - `digital-bg.jpg`
   - `digital-poster.jpg`

### Step 3: Update HeroSlider.jsx

At the **TOP** of the file (after line 2), add these imports:

```javascript
// Import hero images
import offsetBg from '../../assets/hero/offset-bg.jpg';
import offsetPoster from '../../assets/hero/offset-poster.jpg';
import graphicBg from '../../assets/hero/graphic-bg.jpg';
import graphicPoster from '../../assets/hero/graphic-poster.jpg';
import digitalBg from '../../assets/hero/digital-bg.jpg';
import digitalPoster from '../../assets/hero/digital-poster.jpg';
```

Then **UPDATE the slides array** (replace lines 4-26):

```javascript
const slides = [
    {
        id: 1,
        title: 'Offset Printing Excellence',
        subtitle: 'Premium Quality for Your Business',
        description: 'From brochures to catalogs, we deliver precision printing that makes your brand shine. Our state-of-the-art offset printing technology ensures vibrant colors and sharp details.',
        category: 'Offset Printing',
        backgroundImage: offsetBg,
        posterImage: offsetPoster,
        icon: '📄',
    },
    {
        id: 2,
        title: 'Creative Graphic Design',
        subtitle: 'Transform Ideas into Visual Stories',
        description: 'Our expert design team brings your vision to life with stunning graphics that capture attention and communicate your message effectively.',
        category: 'Graphic Design',
        backgroundImage: graphicBg,
        posterImage: graphicPoster,
        icon: '🎨',
    },
    {
        id: 3,
        title: 'Digital & Screen Printing',
        subtitle: 'Modern Solutions for Every Need',
        description: 'Whether it\'s digital printing for quick turnarounds or screen printing for lasting impressions, we have the perfect solution for your project.',
        category: 'Digital Printing',
        backgroundImage: digitalBg,
        posterImage: digitalPoster,
        icon: '🖨️',
    },
];
```

### Step 4: Update the Background Image (line ~168)

**FIND this code** (around line 165-170):

```javascript
<div
    ref={index === currentSlide ? backgroundRef : null}
    className="hero-background hero-background-layer"
    style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(249, 115, 22, 0.4))`,
    }}
/>
```

**REPLACE with**:

```javascript
<div
    ref={index === currentSlide ? backgroundRef : null}
    className="hero-background hero-background-layer"
    style={{
        backgroundImage: slide.backgroundImage 
            ? `linear-gradient(135deg, rgba(15, 23, 42, 0.6), rgba(249, 115, 22, 0.3)), url(${slide.backgroundImage})`
            : `linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(249, 115, 22, 0.4))`,
    }}
/>
```

### Step 5: Update the Poster Image (line ~188-191)

**FIND this code**:

```javascript
<div className="poster-placeholder">
    <div className="poster-icon">🖨️</div>
    <p className="poster-text">{slide.category}</p>
</div>
```

**REPLACE with**:

```javascript
{slide.posterImage ? (
    <img 
        src={slide.posterImage} 
        alt={slide.category}
        className="poster-image"
    />
) : (
    <div className="poster-placeholder">
        <div className="poster-icon">{slide.icon}</div>
        <p className="poster-text">{slide.category}</p>
    </div>
)}
```

### Step 6: Add Poster Image CSS

Add to `HeroSlider.css` (after the `.poster-placeholder` styles):

```css
/* Real poster image */
.poster-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-xl);
}
```

### Step 7: Save and Test

1. Save all files
2. Go to http://localhost:5173
3. The images should now appear in the hero section!

---

## Alternative: Use Free Stock Photos

If you don't have photos yet, try these free stock photo sites:
- **Unsplash** - unsplash.com (search: "printing press", "offset printer", "graphic design")
- **Pexels** - pexels.com (search: "print shop", "branding", "digital printing")
- **Pixabay** - pixabay.com (search: "printer", "design studio")

---

## Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Ensure images are in `src/assets/hero/` folder
- Verify images are .jpg or .png format
- Try refreshing with Ctrl+Shift+R

**Images look blurry?**
- Use higher resolution images
- Backgrounds should be at least 1920x1080px
- Posters should be at least 600x800px

Need help? The current fallback (gradients + icons) will display until you add images.
