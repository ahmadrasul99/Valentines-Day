# Valentine's Day Proposal Website

A sweet, interactive website to ask your special someone to be your Valentine!

## Features

- 💗 Interactive "No" button that moves around when clicked
- 🎉 Celebration modal when "Yes" is clicked
- 📸 Photo reveal feature
- 💝 Fully responsive design
- 🎨 Beautiful pink gradient theme

## Setup Instructions

### 1. Add Your Custom Images

Replace these placeholder images with your own photos:

1. **proposal-image.jpg** - The main image showing you with flowers (or any proposal image)
   - This appears on the main question page
   - Recommended size: 600px wide minimum

2. **couple-photo.jpg** - A photo of you and your girlfriend together
   - This appears in the final reveal modal
   - Recommended size: 600px wide minimum

**Important:** Make sure your image files are named exactly as shown above, or update the filenames in `index.html` (lines 21 and 50).

### 2. Customize the Text (Optional)

You can personalize the text in `index.html`:

- Line 18: Change "Hafsa" and "Shoaib" to your names
- Line 19: Customize the subtitle message
- Line 35: Update the "Best decision ever" message

## Deploying to Vercel

### Method 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if you haven't already):
   ```bash
   npm install -g vercel
   ```

2. **Navigate to your project folder:**
   ```bash
   cd /path/to/your/project
   ```

3. **Login to Vercel:**
   ```bash
   vercel login
   ```

4. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? Enter a name (e.g., "valentine-proposal")
   - In which directory is your code located? **./** (current directory)
   - Want to override the settings? **N**

5. **Your site is now live!** Vercel will provide you with a URL like:
   `https://valentine-proposal.vercel.app`

### Method 2: Deploy via Vercel Website

1. **Create a GitHub repository:**
   - Go to GitHub and create a new repository
   - Upload all your project files (index.html, styles.css, script.js, and your images)

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Your site will be live in seconds!**

### Method 3: Deploy via Drag & Drop (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Drag and drop your project folder directly onto the page
4. Vercel will automatically deploy it!

## File Structure

```
valentine-proposal/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # Interactive functionality
├── proposal-image.jpg  # Your proposal image (add this)
├── couple-photo.jpg    # Your couple photo (add this)
└── README.md          # This file
```

## Custom Domain (Optional)

After deploying to Vercel, you can add a custom domain:

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Tips

- Test locally by opening `index.html` in your browser
- Make sure your images are optimized (not too large) for fast loading
- The "No" button will move randomly when clicked - this is intentional and adds to the fun!
- You can share the Vercel URL via text message when you're ready to propose!

## Support

If you need help with deployment or customization, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)

## Good Luck! 💗

May your Valentine's proposal be as sweet as this website!
