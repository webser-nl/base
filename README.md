# Webser Base Theme

Modern, performance-optimized Drupal 10/11 base theme for Webser projects. Built with Bootstrap 5, focusing on Layout Builder integration, accessibility, and optimal Core Web Vitals.

## 🌟 Features

### Performance First
- **Bootstrap 5 via CDN**: Optimal caching and performance
- **Critical CSS**: Inline critical styles for faster initial render
- **Lazy Loading**: Native lazy loading for images
- **Deferred JavaScript**: All JS loaded with defer attribute
- **Minimal Dependencies**: Only essential libraries loaded
- **Font Optimization**: Font-display: swap for better LCP
- **No Base Theme**: Maximum control, zero overhead

### Modern Frontend
- **Bootstrap 5**: Latest Bootstrap from CDN
- **CSS Custom Properties**: Full CSS variables support
- **Responsive Design**: Mobile-first approach
- **Container Queries**: Modern CSS support
- **Swiper.js**: High-performance slider (lazy loaded)
- **GSAP Ready**: Animation library support (optional)

### Layout Builder Optimized
- Fully styled Layout Builder UI
- Clean section templates
- Responsive grid system
- Extensive spacing utilities
- Background color options
- Custom region support

### Accessibility
- WCAG 2.1 AA compliant
- Semantic HTML5
- Skip links
- Proper ARIA labels
- Keyboard navigation
- Focus indicators
- Screen reader optimized

### Developer Experience
- Clean, well-documented code
- Component-based structure
- Reusable utilities
- Easy to extend
- Theme suggestion system
- Comprehensive hooks

## 📦 Installation

### Method 1: Direct Copy
```bash
cp -r webser_base_new /path/to/drupal/web/themes/custom/webser_base
```

### Method 2: Via Drush
```bash
drush theme:install webser_base
drush config:set system.theme default webser_base -y
drush cr
```

### Requirements
- Drupal 10 or 11
- PHP 8.2+
- Modern browser (CSS Grid, Custom Properties support)

## 🎨 Using the Theme

### As Base Theme

Create a subtheme:

1. **Create subtheme directory:**
   ```bash
   mkdir web/themes/custom/my_theme
   ```

2. **Create `my_theme.info.yml`:**
   ```yaml
   name: My Theme
   type: theme
   description: My custom theme
   core_version_requirement: ^10 || ^11
   base theme: webser_base

   libraries:
     - my_theme/global

   regions:
     header: Header
     content: Content
     footer: Footer
   ```

3. **Override as needed:**
   - Copy templates from webser_base to my_theme
   - Add custom CSS/JS in `my_theme.libraries.yml`
   - Override theme functions in `my_theme.theme`

### Theme Settings

Navigate to **Appearance → Settings → Webser Base**:

#### Social Media Links
- Facebook URL
- Twitter URL
- Instagram URL
- LinkedIn URL
- YouTube URL

#### Performance
- Enable scroll animations (checkbox)
- Enable lazy loading for images (checkbox)

## 🏗️ Structure

```
webser_base/
├── css/
│   ├── variables.css      # CSS custom properties
│   ├── base.css           # Base styles
│   ├── layout.css         # Layout & grid
│   ├── components.css     # Component styles
│   ├── forms.css          # Form styles
│   ├── animations.css     # Scroll animations
│   └── admin.css          # Admin/backend styles
├── js/
│   ├── global.js          # Global behaviors
│   ├── animations.js      # Scroll animations
│   └── swiper-init.js     # Swiper initialization
├── templates/
│   ├── layout/            # Page, HTML, regions
│   ├── content/           # Node, fields
│   ├── blocks/            # Block templates
│   ├── navigation/        # Menus, breadcrumbs
│   ├── form/              # Form elements
│   └── misc/              # Messages, etc.
├── webser_base.info.yml
├── webser_base.libraries.yml
├── webser_base.theme
└── README.md
```

## 🎯 CSS Custom Properties

The theme uses CSS custom properties for easy customization:

### Colors
```css
--color-primary: #0066cc;
--color-secondary: #6c757d;
--color-success: #28a745;
--color-danger: #dc3545;
```

### Spacing
```css
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--section-padding-y: 4rem;
```

