# 🎨 First Million Custom Filter Editor

A powerful web-based image filter editor designed specifically for creating custom filters for First Million cameras. This application allows users to create, preview, and export custom image filters with real-time adjustments and professional-grade image processing capabilities.

## ✨ Features

### 🖼️ **Real-time Image Filtering**
- **Live Preview**: See filter effects applied instantly as you adjust parameters
- **Multiple Image Support**: Upload and process your own images
- **High-Quality Processing**: Built on Fabric.js for professional image manipulation

### 🎛️ **Advanced Filter Controls**
- **Color Channels**: Independent Red, Green, and Blue channel adjustments
- **Brightness & Contrast**: Fine-tune image exposure and contrast levels
- **Saturation Control**: Adjust color intensity and vibrancy
- **Gamma Correction**: Precise color curve adjustments

### 💾 **Filter Management**
- **Save Custom Filters**: Create and save your own filter presets
- **Load Existing Filters**: Import previously saved filter configurations
- **Filter Library**: Access to pre-built filter presets (Film, Movie, Retro, etc.)
- **Export Functionality**: Download filters as `.flt` files for camera use

### 🎨 **Pre-built Filter Presets**
- **Original**: Clean, unmodified image
- **Film**: Classic film photography look
- **Movie**: Cinematic color grading
- **Retro**: Vintage aesthetic
- **Gray**: Monochrome conversion
- **Relief**: High contrast relief effect
- **Sharp**: Enhanced sharpness and clarity
- **Cold Color**: Cool temperature adjustment
- **Fade**: Soft, desaturated look

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start creating custom filters!

### Basic Usage
1. **Upload an Image**: Click on the main image area to upload your photo
2. **Adjust Parameters**: Use the sliders to modify:
   - Red, Green, Blue channels
   - Brightness and Contrast
   - Saturation levels
3. **Preview Effects**: See real-time changes in the main canvas
4. **Save Filter**: Click "Save Filter" to create a custom preset
5. **Export**: Download the filter as a `.flt` file for camera use

## 🛠️ Technical Details

### Built With
- **Fabric.js**: Canvas manipulation and image processing
- **HTML5 Canvas**: High-performance image rendering
- **Vanilla JavaScript**: Lightweight, dependency-free implementation
- **CSS3**: Modern, responsive styling

### Filter Format
Filters are saved in a custom `.flt` format with the following structure:
```
C00,<red>,C10,<green>,C20,<blue>,C01,<brightness>,C11,<contrast>,C21,<saturation>,C02,<wb>,C12,<ev>,CRC
```

Where each parameter ranges from 0-100:
- **Red/Green/Blue**: Color channel intensity (0-100)
- **Brightness**: Image brightness (0-100)
- **Contrast**: Image contrast (0-100)
- **Saturation**: Color saturation (0-100)
- **WB**: White balance (currently unused)
- **EV**: Exposure value (currently unused)

### File Structure
```
img-filter/
├── index.html              # Main application interface
├── index.js               # Core application logic
├── myfilter.js            # Filter processing engine
├── script.js              # Fabric.js integration
├── slider_*.js            # Individual slider controls
├── *.css                  # Styling files
├── img/                   # Sample images and assets
├── defaultFlt/            # Pre-built filter presets
└── README.md              # This file
```

## 🎯 Use Cases

### For Photographers
- Create custom color grading presets
- Test filter effects before applying to camera
- Develop signature editing styles

### For First Million Users
- Generate custom filters for your camera
- Share filter configurations with others
- Experiment with different photographic styles

### For Developers
- Integrate filter functionality into other applications
- Learn about real-time image processing
- Extend with additional filter types

## 🔧 Customization

### Adding New Filter Types
1. Create a new slider control file (following `slider_*.js` pattern)
2. Add corresponding HTML elements in `index.html`
3. Update the filter processing logic in `myfilter.js`
4. Modify the export format if needed

### Styling Modifications
- Edit `index.css` for main layout changes
- Modify `slider.css` for slider appearance
- Update `ymModal.css` for modal dialogs

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🤝 Contributing

We welcome contributions! Please feel free to:
- Report bugs and issues
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Fabric.js** for powerful canvas manipulation
- **First Million** for inspiring this filter editor
- **Open source community** for continuous support

---

**Ready to create amazing custom filters?** Open `index.html` in your browser and start experimenting! 🎨✨
