# VS Code Setup & Asset Integration Guide

## Step 1: Open the Project in VS Code

### On Windows/Mac/Linux:
1. Open **VS Code**
2. Click **File → Open Folder** (or **Ctrl+K Ctrl+O** on Windows/Linux, **Cmd+K Cmd+O** on Mac)
3. Navigate to: `/home/ubuntu/valentine_interactive_app`
4. Click **Select Folder**

### Alternative (Terminal Method):
```bash
cd /home/ubuntu/valentine_interactive_app
code .
```

---

## Step 2: Project Structure Overview

Once the project is open, you'll see this folder structure:

```
valentine_interactive_app/
├── client/
│   ├── public/
│   │   └── assets/          ← YOUR IMAGES & VIDEOS GO HERE
│   │       ├── picA.jpg     ✓ Already added
│   │       ├── picB.jpg     ✓ Already added
│   │       ├── picC.png     ✓ Already added
│   │       ├── picD.png     ✓ Already added
│   │       ├── picE.jpg     ← ADD THIS
│   │       ├── picF.jpg     ← ADD THIS
│   │       ├── picG.jpg     ← ADD THIS
│   │       ├── picH.jpg     ← ADD THIS
│   │       ├── picI.jpg     ← ADD THIS
│   │       ├── picJ.jpg     ← ADD THIS
│   │       ├── picK.jpg     ← ADD THIS
│   │       ├── vidA.mp4     ← ADD THIS
│   │       └── vidB.mp4     ← ADD THIS
│   └── src/
│       ├── pages/           ← All 10 pages are here
│       │   ├── Page1.tsx
│       │   ├── Page2.tsx
│       │   ├── ... (up to Page10.tsx)
│       │   └── FinalPage.tsx
│       ├── App.tsx          ← Main app file (handles navigation)
│       └── index.css        ← Global styles
├── package.json
└── VS_CODE_SETUP_GUIDE.md   ← You are here!
```

---

## Step 3: Adding Your Assets

### Method A: Drag & Drop (Easiest)

1. In VS Code, expand the folder tree on the left
2. Navigate to: `client → public → assets`
3. Open your file explorer (Windows Explorer, Finder, etc.) in another window
4. Locate your files: **Pic E, F, G, H, I, J, K, Vid A, Vid B**
5. **Drag and drop** them directly into the `assets` folder in VS Code

### Method B: Copy-Paste via File Explorer

1. Open your file explorer
2. Navigate to: `C:\Users\YourUsername\valentine_interactive_app\client\public\assets` (Windows) or similar path
3. Copy your image and video files into this folder
4. VS Code will automatically detect them

### Method C: Terminal (Advanced)

If you prefer the command line, open VS Code's integrated terminal:
- **Ctrl + `** (backtick) on Windows/Linux
- **Cmd + `** on Mac

Then run:
```bash
# Copy your files to the assets folder
cp /path/to/your/PicE.jpg client/public/assets/picE.jpg
cp /path/to/your/PicF.jpg client/public/assets/picF.jpg
# ... and so on for all remaining files
```

---

## Step 4: Verify Assets Are Added

After adding your files, you should see them in the `assets` folder:

```
assets/
├── picA.jpg ✓
├── picB.jpg ✓
├── picC.png ✓
├── picD.png ✓
├── picE.jpg ✓ (newly added)
├── picF.jpg ✓ (newly added)
├── picG.jpg ✓ (newly added)
├── picH.jpg ✓ (newly added)
├── picI.jpg ✓ (newly added)
├── picJ.jpg ✓ (newly added)
├── picK.jpg ✓ (newly added)
├── vidA.mp4 ✓ (newly added)
└── vidB.mp4 ✓ (newly added)
```

---

## Step 5: Understanding the Code Structure

### How Pages Reference Assets

Each page file (e.g., `Page6.tsx`) references images like this:

```jsx
<img
  src="/assets/picE.jpg"
  alt="Pic E"
  className="w-64 h-auto object-cover rounded-lg"
/>
```

**Key Point:** The path `/assets/picE.jpg` automatically looks in `client/public/assets/picE.jpg`. The `/` means "from the root of the public folder."