### Typography
```css
--font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...;
--font-size-base: 1rem;
--line-height-base: 1.6;
```

Override in your subtheme:
```css
:root {
  --color-primary: #ff6600;
  --section-padding-y: 6rem;
}
```

## 🔧 Customization

### Adding Custom Fonts

1. **Add font files to subtheme:**
   ```
   my_theme/fonts/MyFont-Regular.woff2
   ```

2. **Preload in `html.html.twig`:**
   ```html
   <link rel="preload" href="/themes/custom/my_theme/fonts/MyFont-Regular.woff2" as="font" type="font/woff2" crossorigin>
   ```

3. **Define font-face:**
   ```css
   @font-face {
     font-family: 'MyFont';
     src: url('../fonts/MyFont-Regular.woff2') format('woff2');
     font-display: swap;
   }

   :root {
     --font-family-sans: 'MyFont', sans-serif;
   }
   ```

### Custom Color Scheme

Override in `my_theme/css/custom.css`:
```css
:root {
  --color-primary: #8b5cf6;
  --color-primary-dark: #7c3aed;
  --color-primary-light: #a78bfa;
}
```

### Adding Components

Create in `my_theme/css/components/`:
```css
/* my_theme/css/components/hero.css */
.hero {
  min-height: 500px;
  display: flex;
  align-items: center;
  background: var(--color-primary);
  color: white;
}
```

Add to library:
```yaml
# my_theme.libraries.yml
global:
  css:
    theme:
      css/components/hero.css: {}
```

## 📱 Responsive Breakpoints

Using Bootstrap 5 breakpoints:
- **xs**: < 576px
- **sm**: ≥ 576px
- **md**: ≥ 768px
- **lg**: ≥ 992px
- **xl**: ≥ 1200px
- **xxl**: ≥ 1400px

## ♿ Accessibility Features

- Semantic HTML5 elements
- Skip to main content link
- Proper heading hierarchy
- ARIA landmarks
- Focus indicators
- Keyboard navigation
- Color contrast (WCAG AA)
- Alt text for images
- Form labels

## 🚀 Performance Tips

1. **Optimize images:**
   - Use WebP format
   - Define image styles
   - Use responsive images
   - Enable lazy loading

2. **Minimize CSS:**
   - Only load needed libraries
   - Use critical CSS
   - Avoid @import

3. **JavaScript:**
   - Load libraries conditionally
   - Use defer/async attributes
   - Minimize dependencies

4. **Caching:**
   - Enable Drupal caching
   - Use CDN for static assets
   - Configure browser caching

## 🎬 Using Swiper Slider

1. **Attach library to your template:**
   ```twig
   {{ attach_library('webser_base/swiper') }}
   ```

2. **Create slider markup:**
   ```html
   <div class="swiper"
        data-slides-per-view="1"
        data-slides-per-view-sm="2"
        data-slides-per-view-lg="3"
        data-loop="true"
        data-autoplay="true"
        data-autoplay-delay="3000">
     <div class="swiper-wrapper">
       <div class="swiper-slide">Slide 1</div>
       <div class="swiper-slide">Slide 2</div>
       <div class="swiper-slide">Slide 3</div>
     </div>
     <div class="swiper-pagination"></div>
     <div class="swiper-button-prev"></div>
     <div class="swiper-button-next"></div>
   </div>
   ```

## 🔄 Changelog

### Version 2.0.0 (Current)
- Complete rebuild for Drupal 10/11
- Bootstrap 5 integration via CDN
- Modern CSS with custom properties
- Performance optimizations
- Accessibility improvements
- Layout Builder focus
- No base theme dependency
- Clean, semantic markup
- Comprehensive documentation

### Migrating from 1.x
- **Bootstrap**: Now uses Bootstrap 5 (was 4/mixed)
- **Base theme**: No base theme (was: stable - deprecated!)
- **CSS**: Uses CSS custom properties
- **JS**: All deferred for performance
- **Templates**: Updated for modern Drupal
- **Removed**: Legacy IE support, jQuery UI dependencies

## 🤝 Support

Created and maintained by **Webser**
- Website: https://www.webser.nl
- For issues or questions, consult internal documentation

## 📄 License

GPL-2.0-or-later

---

**Built with ❤️ for modern Drupal projects**
