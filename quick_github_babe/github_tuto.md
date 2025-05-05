# 🚀 Push Local Project to GitHub

### ✅ Step-by-Step Commands:

```bash
# 1. Navigate to your project folder
cd your-folder-name

# 2. Initialize Git
git init

# 3. Set Git username (only once per system)
git config --global user.name "Your Name"

# 4. Set Git email (only once per system)
git config --global user.email "youremail@example.com"

# 5. Add all files to staging
git add .

# 6. Commit your changes
git commit -m "First commit"

# 7. Add remote origin (your GitHub repo link)
git remote add origin https://github.com/YourUsername/your-repo-name.git

# 8. Rename current branch to main
git branch -M main

# 9. Optional: Pull if GitHub repo has README or other files
git pull origin main --allow-unrelated-histories

# 10. Push code to GitHub
git push -u origin main