### Example: Page 6 (Pic E)

Open `client/src/pages/Page6.tsx`:

```jsx
import { Button } from "@/components/ui/button";

interface Page6Props {
  onNext: () => void;
}

export default function Page6({ onNext }: Page6Props) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/assets/picE.jpg"  ← This references your file
            alt="Pic E"
            className="w-64 h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text */}
        <p className="text-center text-lg font-semibold text-gray-800">
          I DON'T HIDE BEHIND HUMOR UNLIKE WHAT SOME CARS MIGHT THINK!
        </p>

        {/* Next Button */}
        <div className="flex justify-end">
          <Button
            onClick={onNext}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Next Page
          </Button>
        </div>
      </div>
    </div>
  );
}
```

---

## Step 6: Test the App Locally

Once you've added all assets:

1. Open VS Code's integrated terminal: **Ctrl + `** (Windows/Linux) or **Cmd + `** (Mac)
2. Make sure you're in the project root directory
3. Run:
   ```bash
   pnpm dev
   ```
4. The app will start on `http://localhost:3000`
5. Open your browser and navigate to that URL
6. Test all pages and verify images/videos load correctly

---

## Step 7: File Naming Reference

Here's a quick reference of which file goes where:

| Page | File Name | Type | Location |
|------|-----------|------|----------|
| Page 1 | picA.jpg | Image | `/assets/picA.jpg` ✓ |
| Page 1 | picB.jpg | Image | `/assets/picB.jpg` ✓ |
| Page 2 | picC.png | Image | `/assets/picC.png` ✓ |
| Page 3 | picD.png | Image | `/assets/picD.png` ✓ |
| Page 5 | vidA.mp4 | Video | `/assets/vidA.mp4` |
| Page 6 | picE.jpg | Image | `/assets/picE.jpg` |
| Page 7 | picF.jpg | Image | `/assets/picF.jpg` |
| Page 10 | picG.jpg | Image | `/assets/picG.jpg` |
| Page 10 | picH.jpg | Image | `/assets/picH.jpg` |
| Page 10 | picI.jpg | Image | `/assets/picI.jpg` |
| Page 10 | picJ.jpg | Image | `/assets/picJ.jpg` |
| Page 10 | picK.jpg | Image | `/assets/picK.jpg` |
| Final Page | vidB.mp4 | Video | `/assets/vidB.mp4` |

---

## Step 8: Common Issues & Fixes

### Issue: Images not showing up
**Solution:** 
- Make sure the filename matches exactly (case-sensitive on Linux/Mac)
- Check that the file is in `client/public/assets/`
- Refresh your browser (Ctrl+R or Cmd+R)

### Issue: "Cannot find module" error
**Solution:**
- Make sure you've saved the file (Ctrl+S or Cmd+S)
- The dev server should auto-reload; if not, restart it with `pnpm dev`

### Issue: Video won't play
**Solution:**
- Ensure the video format is `.mp4` (H.264 codec recommended)
- Check file size (very large videos may take time to load)

---

## Step 9: Making Custom Changes (Optional)

If you want to modify text, colors, or button sizes:

1. Open the page file you want to edit (e.g., `client/src/pages/Page6.tsx`)
2. Find the text or styling you want to change
3. Edit it directly in VS Code
4. Save the file (Ctrl+S or Cmd+S)
5. The browser will auto-refresh with your changes

### Example: Change button color on Page 1

Open `client/src/pages/Page1.tsx` and find:
```jsx
<Button
  onClick={onNext}
  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
>
  Next Page
</Button>
```

Change `bg-green-500` to `bg-blue-500` for a blue button. The changes appear instantly!

---

## Step 10: Ready to Deploy!

Once everything looks perfect:

1. All assets are in `client/public/assets/`
2. All pages are working correctly
3. Test on Android Chrome (use your phone or Android emulator)

Then you can deploy the app and share it with others!

---

## Need Help?

If you encounter any issues:
1. Check the browser console for errors (F12 → Console tab)
2. Check the terminal for build errors
3. Make sure all filenames match exactly
4. Restart the dev server: Stop it (Ctrl+C) and run `pnpm dev` again

Good luck! 🚀
