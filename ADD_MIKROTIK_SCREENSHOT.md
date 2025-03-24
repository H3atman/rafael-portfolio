# Adding MikroTik Manager Screenshot to Portfolio

Follow these steps to add the MikroTik Manager project screenshot to your portfolio:

## Step 1: Create the Screenshot
1. Open the HTML mockup in your browser (you can open the HTML file in a browser directly)
2. Take a screenshot of the page (Use Windows+Shift+S or your preferred screen capture tool)
3. Crop the screenshot as needed to highlight the user interface
4. Save the screenshot as `mikrotik-manager.jpg` in the `public/projects/` folder

## Step 2: Verify the Update
1. The project has already been added to your projects data in `src\lib\data.ts`
2. Make sure the image path in the data file matches where you saved the screenshot:
   ```javascript
   {
     title: "MikroTik PPPoE Manager",
     // ... other details
     image: "/projects/mikrotik-manager.jpg",
     // ... other details
   }
   ```

## Step 3: Run Your Portfolio to Test
1. Run your portfolio locally with `npm run dev`
2. Verify that the new project appears correctly with the screenshot

## Step 4: Deploy the Update
1. Commit your changes to your repository
2. Deploy the updated portfolio to your hosting provider
